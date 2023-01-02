import { createGlobalStyle } from "styled-components";

import NavigoExtraLightWoff from "public/fonts/Navigo/Navigo-ExtraLight.woff";
import NavigoExtraLightWoff2 from "public/fonts/Navigo/Navigo-ExtraLight.woff2";
import JosefinSansLight from "public/fonts/Josefin-Sans/JosefinSans-Light.ttf";
import JodaguzWoff from "public/fonts/Jodaguz.woff";
import JodaguzTtf from "public/fonts/Jodaguz.ttf";

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
  @font-face {
    src: local('Jodaguz'), url(${JodaguzTtf}) format('truetype'),
       url(${JodaguzWoff}) format('woff');
    font-family: 'Jodaguz';
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

  /* buttons */
  .button-full-ctn{
    display:flex;
    width:100%;
    border-bottom:2px solid #000000;
  }
  .button-full{
    background-color:#327666;
    width:100%;
    padding:1.5rem 1rem;
    margin:1rem;
    color: #F4F2EB!important;
    text-align: center;
    text-decoration: none;
    font-weight:600;
    letter-spacing:0.5px;
    transition:0.3s;
  }

  .button-full:hover{
    background-color:#C1C5E1;
    color:#000000!important;
    transition:0.3s;
  }

  /* MARGINS AND PADDINGS */

  .margin-top-3{
    margin-top:3rem;
  }
  .padding-top-3{
    padding-top:3rem;
  }
  .margin-bottom-2{
    margin-bottom:2rem;
  }
  .margin-bottom-1{
    margin-bottom:1rem;
  }
  .margin-bottom-3{
    margin-bottom:3rem;
  }
  .padding-bottom-3{
    padding-bottom:3rem;
  }

  .margin-right-2{
    margin-right:2rem;
  }

  .title-no-ctn{
    padding:1rem;
  }
  @media screen and (max-width:768px){
    .title-no-ctn{
      border-top:2px solid black;
    }
  }

  /* .text-align-left{
    text-align:center!important;
  } */

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
    /* width: 160px; */
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
    /* height:98vh; */
    display:flex;
    flex-direction: column;
    width: 100%;
    background:#F2F2F2;
    border-right: 10px #C1C5E1 solid;
    border-left: 10px #C7D670 solid;
  }
  .main__full-ctn{
    display: flex;
    width: 100%;
    border-bottom: 2px solid #231F20;
    height:80vh;
  }
@media screen and (max-width:768px){
  .main__full-ctn{
    flex-direction:column-reverse;
    height:unset!important;
  }
}


  .main__info-ctn{
    display:flex;
    flex-direction: column;
    width: 60%;
    min-height:280px;
  }
  @media screen and (max-width:768px){
    .main__info-ctn{
      width:100%;
    }
  }

  .main__info-ctn-words{
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: -webkit-fill-available;
    position:relative;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid #231F20;
    background: rgb(244,242,235);
    background: radial-gradient(circle, rgba(244,242,235,1) 19%, rgba(244,242,235,1) 74%, rgba(255,255,255,1) 100%);
  }

  @media screen and (max-width:768px){
    .main__info-ctn-words{
      height: unset;
    }
  }

  .main__booknow-img {
  width:30%;
  z-index:10;
  position:absolute;
  right:10px;
  bottom:-8%;
  border-radius: 52%;
  transition:0.25s;
}

.main__booknow-img:hover {
  background: #c7d67054;
  border-radius: 52%;
  padding: 10px;
  transition:0.25s;
}

@media screen and (max-width:1300px){
  .main__booknow-img {
    bottom:-3%;
  }
}

