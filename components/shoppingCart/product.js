/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useContext } from "react";
import { Context } from "../../pages/_app";
import styled from "styled-components";

const ProductStyled = styled.div`
  box-shadow: 0px -1px 0px 0px #0000000d inset;
  block-size: 7rem;
  padding: 1.5rem 1rem;
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .product-description {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .product-description {
    gap: 1.5rem;
  }
  .image {
    object-fit: cover;
    height: 50px;
    width: 58px;
  }
  .name {
    font: var(--body2-regular);
    margin: 0;
    margin-bottom: 0.5rem;
  }
  .price {
    font: var(--body1-bold);
    margin: 0;
  }
  .cantidad {
    background: white;
    box-shadow: 0px 11px 29px 0px #0000000d;
    inline-size: 9.18rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    block-size: 2.5rem;
    overflow: hidden;
    border-radius: 0.5rem;
    span {
      font: var(--body2-bold);
    }
    button {
      background: none;
      border: none;
      i {
        font: var(--body2-bold);
      }
    }
  }
  @media (max-width: 600px) {
    .cantidad span {
      font-size: 14px;
    }
  }
`;

function Product({ product, setCurrentPrice, currentPrice }) {
  const context = useContext(Context);
  const gramos = useRef(null);
  const unidad = useRef(null);
  const [pricePerGram, setPricePerGram] = useState(
    Number(product.finalPrice).toFixed(2)
  );
  console.log(pricePerGram);

  let resta = ((Number(product.initialPrice) * 250) / 1000).toFixed(2);
  let resta1 = ((Number(product.initialPrice) * 1) / 1).toFixed(2);

  function subtractGrams() {
    const cantidad = Number(gramos.current.textContent);
    if (cantidad >= 250) {
      gramos.current.textContent = cantidad - 250;
      product.finalGramos = cantidad - 250;
      let price = (Number(pricePerGram) - Number(resta)).toFixed(2);
      setPricePerGram(Number(price));
      product.finalPrice = Number(price);
      console.log(product);
      const newPrice = Number(currentPrice) - Number(resta);
      setCurrentPrice(Number(newPrice).toFixed(2));
    }
  }
  function addGrams() {
    const cantidad = Number(gramos.current.textContent);
    if (cantidad >= 0) {
      gramos.current.textContent = cantidad + 250;
      product.finalGramos = cantidad + 250;

      let price = Number(pricePerGram) + Number(resta);
      setPricePerGram(Number(price).toFixed(2));
      product.finalPrice = Number(price);

      const newPrice = Number(currentPrice) + Number(resta);
      setCurrentPrice(Number(newPrice).toFixed(2));
    }
  }

  function subtractUnits() {
    const cantidad = Number(unidad.current.textContent);
    if (cantidad >= 1) {
      unidad.current.textContent = cantidad - 1;
      product.finalGramos = cantidad - 1;

      const price = (
        Number(pricePerGram) - Number(product.initialPrice)
      ).toFixed(2);
      setPricePerGram(Number(price));
      product.finalPrice = Number(price);

      const newPrice = Number(currentPrice) - Number(resta1);
      setCurrentPrice(Number(newPrice).toFixed(2));
    }
  }

  function addUnits() {
    const cantidad = Number(unidad.current.textContent);
    if (cantidad >= 0) {
      unidad.current.textContent = cantidad + 1;
      product.finalGramos = cantidad + 1;
      const price = (
        Number(pricePerGram) + Number(product.initialPrice)
      ).toFixed(2);
      setPricePerGram(Number(price).toFixed(2));
      product.finalPrice = Number(price);

      const newPrice = Number(currentPrice) + Number(resta1);
      setCurrentPrice(Number(newPrice).toFixed(2));
    }
  }

  return (
    <ProductStyled key={product.name} className="product">
      <div className="product-description">
        <img
          className="image"
          src={`./images/${product.name}.jpg`}
          alt={product.name}
        />
        <div>
          <p className="name">{product.description}</p>
          <p className="price">${pricePerGram}</p>
        </div>
      </div>
      {product.precioAntes ? (
        <div className="cantidad">
          <button onClick={subtractGrams}>
            <i className="icon-minus"></i>
          </button>
          <span>
            <b ref={gramos}>
              {product.finalGramos ? product.finalGramos : 1000}
            </b>
            g
          </span>
          <button onClick={addGrams}>
            <i className="icon-plus"></i>
          </button>
        </div>
      ) : (
        <div className="cantidad">
          <button onClick={subtractUnits}>
            <i className="icon-minus"></i>
          </button>
          <span>
            <b ref={unidad}> {product.finalGramos ? product.finalGramos : 1}</b>
            u
          </span>
          <button onClick={addUnits}>
            <i className="icon-plus"></i>
          </button>
        </div>
      )}
    </ProductStyled>
  );
}

export default Product;
