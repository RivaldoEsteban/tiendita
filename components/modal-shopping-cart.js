/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/index";
import ButtonClose from "./button-close";
import Products from "./product-list";

const ShoppingCartStyled = styled.div`
  position: fixed;
  block-size: 100vh;
  inline-size: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  .shopping-cart-content {
    background: var(--bg);
    color: var(--cocoabrown);
    position: absolute;
    right: 0;
    inline-size: 35.12rem;
    block-size: 100vh;
  }
  .location {
    background: var(--white);
    block-size: 4.5rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    box-shadow: 0px -1px 0px 0px #0000000d inset;

    p {
      white-space: nowrap;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      font: var(--body2-regular);
      cursor: pointer;
      border: 2px solid transparent;
      border-radius: 0.5rem;
      padding: 0.5rem;
    }
    p:hover {
      border: 2px solid royalblue;
    }
    b {
      font: var(--body1-bold);
      margin-left: 0.5rem;
    }
  }
  .product-list {
    height: 100%;
  }
  .cart-empty {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    height: 100%;
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

function ModalShoppingCart({ modalShoppingCart }) {
  const context = useContext(Context);
  const location = context.refLocation.value;
  // console.log(context.refLocation);
  const productList = context.shoppingCart.product.value;

  return (
    <ShoppingCartStyled>
      <div className="shopping-cart-content animate__animated animate__bounceInRight">
        <div className="location">
          <p>
            Entregar en: <b>{location}</b>
          </p>
          <ButtonClose modalHidden={modalShoppingCart} />
        </div>
        <div className="product-list">
          {productList.length > 0 ? (
            <Products productList={productList} />
          ) : (
            <div className="cart-empty">
              <img src="./images/family-shoping.png" alt="family shopping" />
              <h3>Tu canasta está vacía</h3>
              <button>Agregar Productos</button>
            </div>
          )}
        </div>
      </div>
    </ShoppingCartStyled>
  );
}

export default ModalShoppingCart;

// {
//   /* {false ? (
//   ""
// ) : (
//   <div className="cart-empty">
//     <img src="./images/family-shoping.png" alt="family shopping" />
//     <h3>Tu canasta está vacía</h3>
//     <button>Agregar Productos</button>
//   </div>
// )} */
// }
