import React, { useState, createContext } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Main from "../components/main";
import ModalCurrentLocation from "../components/modal-current-location";
import Head from "next/head";
import ModalBuyProduct from "../components/modal-buy-product";

const IndexStyled = styled.div``;

export const Context = createContext();

function Index() {
  const [modalProductSelected, setProductSelected] = useState(false);
  const [modalCurrentLocation, setModalCurrentLocation] = useState(false);
  const [context, setContext] = useState({});
  return (
    <Context.Provider value={{ value: context, setContext }}>
      <IndexStyled>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
        {modalProductSelected ? (
          <ModalBuyProduct showModal={setProductSelected} />
        ) : (
          ""
        )}
        {modalCurrentLocation ? (
          <ModalCurrentLocation modalHidden={setModalCurrentLocation} />
        ) : (
          ""
        )}
        <Header modalHidden={setModalCurrentLocation} />
        <Main
          modalHidden={setModalCurrentLocation}
          showModal={setProductSelected}
        />
      </IndexStyled>
    </Context.Provider>
  );
}

export default Index;
