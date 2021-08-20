/* eslint-disable @next/next/link-passhref */
import Reactn, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { useRouter } from "next/router";
import Link from "next/link";

const GoPayStyled = styled.div`
  .pay-for-products {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    block-size: 4.5rem;
    padding: 1rem;
    box-shadow: 0px 1px 0px 0px #0000000d inset;
    background: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
  }
  .pay {
    display: flex;
    block-size: 2.5rem;
    inline-size: 14.93rem;
    background: var(--malachite);
    color: var(--white);
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font: var(--body2-bold);
    cursor: pointer;
    border: none;
  }
  .pay:active {
    transform: scale(0.95);
  }
  .amount-product {
    background: #2e7e78;
    padding: 0 0.8rem;
    border-radius: 0.25rem;
    font: var(--body2-bold);
  }
  .cancel-products p {
    color: #b8b4b4;
    cursor: pointer;
    border: 2px solid transparent;
    padding: 0.7rem 1rem;
    border-radius: 0.8rem;
  }
  .cancel-products p:hover {
    border: 2px solid royalblue;
  }
`;

function GoPay({ productList, currentPrice, modalLocation }) {
  const router = useRouter();
  const context = useContext(Context);
  localStorage.setItem("currentPrice", currentPrice);
  const currentLocation = context.refLocation.value;

  function handleRemoveProducts() {
    context.shoppingCart.product.setDataProduct("");
    context.refCurrentProducts.setShoppingCart(0);
  }

  function validateDataUser() {
    if (currentLocation != "Selecciona tu ubicación") {
      router.push("/pay");
    } else {
      modalLocation(true);
    }
  }

  return (
    <GoPayStyled>
      <div className="pay-for-products">
        <div className="cancel-products" onClick={handleRemoveProducts}>
          <p>Vaciar canasta</p>
        </div>
        <button className="pay" onClick={validateDataUser}>
          <p className="amount-product" aria-hidden="true">
            {productList.length}
          </p>
          <p className="text" aria-hidden="true">
            Ir a pagar
          </p>
          <p className="amount" aria-hidden="true">
            $ <b>{currentPrice}</b>
          </p>
        </button>
      </div>
    </GoPayStyled>
  );
}

export default GoPay;
