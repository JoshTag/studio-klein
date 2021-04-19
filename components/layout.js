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
        <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
