/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useContext } from "react";
import Product from "./shoppingCart/product";
import { Context } from "../pages/_app";
import styled from "styled-components";

const ProducList = styled.div`
  inline-size: 100%;
`;

function ProductList({ productList }) {
  const context = useContext(Context);
  const finalPrice = context.shoppingCart.finalPrice.value;
  const setFinalPrice = context.shoppingCart.finalPrice.setPrice;
  const localStorage = window.localStorage;
  localStorage.setItem("products", JSON.stringify(productList));
  localStorage.setItem("finalPrice", JSON.stringify(finalPrice));

  let suma = 0;
  productList.forEach((product) => {
    suma += Number(product.product.finalPrice);
  });

  useEffect(() => {
    setFinalPrice(suma.toFixed(2));
  }, [finalPrice, setFinalPrice, suma]);

  console.log(productList);
  return (
    <ProducList>
      {productList.map((product) => {
        return (
          <Product
            product={product.product}
            key={product.id}
            setCurrentPrice={setFinalPrice}
            currentPrice={finalPrice}
          />
        );
      })}
    </ProducList>
  );
}

export default ProductList;
