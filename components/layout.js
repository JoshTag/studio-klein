import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import SEO from "components/seo";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
