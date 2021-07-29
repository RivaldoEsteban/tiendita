/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/index";
const ProductStyled = styled.div`
  inline-size: 12.5rem;
  block-size: 26.62rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  gap: 1rem;
  * {
    margin: 0;
  }
  .button-descuento {
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border-radius: 2rem;
    border: none;
    background: var(--purple-bg);
    color: var(--purple);
    font: var(--caption-bold);
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
  .prices {
    display: flex;
    gap: 0.5rem;
    font: 600 normal 1rem/1.5rem var(--poppins);
  }
  h3 {
    font: var(--body2-regular);
  }
  img {
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
    height: 10rem;
  }
  .previous-price {
    opacity: 0.3;
    position: relative;
  }
  .previous-price::after {
    content: "";
    width: 100%;
    height: 2px;
    background: black;
    opacity: 0.9;
    position: absolute;
    left: 0;
    top: calc(50% - 1px);
  }
`;

function Product({ product, showModal, setDataProduct }) {
  const context = useContext(Context);

  function handleClick(product) {
    context.value.modalData = product;
    showModal(true);
    if (setDataProduct) {
      setDataProduct(product);
    }
  }
  return (
    <ProductStyled id={product.name}>
      <button className="button-descuento">
        <span>{product.discount}%</span>
        dto.
      </button>
      <img src={`./images/${product.name}.jpg`} alt={product.description} />
      <div className="prices">
        <p>${product.precioActual}/kg</p>
        <p className="previous-price">${product.precioAntes}/kg</p>
      </div>
      <h3>{product.description}</h3>
      <button className="button-add" onClick={() => handleClick(product)}>
        Agregar
      </button>
    </ProductStyled>
  );
}

export default Product;