.main__follow-along-ctn{
  position:relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.main__follow-along-img {
  width:30%;
  z-index:10;
  position:absolute;
  left: 10px;
  bottom: -30px;
  border-radius: 52%;
  transition:0.25s;
}

.main__follow-along-img:hover {
  background: #c7d67054;
  border-radius: 52%;
  padding: 10px;
  transition:0.25s;
}

@media screen and (max-width:500px){
  .main__follow-along-img {
    bottom: 37%;
    width: 60%;
  }
}

  .background-radial-gradient-1{
    background: rgb(244,242,235);
    background: radial-gradient(circle, rgba(244,242,235,1) 19%, rgba(244,242,235,1) 74%, rgba(255,255,255,1) 100%);
  }

  .background-radial-gradient-2{
    background: rgb(244,242,235);
    background: radial-gradient(circle, rgba(244,242,235,1) 7%, rgba(244,242,235,1) 31%, rgba(255,255,255,1) 78%);
  }

  .background-radial-gradient-3-dark{
    background: radial-gradient(circle, rgba(64,63,61,1) 7%, rgba(64,63,61,1) 39%);
  }

  .background-radial-gradient-4-light{
    background: radial-gradient(circle, rgba(244,242,235,1) 30%, rgba(255,255,255,1) 100%);
  }

  .background-super-light{
    background:#F8F8F6;
  }

  .background-beige{
    background: rgb(244,242,235);
  }

  .background-beige-light{
    background: rgb(244 242 235 / 52%);
  }

  .main__h1{
    margin-bottom:2rem;
    font-size: 44pt;
    line-height:74px;
  }
  @media screen and (max-width:425px){
    .main__h1{
      line-height:65px;
    }
  }
  .main__h2{
    margin-bottom:2rem;
  }
  .main__h3{
    margin-bottom:1rem;
  }
  .main__h3-ctn{
    margin-bottom:0rem;
    font-size:11pt;
    width:70%;
  }
  .main__info-ctn-inner{
    display:flex;
    /* height: -webkit-fill-available; */
    min-height: 30px;
    height: 30%;
  }
  .main__info-ctn-words-inner{
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width:1440px){
    .main__info-ctn-words-inner{
      height:70%;
    }
  }

  .main__info-inner{
    display:flex;
    flex-direction:column;
    padding:1rem;
  }

  .main__info-small{
    display:flex;
    justify-content:center;
    align-items:center;
    border-right: 2px solid #231F20;
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-size:12pt;
    /* max-height: 160px; */
  }

  @media screen and (max-width:425px){
    .main__info-small{
      font-size:11pt;
    }
  }

  .livinggreen-logo {
    height:100px;
  }

  .no-border-right{
    border-right: 0px solid #231F20!important;
  }


  .no-border-right-mobile{
    border-right: 2px solid #231F20!important;
  }
  @media screen and (max-width:768px){
    .no-border-right-mobile{
      border-right: 0px solid #231F20!important;
    }
  }

  @media screen and (max-width:768px){
    .border-bottom-mobile{
      border-bottom: 2px solid #231F20!important;
    }
  }

  @media screen and (max-width:768px){
    .border-top-mobile{
      border-top: 2px solid #231F20!important;
    }
  }

  @media screen and (max-width:1024px){
    .no-border-top-mobile{
      border-top: none!important;
    }
  }

  .border-bottom{
    border-bottom:2px solid black;
  }

  .border-right{
    border-right: 2px solid #231F20!important;
  }

  .border-top{
    border-top: 2px solid #231F20;
  }

  .no-border-top-desktop{
    border-top: 0px solid #231F20!important;
  }
  @media screen and (max-width:768px){
    .no-border-top-desktop{
      border-top: 2px solid #231F20!important;
    }
  }

  .no-border-top-mobile{
    border-top: 2px solid #231F20!important;
  }
  @media screen and (max-width:768px){
    .no-border-top-mobile{
      border-top: 0px solid #231F20!important;
    }
  }

  .main__lottie-ctn{
    display:flex;
    width:40%;
    justify-content:center;
    align-items:center ;
    padding:2rem;
    border-right: 2px solid #231F20;
  }

  @media screen and (max-width:768px){
    .main__lottie-ctn{
      width:100%;
    }
  }

  .lottie-shoe{
    /* height:300px;
    width:200px; */
  }


  .header-links-home {
    font-size: 12pt;
    font-family:'Navigo Extra Light';
    letter-spacing: 0.8px;
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 10;
    transition: 0.3s;
    margin-right: 20px;
    display:flex;

    &:hover {
      text-decoration:underline;
      transition:0.3s;
    }

  }
  @media screen and (max-width:425px){
    .header-links-home{
      font-size:14pt;
    }
  }
.header-logo{
  height:100%;
}

@media screen and (max-width:1024px){
  .header-links-home{
    justify-content:center;
    margin-bottom: 1rem;
  }
}

  .header-links {
    font-size: 12pt;
    font-family:'Navigo Extra Light';
    letter-spacing: 0.8px;
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 10;
    transition: 0.3s;
    margin-right: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;

    &:hover {
      text-decoration:underline;
      transition:0.3s;
    }
  }

  
  @media screen and (max-width:1024px){
    .header-links{
      font-size:10pt;
      margin:0;
    }
  }

  .header-ctn{
    border-bottom: 2px solid #231F20;
  }


  .header-ctn-inner{
    border-radius:5px;
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
  @media screen and (max-width:400px){
    .header-ctn-inner{
      padding:0.5rem;
    }
  }

  .header-ctn-top{
    display:flex;
    justify-content:end;

    & > a:nth-of-type(1) {
      /* padding: 0.2rem 0 0.5rem 0rem; */
      width: -webkit-fill-available;

      &:before {
        left: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
    & > a:nth-of-type(2) {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;

      &:before {
        right: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
    & > a:nth-of-type(3) {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;

      &:before {
        right: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
    & > a:nth-of-type(4) {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;

      &:before {
        right: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
    & > a:nth-of-type(5) {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;

      &:before {
        right: 0;
      }
      &:hover:before {
        width: 100%;
      }
    }
  }

  @media screen and (max-width:1024px){
    .header-ctn-top{
      flex-direction:column;
    }
  }


  .header-ctn-top-inner{
    display:flex;
    justify-content:end;
  }

  @media screen and (max-width:1024px){
    .header-ctn-top-inner{
      flex-direction:row;
      justify-content: space-between;
    }
  }

  .main__info-strip{
    width:100%;
    padding:3rem 1rem;
    display:flex;
    text-align:center;
    justify-content:center;
    border-bottom: 2px solid #231F20;
    justify-content: space-between;
  }

  .main__info-strip2{
    width:100%;
    padding:1.5rem 1rem;
    display:flex;
    text-align:center;
    justify-content:center;
    border-top: 2px solid #231F20;
    justify-content: space-between;
  }

  @media screen and (max-width:1024px){
    .main__info-strip2{
      justify-content: center;
    }
  }

  .main__info-strip-vector{
    width:50px;
  }
  .main__info-strip-socials{
    width:50px;
    padding:0.5rem;
  }
  .main__info-strip-arrow{
    width:30px;
    height: 60px;
    transition: transform 0.2s ease-in-out 100ms
  }

  .main__info-strip-arrow:hover{
    transform:translateX(15px);

  }

  .main__info-strip-column-inner{
    display:flex;
    flex-direction:column;
    padding: 2rem 0rem;
    align-items: center;
  }

  .main__contactnow-img {
    width: 24%;
    z-index: 10;
    position: absolute;
    right: 3%;
    bottom: -27%;
}
  .main__info-strip-contact{
    width:100%;
    padding:4rem 1rem;
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:relative;
  }

  .main__project-ctn-outer{
    display:flex;
    width:100%;
    padding:2rem 0rem;
    justify-content:space-between;
    overflow: hidden;
  }

  @media screen and (max-width:768px){
    .main__project-ctn-outer{
      flex-direction:column;
      align-items:center;
      padding:1rem 0rem;
    }
  }
  .main__background-video{
    width:370px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:200px;
    width:300px;
    background-color:blue;
    position:absolute;
  }

  .main__project-video-ctn{
    width:370px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width:768px){
    .main__project-video-ctn{
      width: 70%;
    }
  }

  .main__project-video-ctn-inner{
    display:flex;
    flex-direction:row;
    height:57px;
  }

  @media screen and (max-width:425px){
    .main__project-video-ctn-inner{
    height: 100px;
    justify-content: center;
    align-items: center;
    }
  }

  .main__project-video{
    width: 100%;
    animation: animation2 8s ease-in-out 0s infinite alternate-reverse none;
  }

  .main__testimonials-ctn {
    display:flex;
    justify-content: center;
    text-align:left;
  }

  @media screen and (max-width:768px){
    .main__testimonials-ctn{
      flex-direction:column;
    }
  }

  .main__testimonials-ctn-outer {
    display:flex;
    padding: 1rem 1rem 7rem 1rem;
    flex-direction:column;
  }

  .main__testimonials-ctn-inner {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width: 30%;
  }

  @media screen and (max-width:768px){
    .main__testimonials-ctn-inner{
      width: 100%;
      margin-bottom: 3rem;
    }
  }

  .main__testimonial-logo{
    height: 100px;
    max-width:180px;
    padding:1rem;
  }
  .main__testimonial-logo2{
    height: 80px;
    padding:1rem;
  }

  .main__testimonials-text{
    padding:0rem 1rem;
    text-align:center;
  }

  .main__testimonials-text-bold{
    padding:1rem;
    text-align:center;
    font-weight:800;
  }

  @media screen and (width:768px){
    .main__testimonials-ctn{
      flex-direction:column;
    }
  }
  .main__info-strip3{
    width:100%;
    display:flex;
    text-align:center;
    justify-content:center;
    border-top: 2px solid #231F20;
    justify-content: space-between;
  }

  @media screen and (max-width:1024px){
    .main__info-strip3{
      justify-content: center;
      flex-direction:column;
    }
  }
  .main__info-strip4{
    width:100%;
    display:flex;
    text-align:center;
    justify-content:center;
    border-top: 2px solid #231F20;
    justify-content: space-between;
  }

  @media screen and (max-width:1024px){
    .main__info-strip4{
      justify-content: center;
      flex-direction:column-reverse;
    }
  }

  .main__howitworks-icon-ctn{
    display:flex;
    width:20%;
    padding:2rem 1rem;
    justify-content: center;
  }

  @media screen and (max-width:1024px){
    .main__howitworks-icon-ctn{
      width:100%;
    }
  }
  .main__howitworks-icon-ctn2{
    display:flex;
    width:20%;
    padding:2rem 1rem;
    justify-content: center;
    border-left:2px solid black;
  }

  @media screen and (max-width:1024px){
    .main__howitworks-icon-ctn2{
      width:100%;
      border-left:none;
    }
  }
  .main__howitworks-text-ctn{
    display:flex;
    flex-direction:column;
    width:80%;
    padding:2rem 1rem;
    justify-content: space-around;
    border-left:2px solid black;
  }

  @media screen and (max-width:1024px){
    .main__howitworks-text-ctn{
      border-left:0px!important;
      width:100%;
      border-top: 2px solid #000000;
    }
  }
  .main__howitworks-text-ctn2{
    display:flex;
    flex-direction:column;
    width:80%;
    padding:2rem 1rem;
    justify-content: space-around;
    align-items: end;
  }

  @media screen and (max-width:1024px){
    .main__howitworks-text-ctn2{
      border-left:0px!important;
      width:100%;
      border-top: 2px solid #000000;
    }
  }

  .main__howitworks-heading{
    font-weight:600;
    display: flex;
    margin-bottom:0.5rem;
  }

  .main__howitworks-text{
    display: flex;
    text-align:left;
    width:60%;
  }
@media screen and (max-width:1024px){
  .main__howitworks-text{
    text-align:center;
    width:100%;
  }
}
@media screen and (max-width:1024px){
  .main__howitworks-heading{
    text-align:center;
    width:100%;
    justify-content: center;
  }
}
.main__howitworks-heading2{
    font-weight:600;
    display: flex;
    margin-bottom:0.5rem;
    text-align:right;
  }

  .main__howitworks-text2{
    display: flex;
    text-align:right;
    width:60%;
  }

@media screen and (max-width:1024px){
  .main__howitworks-text2{
    text-align:center;
    width:100%;
  }
}
@media screen and (max-width:1024px){
  .main__howitworks-heading2{
    text-align:center;
    width:100%;
    justify-content: center;
  }
}
  .main__info-strip-aboutme{
    width:100%;
    padding:5.5rem 1rem;
    display:flex;
    text-align:center;
    justify-content:end;
    border-bottom: 2px solid #231F20;
    position:relative;
  }

  @media screen and (max-width:768px){
    .main__info-strip-aboutme{
      padding-bottom:20rem;
    }
  }

  .main__info-strip-aboutme-info{
    display:flex;
    flex-direction:column;
    width:50%;
    text-align: left;
    padding: 1rem;
  }

  @media screen and (max-width:768px){
    .main__info-strip-aboutme-info{
      width:100%;
    }
  }

  .main__info-strip-aboutme-img-ctn{
    display:flex;
    width:50%;
  }

  @media screen and (max-width:768px){
    .main__info-strip-aboutme-img-ctn{
      width:0%;
    }
  }

  .main__service-link{
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .main__aboutme-img {
    width: 388px;
    z-index: 10;
    position: absolute;
    right: 3%;
    bottom: -67px;
}

@media screen and (max-width:768px){
  .main__aboutme-img{
    width: 300px;
    bottom: -51px;
  }
}

@media screen and (max-width:350px){
  .main__aboutme-img{
    width: 270px;
    bottom: -47px;
  }
}

  .main__tiktok-ctn{
    display:flex;
    text-align:center;
    justify-content:center;
    border-bottom: 2px solid #231F20;
    overflow-y: hidden;
    max-height: 280px;
    align-items: center;
    border-top: #231F20 solid 1px;
    overflow: hidden;
    position:relative;
  }

  .main__tiktok-video{
    display:flex;
    width: 200%;
    height: fit-content;
    animation: animation1 15s ease-in-out 0s infinite alternate-reverse none;
  }

  @media screen and (max-width:425px){
    .main__tiktok-video{
      width:100%;
    }
  }

  
  .main__outer-packages-ctn{
    width:100%;
    display:flex;
  }

@media screen and (max-width:768px){
  .main__outer-packages-ctn{
    flex-direction:column;
  }
}

  .main__inner-package-ctn{
    width:34%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width:768px){
  .main__inner-package-ctn{
    width:100%;
  }
}

  .main__package-title{
    padding: 0.5rem;
    font-size:16pt;
    text-align:left;
    width: 100%;
  }

  .main__package-book{
    font-size:20pt;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .main__package-title-ctn{
    width:100%;
    display:flex;
    justify-content:space-between;
    width: 100%;
    text-align:center;
    flex-direction: column;
    padding: 1rem;
    transition:0.2s;
  }
  .main__package-title-ctn-inner{
    border-top:2px solid black;
    border-bottom:2px solid black;
    transition:0.2s;
  }

  @media screen and (max-width:768px){
    .main__package-title-ctn-inner{
      border-bottom:0px solid black;
    }
  }

    .main__package-title-ctn-inner1{
    border-top:2px solid black;
    border-bottom:2px solid black;
    transition:0.2s;
  }

  @media screen and (max-width:768px){
    .main__package-title-ctn-inner1zw{
      border-bottom:0px solid black;
    }
  }

  .main__package-title-ctn-inner:hover{
    background:#394588;
    color: #F4F2EB;
    transition:0.2s;
  }

  .main__package-title-ctn-inner:hover > .main__package-title-ctn {
    transform:translateY(3px);
    transition:0.2s;
  }

  .main__package-list{
    list-style:none;
    padding: 2rem 1rem 0rem 3rem;
    line-height: 33px;
    width:100%;
    height: 100%;
  }

  @media screen and (max-width:768px){
    .main__package-list{
      padding: 1rem;
    }
  }

  .main__package-list-item{
    font-size:14pt;
    font-weight:600;
  }

  .main__package-list-item-description{
    margin-left:1rem;
    padding-bottom:2.25rem;
    line-height:23px;
  }

.main__package-price {
  width: 100%;
  text-align:center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:800;
}
  .header-ctn-btm{
    display:flex;
    justify-content:space-between;

    & > a:nth-of-type(1) {
      padding: 0.2rem 0.5rem 0rem;

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

  .xlarge__judaguz{
  font-family:'Jodaguz';
  font-size: 50pt;
  margin-bottom: 1rem;
}

.xlarge__judaguz-short{
  font-family:'Jodaguz';
  font-size: 50pt;
}
.lgh-type{
   color:#FAF9E6!important;
  }

@media screen and (max-width:768px){
  .xlarge__judaguz{
    font-size: 40pt;
  }
}
@media screen and (max-width:425px){
  .xlarge__judaguz{
    font-size: 30pt;
  }
}

.large__judaguz{
  font-family:'Jodaguz';
  font-size: 26pt;
  margin-bottom: 1rem;
}

.medium__jodaguz{
  font-family:'Jodaguz';
  font-size: 20pt;
  margin-bottom: 1rem;
}

.jodaguz__small{
  font-family:'Jodaguz';
  font-size: 33pt;
  font-weight: 100;
  padding-right: 5px;
  padding-top: 3px;
}

.service__ctn {
  border-bottom:1px solid black;
  margin: 0rem!important;
  padding:1rem!important;
}
.main__questions-outer{
  display:flex;
  border-bottom: 2px solid #231F20;
  padding:0rem 1rem;
}
.form-container{
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
}

.form-container-inner{
  display:flex;
  flex-direction:column;
  width: 100%;
}

.form-container-label{
  height:30px;
}

.form-container-input{
  height:40px;
  background:#F2F2F2;
  border-radius:3px;
  padding:1rem;
}

.main__footer{
    width:100%;

    display:flex;
    justify-content:center;
    border-bottom: 2px solid #231F20;
  }

  @media screen and (max-width:425px){
    .main__footer{
      flex-direction:column;
      align-items: center;
    }
  }
  .main__footer-inner{
    display:flex;
    width:100%;
  }

  .main__footer-logo{
    width:100%;
    padding:1rem;
    border-right: 2px solid black;
  }

  @media screen and (max-width:425px){
    .main__footer-logo{
      border-right: 0px solid black;
    }
  }

  .main__footer-list{
    display:flex;
    list-style: none;
    flex-direction:column;
    padding: 1rem;
  }

  @media screen and (max-width:425px){
    .main__footer-list{
      width:100%;
      padding-right:1rem;
      border-top: 2px solid black;
    }
  }


  .main__footer-list-items{
    text-align:left;
    padding:0.25rem;
    text-decoration:none!important;
    color:black;
  }

  .main__footer-list-items:hover{
    text-decoration:underline!important;
  }

  .footer-links-home {
    font-size: 12pt;
    font-family:'Navigo Extra Light';
    letter-spacing: 0.8px;
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 10;
    transition: 0.3s;
    display:flex;
  }

  .main__points-txt{
    font-weight:600;
  }
  .main__info-strip-text{
    font-weight:600;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width:1024px){
    .main__info-strip-text{
      width: 60%;
      text-align:center;
    }
  }

  @media screen and (max-width:425px){
    .main__info-strip-text{
      width: 100%;
    }
  }

  .main__info-strip-title{
    font-weight:600;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }

  @keyframes animation1 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(1000px);
  }
}

/* @keyframes animation2 {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(50px);
  }
  0% {
    transform: translateX(-50px);
  }
} */

@keyframes animation2 {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(30px);
  }
  0% {
    transform: translateX(-3 0px);
  }
}

  .bounce2 {
  animation: bounce2 2s ease-in-out infinite;
  animation-direction: alternate-reverse;
}
@keyframes bounce2 {
	0% {transform: translateY(0px);}
	100% {transform: translateY(-5px);}
  0% {transform: translateY(0px);}
}

.bounce3{
  animation: bounce2 2s ease-in-out infinite;
  animation-direction: alternate-reverse;
  animation-delay: 0.5s;
}
@keyframes bounce3 {
	0% {transform: translateY(0px);}
	100% {transform: translateY(-5px);}
  0% {transform: translateY(0px);}
}

.bounce4{
  animation: bounce2 2s ease-in-out infinite;
  animation-direction: alternate-reverse;
  animation-delay: 1s;
}
@keyframes bounce4 {
	0% {transform: translateY(0px);}
	100% {transform: translateY(-5px);}
  0% {transform: translateY(0px);}
}

.services__outer{
  display:flex;
  width:100%;
  padding: 0rem 1rem;
  border-bottom: 2px solid black;
}

.services__prices-ctn-outer{
  display:flex;
  padding:1rem;
  flex-direction:column;
  width:100%;
}
.services__prices-ctn-inner{
  display:flex;
  flex-direction:column;
  align-items: center;
  padding: 2rem 0rem;
  width:100%;
}

.services__list{
    list-style:none;
    padding: 1rem;
    line-height: 33px;
    width:60%;
    height: 100%;
    display:flex;
  }

  @media screen and (max-width:768px){
    .services__list{
      padding: 1rem;
      width:100%;
    }
  }

  .services__list-item{
    font-size:14pt;
    font-weight:600;
    width:100%;
    border-bottom: 2px solid black;
    line-height: 27px;
  }
  .services__list-price{
    font-size:14pt;
    font-weight:600;
    width:50%;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: flex-end;
  }

  .services__info-strip{
    width:100%;
    padding:3.5rem 1rem;
    display:flex;
    text-align:center;
    justify-content:center;
    border-bottom: 2px solid #231F20;
    justify-content: space-between;
    position:relative;
  }

  @media screen and (max-width:768px){
    .services__info-strip{
      flex-direction:column;
      align-items:center;
      padding: 1rem!important;
    }
  }

  .services__booknow-img {
  width: 20%;
  max-width: 260px;
  z-index: 10;
  position: absolute;
  right: 10px;
  bottom: 82%;
  border-radius: 52%;
  transition:0.25s;
}

.services__booknow-img:hover {
  background: #c7d67054;
  border-radius: 52%;
  padding: 10px;
  transition:0.25s;
}

@media screen and (max-width:1024px){
  .services__booknow-img {
    bottom:-3%;
  }
}

.about__follow-along-img {
  width:20%;
  z-index:10;
  position:absolute;
  left: 10px;
  bottom: 60%;
  border-radius: 52%;
  transition:0.25s;
}

.about__follow-along-img:hover {
  background: #c7d67054;
  border-radius: 52%;
  padding: 10px;
  transition:0.25s;
}

@media screen and (max-width:1024px){
  .about__follow-along-img {
    width: 25%;
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
