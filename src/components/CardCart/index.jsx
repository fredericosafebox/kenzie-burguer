import { StyledCartCard } from "./styles";
import { Counter } from "../Counter";

function CardCart({ product, cart, setCart, updatecheckout }) {
  function removeItem() {
    setCart(
      cart.filter((item) => {
        return item.prod.id !== product.prod.id;
      })
    );
    product.qtd = 0;
    updatecheckout();
  }
  return (
    <StyledCartCard>
      <div className="app__cart--info">
        <div className="app__cart--imgbox">
          <img src={product.prod.img} alt={product.prod.name} />
        </div>
        <div className="app__cart--infobox">
          <h4>{product.prod.name}</h4>
          <p>{product.prod.category}</p>
        </div>
      </div>
      <div className="app__cart--control">
        <button onClick={removeItem}>Remover</button>
        <Counter
          product={product}
          cart={cart}
          setCart={setCart}
          updatecheckout={updatecheckout}
        />
      </div>
    </StyledCartCard>
  );
}

export { CardCart };
