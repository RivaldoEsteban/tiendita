import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header/header";
import Main from "../components/main";

import ModalCurrentLocation from "../components/modal-current-location";
import ModalBuyProduct from "../components/modal-buy-product";
import ModalShoppingCart from "../components/modal-shopping-cart";
const IndexStyled = styled.div``;

function Index() {
  const [modalProductSelected, setProductSelected] = useState(false);
  const [modalCurrentLocation, setModalCurrentLocation] = useState(false);
  const [modalShoppingCart, setModalShoppingCart] = useState(false);

  return (
    <IndexStyled>
      {modalProductSelected ? (
        <ModalBuyProduct showModal={setProductSelected} />
      ) : null}

      {modalCurrentLocation ? (
        <ModalCurrentLocation modalHidden={setModalCurrentLocation} />
      ) : null}

      {modalShoppingCart ? (
        <ModalShoppingCart
          modalShoppingCart={setModalShoppingCart}
          modalBuy={setProductSelected}
          modalLocation={setModalCurrentLocation}
        />
      ) : (
        ""
      )}
      <Header
        modalBuyProduct={setModalCurrentLocation}
        modalShoppingCart={setModalShoppingCart}
      />
      <Main
        modalHidden={setModalCurrentLocation}
        showModal={setProductSelected}
      />
    </IndexStyled>
  );
}

export default Index;
