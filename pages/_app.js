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
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="favicon/ms-icon-144x144.png"
        />
        <meta
          name="description"
          content="Realiza la compra de tu despensa semanal de manera digital! Tiendita te ayuda a protegerte de los contagios y no extrañar ninguno de los productos del supermercado en tu hogar."
        />
        <meta
          name="theme-color"
          content="#FC462D"
          media="(prefers-color-scheme: light)"
        />

        <meta
          name="theme-color"
          content="#FC462D"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          property="og:title"
          content="Tiendita - Rivaldo Esteban portafolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tiendita-nu.vercel.app/" />

        <meta
          property="og:image"
          content="https://github.com/RivaldoEsteban/tiendita/blob/main/public/images/banner.png?raw=true"
        />
        <title>Tiendita - Rivaldo Esteban portafolio</title>
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
