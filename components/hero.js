/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const HeroStyled = styled.section`
  position: relative;
  img {
    width: 100%;
    block-size: 15.625rem;
    object-fit: cover;
    border-radius: 1rem;
  }
  p {
    position: absolute;
    block-size: 2.5rem;
    color: var(--white);
    font: var(--headline1);
    top: calc(50% - (2.5rem / 2));
    left: calc(50% - (795px / 2));
    margin: 0;
  }
  @media (max-width: 900px) {
    p {
      font-size: 1.5rem;
      left: calc(50% - (680px / 2));
    }
  }
`;

function Hero() {
  return (
    <HeroStyled aria-label="hero">
      <img src="./images/banner.png" alt="banner-del-hero" />
      <p>¡Adquiere todos tus productos favoritos al mejor precio!</p>
    </HeroStyled>
  );
}

export default Hero;
