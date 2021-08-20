import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FullHigthViewStyled = styled.div`
  min-block-size: ${(props) => props.blockSize};
`;

function FullHigthView({ children }) {
  const [blockSize, setBlockSize] = useState("100vh");
  useEffect(() => {
    setBlockSize(`${window.innerHeight}px`);
  }, []);
  return (
    <FullHigthViewStyled blockSize={blockSize}>{children}</FullHigthViewStyled>
  );
}

export default FullHigthView;
