import { createGlobalStyle } from "styled-components";

import NavigoExtraLightWoff from "public/fonts/Navigo/Navigo-ExtraLight.woff";
import NavigoExtraLightWoff2 from "public/fonts/Navigo/Navigo-ExtraLight.woff2";
import JosefinSansLight from "public/fonts/Josefin-Sans/JosefinSans-Light.ttf";

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

  @font-face {
    src: local('Josefin Sans'), url(${JosefinSansLight}) format('truetype'),;
    font-family: 'Josefin Sans';
    font-weight: 300;
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
    background-color: #f2f2f2;
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
      theme.fonts.primary}, Helvetica Neue, sans-serif;
    font-weight: 300;
    color: ${({ theme }) => theme.colours.grey};
  }

  .active-path {
    opacity: 1 !important;
  }
`;

export default GlobalStyle;
