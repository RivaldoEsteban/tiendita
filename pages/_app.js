import "../styles/globals.css";
import React, { createContext, useState } from "react";
import Head from "next/head";
export const Context = createContext();
function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState({});
  const [location, setLocation] = useState("Selecciona tu ubicación");
  const [shoppingCart, setShoppingCart] = useState("0");
  const [dataProduct, setDataProduct] = useState([]);
  const [productMaduration, setProductMaduration] = useState([]);
  const [price, setPrice] = useState(0);
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
          finalPrice: { value: price, setPrice },
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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title>Tiendita</title>
      </Head>

      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
