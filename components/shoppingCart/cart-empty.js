/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const CartEmptyStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .cart-empty {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font: var(--headline3);
      margin: 0;
    }
    button {
      background: var(--malachite);
      color: var(--white);
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
    }
  }
`;

function CartEmpty({ modalProducts }) {
  function handleAddProducts() {
    modalProducts(true);
  }
  return (
    <CartEmptyStyled>
      <div className="cart-empty">
        <img src="./images/family-shoping.png" alt="family shopping" />
        <h3>Tu canasta está vacía</h3>
        <button onClick={handleAddProducts}>Agregar Productos</button>
      </div>
    </CartEmptyStyled>
  );
}

export default CartEmpty;
