import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Hero from "./hero";
import Offer from "./ofertas";
import PopularProducts from "./popular";

const MainStyled = styled.main`
  padding: 2.5rem 0;
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`;

function Main({ showModal }) {
  return (
    <MainStyled>
      <Wrapper>
        <div className="main-content">
          <Hero />
          <Offer showModal={showModal} />
          <PopularProducts showModal={showModal} />
        </div>
      </Wrapper>
    </MainStyled>
  );
}

export default Main;
