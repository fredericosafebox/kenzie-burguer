import { FaPlus, FaMinus } from "react-icons/fa";
import { StyledCounter } from "./styles";

function Counter({ cart, setCart, product, updatecheckout }) {
  function increaseItem() {
    setCart(
      cart.map((item) => {
        if (item.prod.id === product.prod.id) {
          item.qtd++;
          return item;
        }
        return item;
      })
    );
    updatecheckout();
  }

  function decreaseItem() {
    if (product.qtd == 1) {
      setCart(
        cart.filter((item) => {
          return item.prod.id !== product.prod.id;
        })
      );
      product.qtd = 0;
    } else {
      setCart(
        cart.map((item) => {
          if (item.prod.id === product.prod.id) {
            item.qtd--;
            return item;
          }
          return item;
        })
      );
    }
    updatecheckout();
  }

  return (
    <StyledCounter>
      <button className="app__cart--counter" onClick={decreaseItem}>
        <FaMinus size={12} />
      </button>
      <span>{product.qtd}</span>
      <button className="app__cart--counter" onClick={increaseItem}>
        <FaPlus size={12} />
      </button>
    </StyledCounter>
  );
}

export { Counter };
