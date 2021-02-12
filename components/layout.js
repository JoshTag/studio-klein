import React from "react";
import Header from "components/header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/Navigo/Navigo-ExtraLight.ttf'
          as='font'
          crossOrigin='true'
          type="font/ttf"
        />
        <link
          rel='preload'
          href='/fonts/Navigo/Navigo-ExtraLight.woff'
          as='font'
          crossOrigin='true'
          type="font/woff"
        />
        <link
          rel='preload'
          href='/fonts/Navigo/Navigo-ExtraLight.woff2'
          as='font'
          crossOrigin='true'
          type="font/woff2"
        />
        <link
          rel='preload'
          href='/fonts/Navigo/Navigo-ExtraLight.eot'
          as='font'
          crossOrigin='true'
          type="font/eot"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
