import React, { Children } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 100%;
  box-sizing: border-box;
  border: none;
  color: var(--white);
  background: var(--malachite);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
`;

function Button({ children, event }) {
  return <ButtonStyled onClick={event}>{children}</ButtonStyled>;
}

export default Button;
