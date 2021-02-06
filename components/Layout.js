import React from "react";
import Header from "./header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/Navigo/Navigo-Regular.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Navigo/Navigo-Medium.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Header />
      <main>{children}</main>
      <div style={{ height: "300px" }}>placeholder</div>
    </>
  );
};

export default Layout;
