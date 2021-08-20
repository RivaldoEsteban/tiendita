import React from "react";
import styled from "styled-components";

const OverlayStyled = styled.div`
  position: fixed;
  inline-size: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => props.zIndex || 5};
`;

function Overlay({ children, event, zIndex }) {
  console.log(event);
  return (
    <OverlayStyled zIndex={zIndex} onClick={event}>
      {children}
    </OverlayStyled>
  );
}

export default Overlay;
