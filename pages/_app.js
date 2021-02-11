import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "styles/theme";
import GlobalStyle from "styles/global-style"
import Layout from "components/layout"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
