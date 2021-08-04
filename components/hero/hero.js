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
  @media (max-width: 800px) {
    p {
      font-size: 1.5rem;
      height: auto;
      width: 550px;
      text-align: center;
      top: calc(50% - (72px / 2));
      left: calc(50% - (550px / 2));
    }
  }
  @media (max-width: 650px) {
    p {
      font-size: 1.5rem;
      height: auto;
      width: 400px;
      text-align: center;
      top: calc(50% - (72px / 2));
      left: calc(50% - (400px / 2));
    }
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
    p {
      font-size: 1.5rem;
      height: auto;
      width: 300px;
      text-align: center;
      top: calc(50% - (105px / 2));
      left: calc(50% - (300px / 2));
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
