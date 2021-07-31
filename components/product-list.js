/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
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
  const [currentPrice, setCurrentPrice] = useState();

  let suma = 0;
  productList.forEach((product) => {
    suma += Number(product[0].precioActual);
  });

  useEffect(() => {
    setCurrentPrice(suma.toFixed(2));
  }, []);

  // console.log(currentPrice);
  return (
    <ProductListStyled>
      <ProductList>
        {productList.map((product) => {
          // console.log(product[0]);
          return (
            <Product
              product={product[0]}
              key={product.name}
              setCurrentPrice={setCurrentPrice}
              currentPrice={currentPrice}
            />
          );
        })}
      </ProductList>
      <GoPay
        productList={productList}
        currentPrice={currentPrice}
        setCurrentPrice={setCurrentPrice}
      />
    </ProductListStyled>
  );
}

export default Products;
