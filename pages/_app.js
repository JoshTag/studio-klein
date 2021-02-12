import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "styles/theme";
import GlobalStyle from "styles/global-style"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
