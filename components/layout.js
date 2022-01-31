import React from "react";
import Header from "components/header";
import SEO from "components/seo";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <SEO />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      {router.pathname === '/' ? null : <Header />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
