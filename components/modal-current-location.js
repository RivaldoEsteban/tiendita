import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import location from "../services/geolocation";
import Place from "./place";
import { Context } from "../pages/index";

const ModalCurrentLocationStyled = styled.div`
  position: fixed;
  block-size: 100vh;
  inline-size: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  .modal {
    position: absolute;
    right: calc(50% - (700px / 2));
    top: 9.37rem;
    inline-size: 43.75rem;
    block-size: 22.125rem;
    padding: 2.5rem;
    background: var(--white);
    color: var(--cocoabrown);
    border-radius: 1rem;
    z-index: 10;
  }
  .close {
    position: absolute;
    right: 40px;
    padding: 0.5rem 0.5rem 0.4rem 0.5rem;
    border-radius: 50%;
    background: var(--cocoabrown);
    color: white;
    cursor: pointer;
    border: none;
    text-align: end;
    display: block;
    border: 1px solid;
  }
  h3 {
    margin-top: 3rem;
  }
  .button-submit {
    display: block;
    text-align: center;
    padding: 12px;
    font: var(--button);
    color: var(--white);
    background: var(--malachite);
    border-radius: 0.5rem;
    border: none;
    width: 100%;
  }
  .search-current-location {
    display: flex;
    margin: 1.5rem 0 1rem;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    i {
      position: absolute;
      left: 1rem;
      font-size: 1.5rem;
      top: calc(50% - (1.5rem / 2));
    }
    input {
      border: none;
      display: block;
      width: 100%;
      padding: 1rem 3rem;
      border-radius: 0.5rem;
      outline: none;
      border: 1px solid #b8b4b4;
    }
    input:focus {
      border: 1px solid royalblue;
    }
  }
`;

function ModalCurrentLocation({ modalHidden }) {
  const context = useContext(Context);
  const input = useRef(null);
  const button = useRef(null);
  const modal = useRef(null);
  const [places, setPlaces] = useState({});

  async function handleClickForm() {
    const currentLocation = await location(input.current.value);
    setPlaces(currentLocation.predictions);
  }

  function handleClick() {
    modalHidden(false);
  }
  function handleToUpdatePosition() {
    console.log(context);
    context.value.location.textContent = input.current.value;
    modalHidden(false);
  }

  return (
    <ModalCurrentLocationStyled ref={modal}>
      <div className="modal animate__animated animate__fadeInDown">
        <button className="close" onClick={handleClick}>
          <i className="icon-close"></i>
        </button>
        <div className="modal-location ">
          <h3>¿Dónde quieres recibir tu pedido?</h3>
          <p>
            Para poder ofrecerte productos dentro de tu área, necesitamos tu
            dirección
          </p>
          <div className="search-current-location">
            <i className="icon-mapLocation" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Ingresa tu dirección"
              ref={input}
              onChange={handleClickForm}
            />
          </div>
          <button
            className="button-submit"
            type="submit"
            ref={button}
            onClick={handleToUpdatePosition}
          >
            Buscar
          </button>
        </div>
        {places.length > 2 ? (
          <Place
            places={places}
            input={input.current}
            button={button.current}
          />
        ) : (
          ""
        )}
      </div>
    </ModalCurrentLocationStyled>
  );
}

export default ModalCurrentLocation;
