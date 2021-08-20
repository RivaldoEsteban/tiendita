/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import Allproducts from "./allProducts";
import AddedProduct from "./added-product";
import morePopular from "../list-products/more-popular";
import FullBlockSizeView from "./full-block-size-view";
import Overlay from "./overlay";
import Button from "./button";
import ButtonClose from "./button-close";
import ProductData from "./modalBuyProduct/product-data";

const ModalBuyProductStyled = styled.div`
  .buy-product-content {
    overflow-y: auto;
    inline-size: 62.5rem;
    block-size: 40rem;
    padding: 2.5rem;
    background: var(--white);
    color: var(--cocoabrown);
    border-radius: 1rem;
    position: absolute;
    top: calc(50% - (20rem));
    right: calc(50% - (62.5rem / 2));
    z-index: 10;
  }

  .close {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    button {
      padding: 0.5rem 0.5rem 0.4rem 0.5rem;
      border-radius: 50%;
      background: var(--cocoabrown);
      color: white;
      cursor: pointer;
      border: none;
    }
  }
  .fruit-ripening {
    margin-top: 2rem;
    h4 {
      margin: 0.5rem 0;
      font: var(--body1-bold);
    }
    select {
      width: 100%;
      border: 1px solid #b8b4b4;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      color: var(--cocoabrown);
      font: var(--body2-regular);
      i {
        color: var(--malachite);
        font-size: 20px;
      }
    }
    button {
      background: var(--malachite);
      color: var(--white);
      border: none;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      width: 100%;
      margin-top: 0.5rem;
    }
  }
  .all-products {
    display: flex;
    gap: 1rem;
  }
  @media (max-width: 1100px) {
    h3,
    h4 {
      margin: 0;
      margin-bottom: 1rem;
    }
    .buy-product-content {
      inline-size: 50rem;
      left: calc(50% - 25rem);
    }
    .description {
      font-size: 1.2rem;
    }
    .price {
      font-size: 1.4rem;
    }
    select {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 950px) {
    .buy-product-content {
      inline-size: 40rem;
      left: calc(50% - 20rem);
    }
  }
  @media (max-width: 750px) {
    .buy-product-content {
      inline-size: 90%;
      block-size: 90%;
      top: calc(100% - 95%);
      left: calc(100% - 95%);
      right: initial;
      padding: 1.5rem 1rem;
    }
    .product-selected {
      flex-direction: column;
      padding: 0;
      width: 100%;
      > * {
        width: 100%;
      }
    }
    .product-image {
      img {
        width: 200px;
      }
    }
  }
`;

function ModalBuyProduct({ showModal }) {
  const context = useContext(Context);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const productFabuloso = morePopular[5];
  const product = context.context.name ? context.context : productFabuloso;
  const addToCart = context.shoppingCart.product.value;

  function handleHideModal() {
    showModal(false);
  }

  function handleDataProduct() {
    if (!purchaseCompleted) {
      setPurchaseCompleted(true);
      const currentProducts = context.refCurrentProducts.value;
      context.refCurrentProducts.setShoppingCart(Number(currentProducts) + 1);
      context.shoppingCart.product.setDataProduct([...addToCart, product]);
    }
  }

  function zIndex() {
    if (showModal) {
      return 12;
    }
  }
  function handleClosedPage() {
    showModal(false);
  }
  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <Overlay zIndex={zIndex} event={handleClosedPage}>
      <ModalBuyProductStyled>
        <FullBlockSizeView>
          {purchaseCompleted && <AddedProduct hidden={setPurchaseCompleted} />}
          <div
            className="buy-product-content  animate__animated animate__fadeInDown"
            onClick={handleModalClick}
          >
            <div className="close">
              <ButtonClose modalHidden={handleHideModal} />
            </div>
            <ProductData product={product} event={handleDataProduct} />
            <div className="product-selected"></div>
            <Allproducts
              showModal={showModal}
              setPurchaseCompleted={setPurchaseCompleted}
            />
          </div>
        </FullBlockSizeView>
      </ModalBuyProductStyled>
    </Overlay>
  );
}

export default ModalBuyProduct;
