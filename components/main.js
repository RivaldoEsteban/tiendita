import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper/wrapper";
import Hero from "./hero/hero";
import Offer from "./ofertas";
import PopularProducts from "./popular";

const MainStyled = styled.main`
  padding: 2.5rem 0;
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  @media (max-width: 480px) {
    padding: 1.5rem 0;
    .main-content {
      gap: 1.5rem;
    }
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
