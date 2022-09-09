import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import { api } from "./services/api.js";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { Modal } from "./components/Modal";
import { Counter } from "./components/Counter";

function App() {
  const [productList, setProductList] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    console.log(cart);
    checkout();
  }, [cart]);

  function checkout() {
    setTotal(
      (
        Math.round(
          cart.reduce((total, product) => {
            return product.prod.price * product.qtd + total;
          }, 0) * 100
        ) / 100
      ).toFixed(2)
    );
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    api.get("products").then((res) => {
      const alteredList = [];
      res.data.forEach((prod) => {
        alteredList.push({
          prod: prod,
          qtd: 0,
        });
      });
      console.log(alteredList);
      setProductList(alteredList);
    });
  }, []);
  function modalToggler(state) {
    setModalOpen(state);
  }
  return (
    <div className="App">
      <GlobalStyle />
      <Header
        width={width}
        setModalOpen={modalToggler}
        setIsFiltered={setIsFiltered}
        setFilteredList={setFilteredList}
        productList={productList}
      />
      <div className="app__comercial--wrapper">
        <Shop
          productList={productList}
          width={width}
          cart={cart}
          setCart={setCart}
          updateCheckout={checkout}
          isFiltered={isFiltered}
          filteredList={filteredList}
        />
        {width > 1400 && (
          <Cart
            cart={cart}
            total={total}
            updateCheckout={checkout}
            setCart={setCart}
          />
        )}
        {modalOpen && (
          <Modal setModalOpen={modalToggler}>
            <Cart
              cart={cart}
              setCart={setCart}
              updateCheckout={checkout}
              total={total}
              modalOpen={modalOpen}
              setModalOpen={modalToggler}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
