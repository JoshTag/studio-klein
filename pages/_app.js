import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "styles/theme";
import GlobalStyle from "styles/global-style"
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

export default function App({ Component, pageProps }) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
