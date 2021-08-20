/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import ProductList from "./product-list";
import FullBlockSizeView from "./full-block-size-view";
import Overlay from "./overlay";
import CartEmpty from "./shoppingCart/cart-empty";
import GoPay from "./go-pay";
import Location from "./shoppingCart/location";

const ShoppingCartStyled = styled.div`
  .shopping-cart-content {
    background: var(--bg);
    color: var(--cocoabrown);
    position: absolute;
    right: 0;
    inline-size: 35.12rem;
    block-size: inherit;
    min-block-size: inherit;
    display: flex;
    flex-direction: column;
  }
  .section-productList {
    flex-basis: 0;
    flex-shrink: 0;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    overflow: auto;
  }
  @media (max-width: 800px) {
    .shopping-cart-content {
      inline-size: 100%;
    }
  }
`;

function ModalShoppingCart({ modalShoppingCart, modalLocation, modalBuy }) {
  const context = useContext(Context);
  const finalPrice = context.shoppingCart.finalPrice.value;
  const productList = context.shoppingCart.product.value;
  // console.log(context);

  function handleClosedPage() {
    modalShoppingCart(false);
  }

  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <Overlay event={handleClosedPage}>
      <ShoppingCartStyled>
        <FullBlockSizeView>
          <div
            className="shopping-cart-content animate__animated animate__bounceInRight"
            onClick={handleModalClick}
          >
            <div className="section-location">
              <Location
                modalLocation={modalLocation}
                modalShoppingCart={modalShoppingCart}
              />
            </div>
            <div className="section-productList">
              {productList.length > 0 ? (
                <ProductList
                  productList={productList}
                  modalLocation={modalLocation}
                />
              ) : (
                <CartEmpty modalProducts={modalBuy} />
              )}
            </div>
            <div className="section-buttons">
              {productList.length > 0 && (
                <GoPay
                  productList={productList}
                  currentPrice={finalPrice}
                  modalLocation={modalLocation}
                />
              )}
            </div>
          </div>
        </FullBlockSizeView>
      </ShoppingCartStyled>
    </Overlay>
  );
}

export default ModalShoppingCart;
