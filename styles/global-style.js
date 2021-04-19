import { createGlobalStyle } from "styled-components";

import NavigoExtraLightWoff from "public/fonts/Navigo/Navigo-ExtraLight.woff";
import NavigoExtraLightWoff2 from "public/fonts/Navigo/Navigo-ExtraLight.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    src: local('Navigo Extra Light'),
      url(${NavigoExtraLightWoff2}) format('woff2'),
      url(${NavigoExtraLightWoff}) format('woff');
    font-family: 'Navigo Extra Light';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    unicode-range: U+000-5FF;
  }

  *,
  *:before,
  *:after  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: rgb(240, 240, 227);
  }

  @-moz-document url-prefix() {
    body {
      font-weight: lighter !important;
    }
  }

  html {
    overflow: scroll;
  }

  body, html {
    font-family: ${({ theme }) =>
      theme.fonts.siteFont}, Helvetica Neue, sans-serif;
    color: ${({ theme }) => theme.colours.grey};
  }

  .active-path {
    opacity: 1 !important;
  }
`;

export default GlobalStyle;
