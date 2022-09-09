import { StyledDiv } from "./styles";
import { useEffect, useState } from "react";
import { CardCart } from "../CardCart";
import { GrClose } from "react-icons/gr";

function Cart({
  cart,
  setCart,
  updatecheckout,
  total,
  modalOpen,
  setModalOpen,
}) {
  function removeAll() {
    cart.forEach((product) => (product.qtd = 0));
    setCart([]);
  }
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <StyledDiv>
      <div className="app__cart--titlebox">
        <h2>Carrinho de compras</h2>
        {modalOpen && (
          <button onClick={closeModal}>
            <GrClose size={22} className="icon" />
          </button>
        )}
      </div>
      {Number(total) !== 0 ? (
        <>
          <ul className="app__cart--productsbox">
            {cart.map((product) => {
              return (
                <CardCart
                  key={product.prod.id}
                  cart={cart}
                  setCart={setCart}
                  product={product}
                  updatecheckout={updatecheckout}
                />
              );
            })}
          </ul>
          <div className="app__cart--checkoutbox">
            <div className="app__cart--checkoutinfo">
              <h5>Total</h5>
              <span>{`R$ ${total}`}</span>
            </div>
            <div className="app__cart--clearcart">
              <button onClick={removeAll}>Remover todos</button>
            </div>
          </div>
        </>
      ) : (
        <div className="noItens">
          <h2>
            Sua sacola está vazia <span>Adicione itens</span>
          </h2>
        </div>
      )}
    </StyledDiv>
  );
}

export { Cart };
