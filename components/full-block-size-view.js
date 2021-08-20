import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FullHigthViewStyled = styled.div`
  min-block-size: ${(props) => props.blockSize};
`;

function FullBlockSizeView({ children }) {
  const [blockSize, setBlockSize] = useState("100vh");
  function handleResize() {
    setSize();
  }

  function setSize() {
    setBlockSize(`${window.innerHeight}px`);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FullHigthViewStyled blockSize={blockSize}>{children}</FullHigthViewStyled>
  );
}

export default FullBlockSizeView;
