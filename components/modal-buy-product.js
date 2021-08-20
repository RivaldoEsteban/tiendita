/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import Allproducts from "./allProducts";
import AddedProduct from "./added-product";
import morePopular from "../list-products/more-popular";

const ModalBuyProductStyled = styled.div`
  position: fixed;
  block-size: 100vh;
  inline-size: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => props.zIndex || 5};
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
  .product-selected {
    display: flex;
  }
  .product-image {
    width: 50%;
    display: flex;
    align-items: center;
    img {
      width: 70%;
      margin: auto;
      object-fit: cover;
      vertical-align: middle;
    }
  }
  .product-description {
    width: 50%;
    padding: 1.5rem;
    .description {
      margin: 1rem 0;
      font: var(--headline1);
    }
    .price {
      margin: 0;
      font: var(--headline2);
    }
    .iva {
      margin: 0;
      font: var(--caption-regular);
    }
    .peso {
      margin: 0.5rem 0;
      font: var(--body1-regular);
    }
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
      return 11;
    }
  }
  function handleClosedPage() {
    showModal(false);
  }
  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <>
      <ModalBuyProductStyled zIndex={zIndex} onClick={handleClosedPage}>
        {purchaseCompleted && <AddedProduct hidden={setPurchaseCompleted} />}
        <div
          className="buy-product-content  animate__animated animate__fadeInDown"
          onClick={handleModalClick}
        >
          <div className="close">
            <button onClick={handleHideModal}>
              <i className="icon-close"></i>
            </button>
          </div>
          <div className="product-selected">
            <div className="product-image">
              <img src={`./images/${product?.name}.jpg`} alt={product?.name} />
            </div>
            <div className="product-description">
              <div>
                <h3 className="description">{product?.description}</h3>
                <p className="price">· ${product?.initialPrice} /Kg</p>
                <p className="iva">Precios con IVA incluido</p>
                <p className="peso">
                  Peso aproximado por pieza, puede variar de acuerdo al peso
                  real.
                </p>
              </div>
              <div className="fruit-ripening">
                <button onClick={handleDataProduct}>Agregar al carrito</button>
              </div>
            </div>
          </div>
          <Allproducts
            showModal={showModal}
            setPurchaseCompleted={setPurchaseCompleted}
          />
        </div>
      </ModalBuyProductStyled>
    </>
  );
}

export default ModalBuyProduct;
