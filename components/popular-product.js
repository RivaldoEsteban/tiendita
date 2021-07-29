/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/index";
const PopularProductStyled = styled.div`
  width: 12.5rem;
  block-size: 26.62rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  gap: 1rem;
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

function PopularProduct({ product, showModal, setDataProduct }) {
  const context = useContext(Context);

  function handleClick() {
    context.value.modalData = product;
    showModal(true);
    if (setDataProduct) {
      setDataProduct(product);
    }
  }
  return (
    <PopularProductStyled id={product.name}>
      <img src={`./images/${product.name}.jpg`} alt={product.name} />
      <p className="price">${product.precioActual}</p>
      <p className="description">{product.description}</p>
      <p className="price-gram">{product.gramos}</p>
      <button className="button-add" onClick={handleClick}>
        Agregar
      </button>
    </PopularProductStyled>
  );
}

export default PopularProduct;
