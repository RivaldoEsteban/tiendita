import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 0 40px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
