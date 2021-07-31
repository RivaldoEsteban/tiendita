import React from "react";
import styled from "styled-components";
import Product from "./product";
import ofertas from "../list-products/ofertas";

const OfertasStyled = styled.section`
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
  }
`;

function Offers({ showModal }) {
  return (
    <OfertasStyled aria-label="ofertas">
      <h3 className="title-section">Ofertas</h3>
      <div className="product-list">
        {ofertas.map((product) => {
          return (
            <Product
              product={product}
              key={product.name}
              showModal={showModal}
            />
          );
        })}
      </div>
    </OfertasStyled>
  );
}

export default Offers;
