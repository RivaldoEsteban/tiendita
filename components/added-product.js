import React from "react";
import styled from "styled-components";
const AddedProductStyled = styled.div`
  height: 3rem;
  inline-size: 18.75rem;
  background: var(--malachite);
  display: flex;
  justify-content: center;
  color: var(--white);
  align-items: center;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 15;
  .loadBar {
    animation-name: loadBar;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    block-size: 4px;
    inline-size: 0%;
    background: linear-gradient(to top, #abbaab, #ffffff);
    position: absolute;
    bottom: 0;
    left: 0;
    @keyframes loadBar {
      0% {
        inline-size: 0%;
      }
      100% {
        inline-size: 100%;
      }
    }
  }
  @media (max-width: 600px) {
  }
`;

function AddedProduct({ hidden }) {
  (function hiddenModal() {
    setTimeout(() => {
      hidden(false);
    }, 2000);
  })();

  function handleClickHiddenModal() {}
  return (
    <AddedProductStyled className="animate__animated animate__bounceInRight">
      <p>Producto Agregado</p>
      <div className="loadBar"></div>
    </AddedProductStyled>
  );
}

export default AddedProduct;
