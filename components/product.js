/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import AddedProduct from "./added-product";
import Button from "./button";
import { v4 as uuidv4 } from "uuid";

const ProductStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  cursor: pointer;
  justify-content: space-between;
  > * {
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
  }
  .prices {
    display: flex;
    gap: 0.5rem;
    font: 600 normal 1rem/1.5rem var(--poppins);
  }
  h3 {
    font: var(--body2-regular);
    block-size: 3.5rem;
    margin: 0;
  }
  img {
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
    block-size: 10rem;
    inline-size: 10rem;
  }
  .previous-price {
    opacity: 0.3;
    position: relative;
    color: black;
  }
  .previous-price::after {
    content: "";
    width: 100%;
    height: 2px;
    background: black;
    opacity: 0.3;
    position: absolute;
    left: 0;
    top: calc(50% - 1px);
  }
  .price-gram {
    color: var(--boulder);
    font: var(--caption-regular);
    margin: 0;
    /* color: black; */
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

function Product({ product, showModal, setPurchaseCompleted }) {
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
      context.shoppingCart.product.setDataProduct([
        ...addToCart,
        { product, id: uuidv4() },
      ]);
    }
  }

  function details() {
    showModal(true);
    context.setContext(product);
  }
  return (
    <ProductStyled id={product.name} onClick={details}>
      <div className="product-data">
        {active && <AddedProduct hidden={setActive} />}
        {product.discount && (
          <button className="button-descuento">
            <span>{product.discount}%</span>
            dto.
          </button>
        )}
        <img
          src={`./images/${product.name}.jpg`}
          alt={product.description}
          width="100"
          height="100"
        />
        <div className="prices">
          <p>${product.initialPrice}/kg</p>

          {product.precioAntes && (
            <p className="previous-price">${product.precioAntes}/kg</p>
          )}
        </div>
        <h3>{product.description}</h3>
        {product.gramos && <p className="price-gram">{product.gramos}</p>}
      </div>
      <div>
        <Button event={handleClick}>Agregar</Button>
      </div>
    </ProductStyled>
  );
}

export default Product;
