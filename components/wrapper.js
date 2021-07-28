import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 0 40px;
  box-sizing: border-box;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
