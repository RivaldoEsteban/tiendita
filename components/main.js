import React from "react";
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

function Main() {
  return (
    <MainStyled>
      <Wrapper>
        <div className="main-content">
          <Hero />
          <Offer />
          <PopularProducts />
        </div>
      </Wrapper>
    </MainStyled>
  );
}

export default Main;
