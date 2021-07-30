/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { Context } from "../pages/index";
import Allproducts from "./allProducts";
import AddedProduct from "./added-product";

const ModalBuyProductStyled = styled.div`
  position: fixed;
  block-size: 100vh;
  inline-size: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
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
`;

function ModalBuyProduct({ showModal }) {
  const context = useContext(Context);
  const select = useRef(null);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const product = context.context;
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
  return (
    <ModalBuyProductStyled>
      {purchaseCompleted ? <AddedProduct hidden={setPurchaseCompleted} /> : ""}
      <div className="buy-product-content  animate__animated animate__fadeInDown">
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
              <p className="price">· ${product?.precioActual} /Kg</p>
              <p className="iva">Precios con IVA incluido</p>
              <p className="peso">
                Peso aproximado por pieza, puede variar de acuerdo al peso real.
              </p>
            </div>
            <div className="fruit-ripening">
              <h4>Selecciona la madurez que deseas</h4>
              <select name="select" id="select" ref={select}>
                <option value="Maduro (Para hoy)">Maduro (Para hoy)</option>
                <option value="Normal (3-5 días)">Normal (3-5 días)</option>
                <option value="Verde (7 días)">Verde (7 días)</option>
              </select>
              <button onClick={handleDataProduct}>Agregar al carrito</button>
            </div>
          </div>
        </div>
        <Allproducts showModal={showModal} />
      </div>
    </ModalBuyProductStyled>
  );
}

export default ModalBuyProduct;
