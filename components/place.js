import React, { useRef } from "react";
import styled from "styled-components";

const PlaceStyled = styled.div`
  background: var(--white);
  border-radius: 0.5rem;
  border: 1px solid #b8b4b4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  bottom: 50px;
  .place {
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
      font-size: 1.5rem;
      padding: 12px 1rem;
    }
    p {
      font: var(--body2-regular);
      margin: 0.5rem 0;
    }
  }
  .button {
    right: 1rem;
    top: 0.5rem;
    position: absolute;
    padding: 0.5rem 0.5rem 0.4rem 0.5rem;
    border-radius: 50%;
    background: var(--cocoabrown);
    color: white;
    cursor: pointer;
    border: none;
  }
`;

function Place({ places, input, button }) {
  const modal = useRef(null);
  function handleClick(place) {
    button.textContent = "Guardar ";
    input.value = place.description;
    modal.current.style.display = "none";
  }
  return (
    <PlaceStyled className="places" id="places" ref={modal}>
      {places?.map((place) => {
        return (
          <div
            className="place"
            key={place.place_id}
            onClick={() => {
              handleClick(place);
            }}
          >
            <i className="icon-mapLocation" aria-hidden="true"></i>
            <p>{place.description}</p>
          </div>
        );
      })}
    </PlaceStyled>
  );
}

export default Place;
