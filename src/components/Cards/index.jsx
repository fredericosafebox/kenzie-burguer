import { StyledCard } from "./styles";
import { FaCartPlus } from "react-icons/fa";

function Card({
  id,
  name,
  category,
  price,
  img,
  width,
  cart,
  setCart,
  productList,
  updateCheckout,
}) {
  function addOnCart(event) {
    //
    const novoProduto = productList.find(
      (product) => Number(product.prod.id) === Number(event.currentTarget.id)
    );
    const { id, name, category, price, img } = novoProduto.prod;
    const repeatedProducts = cart.filter(
      (product) => Number(product.prod.id) === Number(id)
    );
    if (repeatedProducts.length > 0) {
      cart.forEach((product, index) => {
        if (Number(product.prod.id) === Number(id)) {
          const newCart = [...cart];
          newCart[index].qtd++;
          setCart(newCart);
        }
      });
    } else {
      novoProduto.qtd = novoProduto.qtd + 1;
      setCart([...cart, novoProduto]);
    }
    updateCheckout();
  }
  const buttonText = "Adicionar ";
  return (
    <StyledCard>
      <div className="app__card--img">
        <img src={img} alt={name} />
      </div>
      <div className="app__card--info">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>{`R$ ${(Math.round(price * 100) / 100).toFixed(2)}`}</span>
        <button id={id} onClick={addOnCart}>
          {width > 580 && buttonText}
          <FaCartPlus />
        </button>
      </div>
    </StyledCard>
  );
}

export { Card };
