import { Card } from "../Cards";
import { StyledList } from "./styles";

function Shop({
  productList,
  width,
  cart,
  setCart,
  updateCheckout,
  isFiltered,
  filteredList,
}) {
  return (
    <StyledList>
      {isFiltered
        ? filteredList.map(({ prod }) => {
            const { id, name, category, price, img } = prod;
            return (
              <Card
                key={id}
                id={id}
                name={name}
                price={price}
                category={category}
                img={img}
                width={width}
                cart={cart}
                setCart={setCart}
                productList={productList}
                updateCheckout={updateCheckout}
              />
            );
          })
        : productList.map(({ prod }) => {
            const { id, name, category, price, img } = prod;
            return (
              <Card
                key={id}
                id={id}
                name={name}
                price={price}
                category={category}
                img={img}
                width={width}
                cart={cart}
                setCart={setCart}
                productList={productList}
                updateCheckout={updateCheckout}
              />
            );
          })}
    </StyledList>
  );
}

export { Shop };
