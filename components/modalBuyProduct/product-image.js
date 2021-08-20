/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const ProductImageStyled = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    block-size: 250px;
    inline-size: 250px;
    margin: auto;
    object-fit: cover;
    vertical-align: middle;
  }
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    img {
      display: block;
      margin: auto;
      object-fit: contain;
    }
  }
`;

function ProductImage({ product }) {
  return (
    <ProductImageStyled>
      <div className="product-image">
        <img src={`./images/${product?.name}.jpg`} alt={product?.name} />
      </div>
    </ProductImageStyled>
  );
}

export default ProductImage;
