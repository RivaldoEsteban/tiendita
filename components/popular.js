import React from "react";
import styled from "styled-components";
import morePopular from "../list-products/more-popular";
import Product from "./product";

const PopularStyled = styled.section`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0px 11px 29px 0px #0000000d;
  .product-list {
    display: flex;
    overflow: auto;
    gap: 3rem;
  }
  .title-section {
    margin: 0 0 40px 0;
    font: var(--headline3);
    color: var(--black);
  }
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

function PopularProducts({ showModal }) {
  return (
    <PopularStyled aria-label="popular products">
      <h3 className="title-section">Los más populares</h3>
      <div className="product-list">
        {morePopular.map((product) => {
          return (
            <Product
              product={product}
              key={product.name}
              showModal={showModal}
            />
          );
        })}
      </div>
    </PopularStyled>
  );
}

export default PopularProducts;
