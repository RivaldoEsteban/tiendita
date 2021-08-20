import React, { useContext } from "react";
import styled from "styled-components";
import ButtonClose from "../button-close";
import { Context } from "../../pages/_app";

const LocationStyled = styled.div`
  background: var(--white);
  block-size: 4.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  box-shadow: 0px -1px 0px 0px #0000000d inset;
  p {
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    font: var(--body2-regular);
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  p:hover {
    border: 2px solid royalblue;
  }
  b {
    font: var(--body1-bold);
    margin-left: 0.5rem;
  }
`;

function Location({ modalLocation, modalShoppingCart }) {
  const context = useContext(Context);
  const location = context.refLocation.value;
  localStorage.setItem("location", location);

  function handleOpenModalLocation() {
    modalLocation(true);
  }

  return (
    <LocationStyled>
      <p onClick={handleOpenModalLocation}>
        Entregar en: <b>{location}</b>
      </p>
      <ButtonClose modalHidden={modalShoppingCart} />
    </LocationStyled>
  );
}

export default Location;
