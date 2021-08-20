import React from "react";
import styled from "styled-components";
import Button from "../button";
const ProductDescriptionStyled = styled.div`
  width: 50%;
  padding: 1.5rem;
  .description {
    margin: 1rem 0;
    font: var(--headline1);
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    margin: 0;
    font: var(--headline2);
  }
  .iva {
    margin: 0;
    font: var(--caption-regular);
  }
  .peso {
    margin: 0.5rem 0;
    font: var(--body1-regular);
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

function ProductDescription({ product, event }) {
  return (
    <ProductDescriptionStyled>
      <div>
        <h3 className="description">{product?.description}</h3>
        <p className="price">· ${product?.initialPrice} /Kg</p>
        <p className="iva">Precios con IVA incluido</p>
        <p className="peso">
          Peso aproximado por pieza, puede variar de acuerdo al peso real.
        </p>
      </div>
      <div className="fruit-ripening">
        <Button event={event}>Agregar al carrito</Button>
      </div>
    </ProductDescriptionStyled>
  );
}

export default ProductDescription;
