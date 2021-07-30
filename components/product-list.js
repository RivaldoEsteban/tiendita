/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "styled-components";
import GoPay from "./go-pay";
import ProductList from "./shoppingCart/product-list";
import Product from "./shoppingCart/product";

const ProductListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  height: 90%;
`;

function Products({ productList }) {
  let suma = 0;
  productList.forEach((product) => {
    suma += Number(product.precioActual);
  });
  console.log(suma);

  return (
    <ProductListStyled>
      <ProductList>
        {productList.map((product) => {
          return <Product product={product} key={product.name} />;
        })}
      </ProductList>
      <GoPay productList={productList} total={suma} />
    </ProductListStyled>
  );
}

export default Products;
