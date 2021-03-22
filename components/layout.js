import React from "react";
import Header from "components/header";
import Footer from "components/footer"
import SEO from "components/seo"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
