/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const HeroStyled = styled.section`
  background-image: url("./images/banner.png");
  background-size: contain;
  padding: 43px;
  border-radius: 0.5rem;

  p {
    color: var(--white);
    font: var(--headline1);
    margin: 0;
    text-align: center;
  }

  @media (max-width: 600px) {
    margin: 0 1rem;
    p {
      font-size: 14px;
    }
  }
`;

function Hero() {
  return (
    <HeroStyled aria-label="hero">
      <p>¡Adquiere todos tus productos favoritos al mejor precio!</p>
    </HeroStyled>
  );
}

export default Hero;
