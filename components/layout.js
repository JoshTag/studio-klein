import React from "react";
import Header from "components/header";
import Head from "next/head";

const Layout = ({ children, page }) => {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='./../public/fonts/Navigo/Navigo-ExtraLight.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='./../public/fonts/Navigo/Navigo-ExtraLight.woff'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='./../public/fonts/Navigo/Navigo-ExtraLight.woff2'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='./../public/fonts/Navigo/Navigo-ExtraLight.eot'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Header page={page} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
