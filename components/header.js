import React, { useContext, useEffect, useRef } from "react";
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

function Header({ modalHidden }) {
  const currentLocation = useRef(null);
  const shoppingCart = useRef(null);
  const context = useContext(Context);
  console.log(context);
  useEffect(() => {
    context.setContext({
      location: currentLocation.current,
      cart: shoppingCart.current,
      modalData: "",
    });
  }, []);
  function handleClick() {
    modalHidden(true);
  }
  return (
    <HeaderStyled>
      <Wrappeer>
        <div className="header-content">
          <h1 className="header-title">Tiendita</h1>
          <div className="header-user-location">
            <i className="icon-mapLocation"></i>
            <p className="location" onClick={handleClick} ref={currentLocation}>
              Selecciona tu ubicación
            </p>
            <button className="shopping-cart">
              <i className="icon-shoppingCart"></i>
              <span ref={shoppingCart}>0</span>
            </button>
          </div>
        </div>
      </Wrappeer>
    </HeaderStyled>
  );
}

export default Header;