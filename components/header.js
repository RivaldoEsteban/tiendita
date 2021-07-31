import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Wrappeer from "./wrapper";
import { Context } from "../pages/index";

const HeaderStyled = styled.header`
  background: var(--white);
  .header-content {
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-title {
    font: 700 normal 1.37rem/1rem var(--poppins);
    color: #fc462d;
    margin: 0;
  }
  .icon-mapLocation {
    color: #fc462d;
    font-size: 1.5rem;
  }
  .header-user-location {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .location {
    font: var(--body1-bold);
    padding-right: 1rem;
    border-right: 1px solid #b8b4b4;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0;
  }
  .location:hover {
    border: 2px solid royalblue;
  }
  .location:active {
    transform: scale(0.95);
  }
  .shopping-cart {
    color: white;
    background: #0ac763;
    font: var(--button);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    i {
      color: white;
      font-size: 1.5rem;
    }
  }
`;

function Header({ modalBuyProduct, modalShoppingCart }) {
  const context = useContext(Context);

  const location = context.refLocation.value;
  const currentProducts = context.refCurrentProducts.value;

  function handleClick() {
    modalBuyProduct(true);
  }
  function handleShowModal() {
    modalShoppingCart(true);
  }
  return (
    <HeaderStyled>
      <Wrappeer>
        <div className="header-content">
          <h1 className="header-title">Tiendita</h1>
          <div className="header-user-location">
            <i className="icon-mapLocation"></i>
            <p className="location" onClick={handleClick}>
              {location}
            </p>
            <button className="shopping-cart" onClick={handleShowModal}>
              <i className="icon-shoppingCart"></i>
              <span>{currentProducts}</span>
            </button>
          </div>
        </div>
      </Wrappeer>
    </HeaderStyled>
  );
}

export default Header;
