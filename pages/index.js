import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Main from "../components/main";
import ModalCurrentLocation from "../components/modal-current-location";
import Head from "next/head";
const IndexStyled = styled.div``;

function Index() {
  const [modalCurrentLocation, setModalCurrentLocation] = useState(false);
  return (
    <IndexStyled>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      {modalCurrentLocation ? (
        <ModalCurrentLocation modalHidden={setModalCurrentLocation} />
      ) : (
        ""
      )}
      <Header modalHidden={setModalCurrentLocation} />
      <Main modalHidden={setModalCurrentLocation} />
    </IndexStyled>
  );
}

export default Index;
