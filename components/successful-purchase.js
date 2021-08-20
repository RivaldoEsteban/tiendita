/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Context } from "../pages/_app";

const SuccessfulPurchaseStyled = styled.div`
  position: fixed;
  block-size: 100vh;
  inline-size: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  .modal {
    position: absolute;
    z-index: 10;
    inline-size: 39.37rem;
    block-size: 30.62rem;
    right: calc(50% - (39.37rem / 2));
    top: calc(50% - (30.62rem / 2));
    border-radius: 0.5rem;
    background: var(--white);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    img {
      width: 284px;
      block-size: 250px;
      margin: auto;
      vertical-align: middle;
    }
    h2 {
      font: var(--headline2);
      color: var(--cocoaBrown);
      margin: 1.5rem 0;
    }
    button {
      color: var(--white);
      background: var(--malachite);
      border-radius: 0.5rem;
      border: none;
      padding: 12px 24px;
    }
  }
  @media (max-width: 650px) {
    padding: 0;
    .modal {
      inline-size: 90%;
      right: calc(5%);
      padding: 1rem;
      text-align: center;
      img {
        width: 100%;
        object-fit: cover;
      }
      button {
        width: 100%;
      }
    }
  }
  @media (max-width: 500px) {
    .modal {
      button {
        width: 100%;
      }
    }
  }
`;

function SuccessfulPurchase() {
  const context = useContext(Context);
  function handleClick() {
    context.shoppingCart.finalPrice.setPrice(0);
    context.shoppingCart.product.setDataProduct([]);
    context.refCurrentProducts.setShoppingCart(0);
    context.setContext({});
  }
  return (
    <SuccessfulPurchaseStyled>
      <div className="modal animate__animated animate__fadeInDown">
        <img src="./images/hands-buying.png" alt="hands buying" />
        <h2>¡Gracias por tu compra!</h2>
        <Link href="/">
          <button onClick={handleClick}>Seguir comprando</button>
        </Link>
      </div>
    </SuccessfulPurchaseStyled>
  );
}

export default SuccessfulPurchase;
