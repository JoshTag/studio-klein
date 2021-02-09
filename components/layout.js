import React from "react";
import Header from "components/header";
import Head from "next/head";

const Layout = ({ children, page }) => {
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
      <Header page={page} />
      <main>{children}</main>
      <div style={{ height: "1000px" }}>placeholder</div>
    </>
  );
};

export default Layout;
