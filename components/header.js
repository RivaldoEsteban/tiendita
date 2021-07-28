import React from "react";
import styled from "styled-components";
import Wrappeer from "./wrapper";

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
            <p className="location" onClick={handleClick}>
              México City Marriott Reforma Hotel...
            </p>
            <button className="shopping-cart">
              <i className="icon-shoppingCart"></i>0
            </button>
          </div>
        </div>
      </Wrappeer>
    </HeaderStyled>
  );
}

export default Header;
