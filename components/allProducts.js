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

function Allproducts({ showModal, setDataProduct }) {
  return (
    <AllproductsStyled>
      <div className="all-products">
        {ofertas.map((product) => {
          return (
            <Product
              product={product}
              showModal={showModal}
              key={product.name}
              setDataProduct={setDataProduct}
            />
          );
        })}

        {morePopular.map((product) => {
          return (
            <PopularProduct
              product={product}
              showModal={showModal}
              key={product.name}
              setDataProduct={setDataProduct}
            />
          );
        })}
      </div>
    </AllproductsStyled>
  );
}

export default Allproducts;
