/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import AddedProduct from "./added-product";
const PopularProductStyled = styled.div`
  width: 12.5rem;
  block-size: 26.62rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  gap: 1rem;
  cursor: pointer;
  * {
    margin: 0;
  }
  img {
    vertical-align: middle;
    object-fit: cover;
    box-sizing: border-box;
    width: 12.5rem;
  }
  .button-add {
    width: 100%;
    box-sizing: border-box;
    border: none;
    color: var(--white);
    background: var(--malachite);
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    position: absolute;
    bottom: 0;
  }
  .description {
    font: var(--body2-regular);
    height: 80px;
    width: 100%;
    color: #332927;
  }
  .price-gram {
    color: var(--boulder);
    font: var(--caption-regular);
  }
  .price {
    font: var(--body1-bold);
    color: var(--cocoa-brown);
  }
`;

function PopularProduct({ product, showModal, setPurchaseCompleted }) {
  const context = useContext(Context);
  const [active, setActive] = useState(false);
  const addToCart = context.shoppingCart.product.value;
  function handleClick(event) {
    event.stopPropagation();
    if (!active) {
      setActive(true);
      if (setPurchaseCompleted) {
        setPurchaseCompleted(true);
      }
      context.refCurrentProducts.setShoppingCart(
        Number(context.refCurrentProducts.value) + 1
      );
      context.shoppingCart.product.setDataProduct([...addToCart, product]);
    }
  }

  function details() {
    showModal(true);
    context.setContext(product);
  }

  return (
    <PopularProductStyled id={product.name} onClick={details}>
      {active && <AddedProduct hidden={setActive} />}
      <img src={`./images/${product.name}.jpg`} alt={product.name} />
      <p className="price">${product.initialPrice}</p>
      <p className="description">{product.description}</p>
      <p className="price-gram">{product.gramos}</p>
      <button className="button-add" onClick={handleClick}>
        Agregar
      </button>
    </PopularProductStyled>
  );
}

export default PopularProduct;
