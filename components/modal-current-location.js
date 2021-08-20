import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import location from "../services/geolocation";
import Place from "./place";
import { Context } from "../pages/_app";
import FullBlockSizeView from "./full-block-size-view";
import Overlay from "./overlay";

export const ModalCurrentLocationStyled = styled.div`
  .modal {
    /* position: absolute;
    right: calc(50% - (700px / 2));
    top: 9.37rem; */
    inline-size: 43.75rem;
    block-size: 22.125rem;
    padding: 2.5rem;
    background: var(--white);
    color: var(--cocoabrown);
    border-radius: 1rem;
    z-index: 10;
  }

  .container {
    block-size: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    min-block-size: inherit;
  }

  .close-button {
    position: absolute;
    right: 40px;
    padding: 0.5rem 0.5rem 0.4rem 0.5rem;
    border-radius: 50%;
    background: var(--cocoabrown);
    color: white;
    cursor: pointer;
    border: none;
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
  @media (max-width: 750px) {
    .modal {
      inline-size: 28rem;
      right: calc(50% - 14rem);
      block-size: initial;
    }
  }
  @media (max-width: 468px) {
    .container {
      min-block-size: inherit;
      padding: 1rem;
    }
    .modal {
      width: 100%;
      box-sizing: border-box;
      position: initial;
    }
    .place p {
      width: 200px;
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
    if (input.current.value) {
      context.refLocation.setLocation(input.current.value);
      modalHidden(false);
    }
  }

  function zIndex() {
    if (modalHidden) {
      return 11;
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleClosedPage() {
    modalHidden(false);
  }
  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <Overlay event={handleClosedPage} zIndex={zIndex}>
      <ModalCurrentLocationStyled ref={modal}>
        <FullBlockSizeView>
          <div onClick={handleModalClick} className="container">
            <form
              className="modal animate__animated animate__fadeInDown"
              onSubmit={handleSubmit}
            >
              <button className="close-button" onClick={handleClick}>
                <i className="icon-close"></i>
              </button>
              <div className="modal-location">
                <h3>¿Dónde quieres recibir tu pedido?</h3>
                <p>
                  Para poder ofrecerte productos dentro de tu área, necesitamos
                  tu dirección
                </p>
                <div className="search-current-location">
                  <i className="icon-mapLocation" aria-hidden="true"></i>
                  <input
                    type="text"
                    placeholder="Ingresa tu dirección"
                    ref={input}
                    onChange={handleClickForm}
                    required
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
              {places.length > 2 && (
                <Place
                  places={places}
                  input={input.current}
                  button={button.current}
                />
              )}
            </form>
          </div>
        </FullBlockSizeView>
      </ModalCurrentLocationStyled>
    </Overlay>
  );
}

export default ModalCurrentLocation;
