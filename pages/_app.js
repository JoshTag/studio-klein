import React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from "styles/theme"

import NavigoWoff from "public/fonts/Navigo/Navigo-Regular.woff"
import NavigoWoff2 from "public/fonts/Navigo/Navigo-Regular.woff2"
import NavigoTtf from "public/fonts/Navigo/Navigo-Regular.ttf"
import NavigoEot from "public/fonts/Navigo/Navigo-Regular.eot"
import NavigoLightWoff from "public/fonts/Navigo/Navigo-Light.woff"
import NavigoLightWoff2 from "public/fonts/Navigo/Navigo-Light.woff2"
import NavigoLightTtf from "public/fonts/Navigo/Navigo-Light.ttf"
import NavigoLightEot from "public/fonts/Navigo/Navigo-Light.eot"
import NavigoThinWoff from "public/fonts/Navigo/Navigo-Thin.woff"
import NavigoThinWoff2 from "public/fonts/Navigo/Navigo-Thin.woff2"
import NavigoThinTtf from "public/fonts/Navigo/Navigo-Thin.ttf"
import NavigoThinEot from "public/fonts/Navigo/Navigo-Thin.eot"
import NavigoBoldWoff from "public/fonts/Navigo/Navigo-Bold.woff"
import NavigoBoldWoff2 from "public/fonts/Navigo/Navigo-Bold.woff2"
import NavigoBoldTtf from "public/fonts/Navigo/Navigo-Bold.ttf"
import NavigoBoldEot from "public/fonts/Navigo/Navigo-Bold.eot"
import NavigoExtraLightWoff from "public/fonts/Navigo/Navigo-ExtraLight.woff"
import NavigoExtraLightWoff2 from "public/fonts/Navigo/Navigo-ExtraLight.woff2"
import NavigoExtraLightTtf from "public/fonts/Navigo/Navigo-ExtraLight.ttf"
import NavigoExtraLightEot from "public/fonts/Navigo/Navigo-ExtraLight.eot"

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Navigo';
      src: local('Navigo'),
      url(${NavigoWoff2}) format('woff2'),
      url(${NavigoWoff}) format('woff'),
      url(${NavigoTtf}) format('ttf'),
      url(${NavigoEot}) format('eot');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'Navigo Light';
      src: local('Navigo Light'),
      url(${NavigoLightWoff2}) format('woff2'),
      url(${NavigoLightWoff}) format('woff'),
      url(${NavigoLightTtf}) format('woff'),
      url(${NavigoLightEot}) format('woff');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Navigo Extra Light';
      src: local('Navigo Extra Light'),
      url(${NavigoExtraLightWoff2}) format('woff2'),
      url(${NavigoExtraLightWoff}) format('woff'),
      url(${NavigoExtraLightTtf}) format('ttf'),
      url(${NavigoExtraLightEot}) format('eot');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Navigo Thin';
      src: local('Navigo Thin'), local('Navigo Thin'),
      url(${NavigoThinWoff2}) format('woff2'),
      url(${NavigoThinWoff}) format('woff'),
      url(${NavigoThinTtf}) format('ttf'),
      url(${NavigoThinEot}) format('eot');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Navigo Bold';
      src: local('Navigo Bold'), local('Navigo Bold'),
      url(${NavigoBoldWoff2}) format('woff2'),
      url(${NavigoBoldWoff}) format('woff'),
      url(${NavigoBoldTtf}) format('ttf'),
      url(${NavigoBoldEot}) format('eot');
      font-weight: 700;
      font-style: normal;
  }

  *,
  *:before,
  *:after  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: ${({theme}) => theme.fonts.primary}, Helvetica Neue, sans-serif;
    color: ${({theme}) => theme.colours.secondary};
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}