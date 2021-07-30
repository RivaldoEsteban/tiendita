import React, { useState, createContext } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Main from "../components/main";
import Head from "next/head";

import ModalCurrentLocation from "../components/modal-current-location";
import ModalBuyProduct from "../components/modal-buy-product";
import ModalShoppingCart from "../components/modal-shopping-cart";
const IndexStyled = styled.div``;

export const Context = createContext();

function Index() {
  const [modalProductSelected, setProductSelected] = useState(false);
  const [modalCurrentLocation, setModalCurrentLocation] = useState(false);
  const [modalShoppingCart, setModalShoppingCart] = useState(false);

  const [context, setContext] = useState({});
  const [location, setLocation] = useState("Selecciona tu ubicación");
  const [shoppingCart, setShoppingCart] = useState("0");
  const [dataProduct, setDataProduct] = useState([]);
  const [productMaduration, setProductMaduration] = useState([]);

  return (
    <Context.Provider
      value={{
        context,
        setContext,
        refLocation: {
          value: location,
          setLocation,
        },
        refCurrentProducts: { value: shoppingCart, setShoppingCart },
        shoppingCart: {
          product: {
            value: dataProduct,
            setDataProduct,
          },
          maduration: {
            value: productMaduration,
            setProductMaduration,
          },
        },
      }}
    >
      <IndexStyled>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <title>Tiendita</title>
        </Head>

        {modalProductSelected ? (
          <ModalBuyProduct showModal={setProductSelected} />
        ) : null}

        {modalCurrentLocation ? (
          <ModalCurrentLocation modalHidden={setModalCurrentLocation} />
        ) : null}

        {modalShoppingCart ? (
          <ModalShoppingCart modalShoppingCart={setModalShoppingCart} />
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
    </Context.Provider>
  );
}

export default Index;
