/* eslint-disable @next/next/no-img-element */
import React from "react";
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
`;

function Product({ product }) {
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
          <p className="price">${product.precioActual}</p>
        </div>
      </div>
      {product.precioAntes ? (
        <div className="cantidad">
          <button>
            <i className="icon-minus"></i>
          </button>
          <span>250 g</span>
          <button>
            <i className="icon-plus"></i>
          </button>
        </div>
      ) : (
        <div className="cantidad">
          <button>
            <i className="icon-minus"></i>
          </button>
          <span> 1 u</span>

          <button>
            <i className="icon-plus"></i>
          </button>
        </div>
      )}
    </ProductStyled>
  );
}

export default Product;
