import React from "react";
import styled from "styled-components";
import ProductImage from "./product-image";
import ProductDescription from "./product-description";
const ProductDataStyled = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
`;

function ProductData({ product, event }) {
  return (
    <ProductDataStyled>
      <ProductImage product={product} />
      <ProductDescription product={product} event={event} />
    </ProductDataStyled>
  );
}

export default ProductData;
