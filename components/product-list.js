/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import GoPay from "./go-pay";
import ProductList from "./shoppingCart/product-list";
import Product from "./shoppingCart/product";
import { Context } from "../pages/_app";

const ProductListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  height: 90%;
  padding-bottom: 100px;
`;

function Products({ productList, modalLocation }) {
  const context = useContext(Context);
  const finalPrice = context.shoppingCart.finalPrice.value;
  const setFinalPrice = context.shoppingCart.finalPrice.setPrice;

  const localStorage = window.localStorage;
  localStorage.setItem("products", JSON.stringify(productList));
  localStorage.setItem("finalPrice", JSON.stringify(finalPrice));

  let suma = 0;
  productList.forEach((product) => {
    console.log(product);
    suma += Number(product.finalPrice);
  });

  useEffect(() => {
    setFinalPrice(suma.toFixed(2));
  }, [finalPrice, setFinalPrice, suma]);

  return (
    <ProductListStyled>
      <ProductList>
        {productList.map((product) => {
          return (
            <Product
              product={product}
              key={product.name}
              setCurrentPrice={setFinalPrice}
              currentPrice={finalPrice}
            />
          );
        })}
      </ProductList>
      <GoPay
        productList={productList}
        currentPrice={finalPrice}
        modalLocation={modalLocation}
        //  setFinalPrice={setCurrentPrice}
      />
    </ProductListStyled>
  );
}

export default Products;
