import React from "react";
import styled from "styled-components";
export const ButtonCloseStyled = styled.button`
  /* position: absolute; */
  /* right: 40px; */
  padding: 0.5rem 0.5rem 0.4rem 0.5rem;
  border-radius: 50%;
  background: var(--cocoabrown);
  color: white;
  cursor: pointer;
  border: none;
  text-align: end;
  display: block;
  border: none;
  i {
    font-size: 1.3rem;
  }
`;

function ButtonClose({ modalHidden }) {
  function handleClick() {
    modalHidden(false);
  }
  return (
    <ButtonCloseStyled onClick={handleClick}>
      <i className="icon-close"></i>
    </ButtonCloseStyled>
  );
}

export default ButtonClose;
