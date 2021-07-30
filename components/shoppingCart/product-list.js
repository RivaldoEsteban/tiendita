import React from "react";
import styled from "styled-components";

const ProductListStyled = styled.div``;

function ProductList({ children }) {
  return <ProductListStyled>{children}</ProductListStyled>;
}

export default ProductList;
