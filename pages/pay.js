import React, { useEffect, useState, useContext } from "react";
import { Context } from "./_app";
import styled from "styled-components";
import Product from "../components/shoppingCart/product";
import { ButtonCloseStyled } from "../components/button-close";
import Link from "next/link";
import DataClient from "../components/data-client";
import SuccessfulPurchase from "../components/successful-purchase";
const ToPayStyled = styled.div`
  block-size: 100vh;
  > * {
    padding: 1.5rem 2.5rem 2.5rem;
  }
  .back {
    padding: 1rem 2.5rem;
    background: var(--white);
    display: flex;
    gap: 1rem;
    align-items: center;
    .current-location {
      flex: 1;
      font: var(--headline2);
    }
  }
  .buy {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    > * {
      width: 50%;
      border-radius: 0.5rem;
      overflow: hidden;
    }
  }
  .product-list {
    height: 100%;
    background: var(--white);
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border: 1px solid #3c42571f;
  }
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    .buy {
      flex-direction: column;
      gap: 2rem;
      padding: 2rem 1.5rem;
      overflow: scroll;
      > * {
        width: 100%;
        overflow: initial;
        height: auto;
      }
    }
  }
`;

function ToPay() {
  const context = useContext(Context);
  const currentLocation = context.refLocation.value;
  const finalPrice = context.shoppingCart.finalPrice.value;
  const setFinalPrice = context.shoppingCart.finalPrice.setPrice;
  const [products, setProducts] = useState([]);
  const [successfulPurchase, setSuccessfulPurchase] = useState(false);

  useEffect(() => {
    const productsContext = context.shoppingCart.product.value;
    const data = localStorage.products;
    const products =
      productsContext.length > 0 ? productsContext : JSON.parse(data);
    setProducts(products);
  }, []);

  return (
    <ToPayStyled>
      {successfulPurchase ? <SuccessfulPurchase /> : null}
      <div className="back">
        <Link href="/">
          <ButtonCloseStyled>
            <i className="icon-arrowLeft"></i>
          </ButtonCloseStyled>
        </Link>
        <div className="current-location">
          <span>{currentLocation}</span>
        </div>
      </div>
      <div className="buy">
        <div className="product-list">
          {products.map((product) => {
            return (
              <Product
                product={product}
                key={product.name}
                setCurrentPrice={setFinalPrice}
                currentPrice={finalPrice}
              />
            );
          })}
        </div>
        <DataClient
          finalPrice={finalPrice}
          setSuccessfulPurchase={setSuccessfulPurchase}
        />
      </div>
    </ToPayStyled>
  );
}

export default ToPay;
