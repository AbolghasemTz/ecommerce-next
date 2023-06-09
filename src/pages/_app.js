import "@/styles/globals.css";
import Head from "next/head";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Provider } from "react-redux";

import { persistor, store } from '../../store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online shoe store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
      </Provider>
        
    </>
  );
}
