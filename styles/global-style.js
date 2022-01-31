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
    background-color: #F2F2F2;
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
    color: ${({ theme }) => theme.colours.mooGrey};
    height: 100%;
    width: 100%;
  }

  #__next {
    height: 100%;
    width: 100%;
  }

  .active-path {
    opacity: 1 !important;
  }
  .testimonials-ctn-1 {
    width: 37%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    border-right: solid 2px #231f20;
    padding:1rem;
  }
  @media screen and (max-width:768px){
  .testimonials-ctn-1{
    border-right:none;
    width:100%;
  }}
  .testimonials-ctn-2 {
    width:90%;
    padding: 2rem 3rem;
  }
  @media screen and (max-width:768px){
  .testimonials-ctn-2{
    width:100%;
    padding:0rem;
  }}
  .testimonials-lrg-txt{
    font-size: 25pt;
    text-align: left;
    line-height: 48px;
    margin-bottom: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .testimonials-small-txt{
    text-align:left;
    line-height: 23px;
    margin-bottom:0rem;
  }
  @media screen and (max-width:768px){
    .testimonials-small-txt{
      margin-bottom:1rem;
    }
  }
  .testimonial-name{
    font-size: 26pt;
    margin-bottom: 14px;
    margin-top: 15px;
    text-align:center;
  }
  @media sreen and (max-width:425px){
    .testimonial-name{
      letter-spacing: 37px;
    }
  }
  .testimonial-title{
    font-size: 14pt;
    text-align:center;
  }
  .border-bottom-1{
    border-bottom:1px solid #201f23;
  }
  .header{
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0rem 1rem;
  }
  .header-desktop {
    @media screen and (max-width: 1023px) {
      display: none;
    }
  }
  .header-inner-ctn {
    display: flex;
    flex-direction: row;
  }
  .header-inner-ctn > .header-link:first-of-type {
    margin-right: 5px
  }
  .header-logo{
    width: 160px;
  }
  .about-ctn{
    display:flex;
    flex-direction: column;
    border-radius: 5px;
    padding:1rem;
    margin:1rem;
    justify-content:center;
    align-items: center;
    min-height: 200px;
  }
  .about-txt{
    text-align:center;
  }
  .about-txt-email{
    text-align:center;
    margin-top:2rem;
  }

  main {
    /* height: 100%;  */
    height:98vh;
    display:flex;
    flex-direction: column;
    width: 100%;
    background:#F2F2F2;
  }
  .header-links {
    font-size: 14pt;
    font-family:'Navigo Extra Light';
    font-weight: 600;
    letter-spacing: 0.21px;
    text-decoration: none;
    color: inherit;
    width: 170px;
    position: relative;
    z-index: 10;
    transition: 0.3s;

    &:hover {
      color: #fff;
    }

    &:before {
        position: absolute;
        content: "";
        top: 0;
        width: 0;
        height: 100%;
        background-color: #231F20;
        border-radius: 3px;
        z-index: -1;
        transition: 0.3s;
      }
  }
  @media screen and (max-width:425px){
    .header-links{
      font-size:14pt;
    }
  }
  .header-ctn{
    position: relative;
    height: 100%;
    padding:1rem;
  }
  /* @media screen and (max-width:425px){
    .header-ctn{
      padding:1rem;
    }
  } */
  .header-ctn-inner{
    border-radius:5px;
    border: 2px solid #231F20;
    padding: 0.75rem 1rem;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  @media screen and (max-width:425px){
    .header-ctn-inner{
      padding:1rem;
    }
  }
  .header-ctn-top{
    display:flex;
    justify-content:space-between;

    & > a:nth-of-type(1) {
      padding: 0.2rem 0 0.5rem .5rem ;

      &:before {
        left: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
    & > a:nth-of-type(2) {
      text-align: right;
      padding: 0.2rem .5rem 0.5rem 0;

      &:before {
        right: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
  }
  .header-ctn-btm{
    display:flex;
    justify-content:space-between;

    & > a:nth-of-type(1) {
      padding: 0.2rem 0 0.5rem .5rem;

      &:before {
        left: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
    & > a:nth-of-type(2) {
      text-align: right;
      padding: 0.2rem .5rem 0.5rem 0;

      &:before {
        right: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
  }
  .lottie {
    position: absolute;
    width: 48%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top:1rem;
  }
  @media screen and (max-width:1024px){
    .lottie {
      width:72%;
    }}
  @media screen and (max-width:768px){
    .lottie {
      width:100%;
    }}
  @media screen and (max-width:425px){
    .lottie {
      width:122%;
    }}
  @media screen and (max-height:600px) and (max-width:1024px){
    .lottie {
      width:55%;
    }}
  @media screen and (max-height:600px) and (max-width:768px){
    .lottie {
      width:55%;
    }}
`;

export default GlobalStyle;
