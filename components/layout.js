import React from "react";
import Header from "components/header";
import SEO from "components/seo"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
