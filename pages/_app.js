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
        <meta
          property="og:title"
          content="Tiendita || El mercado a la puerta de tu casa"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tiendita-nu.vercel.app/" />
        <meta
          property="og:image"
          content=" https://api.vercel.com/now/files/ee8c657ab4e1996fc137f5f753b5a6d841bc297f/opengraph.png"
        />
        <meta
          property="og:description"
          content="Realiza la compra de tu despensa semanal de manera digital! Tiendita te ayuda a protegerte de los contagios y no extrañar ninguno de los productos del supermercado en tu hogar."
        />
        <title>Tiendita</title>
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
