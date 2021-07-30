import React from "react";
import styled from "styled-components";
import Product from "./product";
import PopularProduct from "./popular-product";
import ofertas from "../list-products/ofertas";
import morePopular from "../list-products/more-popular";
const AllproductsStyled = styled.div`
  margin-top: 3rem;
  .all-products {
    overflow: auto;
    gap: 2rem;
  }
`;

function Allproducts({ showModal }) {
  return (
    <AllproductsStyled>
      <div className="all-products">
        {ofertas.map((product) => {
          return (
            <Product
              product={product}
              key={product.name}
              showModal={showModal}
            />
          );
        })}

        {morePopular.map((product) => {
          return (
            <PopularProduct
              product={product}
              key={product.name}
              showModal={showModal}
            />
          );
        })}
      </div>
    </AllproductsStyled>
  );
}

export default Allproducts;
