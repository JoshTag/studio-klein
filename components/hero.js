import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import LottieData from "components/lottie";
import social from "./../public/images/social.json";
import seo from "./../public/images/seo.json";
import branding from "./../public/images/branding.json";
import logo from "public/images/logo-wordmark.svg";

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: 50px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 600px;
    margin-top: 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktopWide} {
    height: 650px;
  }
`;

const HeroImages = styled.div`
  width: 100%;
  height: 575px;
  z-index: -1;
  position: relative;
  margin-top: 50px;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    height: 620px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 850px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: auto;
    width: 50%;
    margin-top: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 90%;
  margin: 0 auto;

  & > .lottie-social {
    position: absolute;
    width: 190px;
    top: 0px;
    left: -30px;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      width: 220px;
      left: -60px;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      width: 300px;
      left: -130px;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      width: 240px;
      left: 225px;
      top: 20px;
      z-index: 95;
    }

    @media ${({ theme }) => theme.breakpoints.desktopLarge} {
      width: 240px;
      left: 250px;
    }

    @media ${({ theme }) => theme.breakpoints.desktopWide} {
      width: 280px;
      left: 275px;
      top: 0px;
    }
  }

  & > .lottie-branding {
    position: absolute;
    width: 190px;
    top: 70px;
    left: 105px;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      width: 220px;
      left: 105px;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      width: 300px;
      left: 120px;
      top: 100px;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      width: 270px;
      left: 140px;
      top: 260px;
      z-index: 100;
    }

    @media ${({ theme }) => theme.breakpoints.desktopLarge} {
      left: 170px;
    }

    @media ${({ theme }) => theme.breakpoints.desktopWide} {
      width: 310px;
      left: 180px;
      top: 260px;
    }
  }

  & > .lottie-seo {
    position: absolute;
    width: 290px;
    top: 250px;
    z-index: 100;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      width: 330px;
      top: 285px;
      left: -10px;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      width: 450px;
      top: 390px;
      left: -60px;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      width: 330px;
      top: 75px;
      left: -35px;
      z-index: 90;
    }

    @media ${({ theme }) => theme.breakpoints.desktopLarge} {
      left: -20px;
    }

    @media ${({ theme }) => theme.breakpoints.desktopWide} {
      width: 390px;
      top: 75px;
      left: -75px;
    }
  }
`;

const Wrapper = styled.div`
  margin: 0 5%;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
  }
`;

const HeroDescription = styled.div`
  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 50%;
  }
`;

const HeroHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  line-height: 40px;
  margin-bottom: 1.5rem;
  font-weight: normal;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding-top: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding-top: 4rem;
  }

  .svg-header {
    width: 288px;
  }
`;

const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 27px;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

const HeroParagraphPartner = styled(HeroParagraph)`
  display: flex;
  align-items: end;
  margin-bottom: 3rem;

  & > img {
    width: 100px;
    margin-right: 8px;
  }
`

const ButtonStyle = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colours.tan};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colours.grey};
  border: 1px solid ${({ theme }) => theme.colours.grey};
  border-radius: 3px;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colours.grey};
    color: ${({ theme }) => theme.colours.primary};
  }
`;

const MobileCTA = styled(ButtonStyle)`
  width: 100%;
  bottom: 0;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

const CTA = styled(ButtonStyle)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 200px;
    display: block;
    margin-top: 2rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Wrapper>
        <HeroDescription>
          <HeroHeader>
            <svg
              className='svg-header'
              viewBox='0 0 479.84 171.76'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g fill='#231f20'>
                <path d='m54.1 32.92v23.94a2 2 0 0 1 -.69 1.51 16.3 16.3 0 0 1 -3.91 2.39 40.69 40.69 0 0 1 -5.13 2 51.44 51.44 0 0 1 -5.7 1.37 33.4 33.4 0 0 1 -5.67.47 37.64 37.64 0 0 1 -13.6-2.35 30.93 30.93 0 0 1 -10.47-6.58 28.51 28.51 0 0 1 -6.66-10 32.7 32.7 0 0 1 -2.27-12.18 36.72 36.72 0 0 1 2.57-14.14 31.15 31.15 0 0 1 7.06-10.54 30.1 30.1 0 0 1 10.37-6.59 34.77 34.77 0 0 1 12.34-2.22 39.07 39.07 0 0 1 10.19 1.26 33.49 33.49 0 0 1 8.29 3.36 2 2 0 0 1 .87 2.38l-2.63 7.3a2 2 0 0 1 -1.15 1.19 2 2 0 0 1 -1.66-.09 29.74 29.74 0 0 0 -3.88-1.65 36.7 36.7 0 0 0 -4.7-1.33 21.43 21.43 0 0 0 -4.26-.42 25.11 25.11 0 0 0 -8.85 1.47 19.11 19.11 0 0 0 -6.56 4.11 18.17 18.17 0 0 0 -4.25 6.51 24.27 24.27 0 0 0 -1.5 8.74 21.46 21.46 0 0 0 1.49 8.07 17.67 17.67 0 0 0 4.24 6.26 19.21 19.21 0 0 0 6.58 4.05 24.75 24.75 0 0 0 8.65 1.43 29.49 29.49 0 0 0 5.52-.53 15 15 0 0 0 3.39-1v-8.49h-9.78a2 2 0 0 1 -2-2v-7.7a2 2 0 0 1 2-2h19.76a2 2 0 0 1 2 2z' />
                <path d='m90.18 26.69-.33 7.7a2 2 0 0 1 -.68 1.42 2 2 0 0 1 -1.48.49 9.11 9.11 0 0 0 -5.69 1.15 11.18 11.18 0 0 0 -3.91 3.91 9.7 9.7 0 0 0 -1.4 5.08v15.5a2 2 0 0 1 -2 2h-7.58a2 2 0 0 1 -2-2v-33.94a2 2 0 0 1 2-2h6.89a2 2 0 0 1 2 1.85l.18 2.5c.22-.22.44-.43.67-.63a20.34 20.34 0 0 1 5.81-3.72 16.5 16.5 0 0 1 5.44-1.4 2 2 0 0 1 2.08 2.09z' />
                <path d='m132.19 34.47a19.12 19.12 0 0 0 -7.27-7.23 21.31 21.31 0 0 0 -10.66-2.64 21.94 21.94 0 0 0 -10.77 2.63 19.43 19.43 0 0 0 -7.49 7.21 19.76 19.76 0 0 0 -2.7 10.2 20.15 20.15 0 0 0 2.75 10.59 19.11 19.11 0 0 0 7.45 7 22.45 22.45 0 0 0 10.66 2.49 21.12 21.12 0 0 0 10.76-2.69 19.31 19.31 0 0 0 7.26-7.26 20.28 20.28 0 0 0 2.6-10.17 20.3 20.3 0 0 0 -2.59-10.13zm-18.19.45a8.12 8.12 0 0 1 4.57 1.27 9.53 9.53 0 0 1 3.22 3.53 10.27 10.27 0 0 1 1.2 5 10.38 10.38 0 0 1 -1.2 5 9.11 9.11 0 0 1 -3.2 3.48 8.33 8.33 0 0 1 -4.59 1.25 8.18 8.18 0 0 1 -4.51-1.25 9.46 9.46 0 0 1 -3.25-3.5 10.67 10.67 0 0 1 0-9.89 9.55 9.55 0 0 1 3.27-3.58 8 8 0 0 1 4.49-1.31z' />
                <path d='m192.68 28.79-15.58 36a2 2 0 0 1 -1.81 1.2 2.06 2.06 0 0 1 -1.84-1.15l-9-19.25-8.25 19.19a2 2 0 0 1 -1.84 1.22 2 2 0 0 1 -1.83-1.2l-15.66-36a2 2 0 0 1 1.83-2.8h7.55a2 2 0 0 1 1.83 1.2l7.2 16.42 4.19-9.75-2.4-5a2 2 0 0 1 1.8-2.87h6.64a2 2 0 0 1 1.83 1.2l7.4 16.8 6.79-16.74a2 2 0 0 1 1.85-1.26h7.46a2 2 0 0 1 1.84 2.8z' />
                <path d='m278 3.63-21.85 39.07v19.24a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2-2v-19.24l-21.68-39.07a2 2 0 0 1 1.75-3h9.78a2 2 0 0 1 1.77 1l14.63 27.29 14.44-27.2a2 2 0 0 1 1.77-1.06h9.68a2 2 0 0 1 1.74 3z' />
                <path d='m312.18 34.47a19.12 19.12 0 0 0 -7.27-7.23 21.31 21.31 0 0 0 -10.66-2.64 21.94 21.94 0 0 0 -10.77 2.63 19.43 19.43 0 0 0 -7.48 7.21 19.76 19.76 0 0 0 -2.7 10.2 20.15 20.15 0 0 0 2.75 10.59 19.11 19.11 0 0 0 7.45 7 22.45 22.45 0 0 0 10.66 2.49 21.12 21.12 0 0 0 10.76-2.69 19.31 19.31 0 0 0 7.26-7.26 20.28 20.28 0 0 0 2.6-10.17 20.3 20.3 0 0 0 -2.6-10.13zm-18.18.45a8.12 8.12 0 0 1 4.57 1.27 9.53 9.53 0 0 1 3.22 3.53 10.27 10.27 0 0 1 1.2 5 10.38 10.38 0 0 1 -1.2 5 9.11 9.11 0 0 1 -3.2 3.48 8.33 8.33 0 0 1 -4.59 1.25 8.18 8.18 0 0 1 -4.51-1.25 9.46 9.46 0 0 1 -3.25-3.5 10.67 10.67 0 0 1 0-9.89 9.55 9.55 0 0 1 3.27-3.58 8 8 0 0 1 4.49-1.31z' />
                <path d='m358.4 28v34a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2-1.84l-.05-1.16a16.48 16.48 0 0 1 -5.11 3.08 18.09 18.09 0 0 1 -6.58 1.21 12.81 12.81 0 0 1 -9.13-3.38 12.16 12.16 0 0 1 -3.78-8.72v-25.19a2 2 0 0 1 2-2h7.71a2 2 0 0 1 2 2v22.32a5.45 5.45 0 0 0 1.17 3.25 4 4 0 0 0 3.11 1.13 6.29 6.29 0 0 0 3.8-1.29 10.26 10.26 0 0 0 3-3.85 13.26 13.26 0 0 0 1.2-5.74v-15.82a2 2 0 0 1 2-2h7.62a2 2 0 0 1 2.04 2z' />
                <path d='m388.4 29.68a16.26 16.26 0 0 0 -4.67 3 12.88 12.88 0 0 0 -2.88 3.73v.3a15.54 15.54 0 0 1 3.34-2.71 12.62 12.62 0 0 1 6-1.76l.13-3.26a19 19 0 0 0 -1.92.7zm-9.78 6.76.33 1.4-.14-1.84c-.07.17-.13.3-.19.44z' />
                <path d='m378.81 36c-.07.14-.13.27-.19.41l.33 1.4z' />
                <path d='m393.81 25.19a2 2 0 0 0 -1.49-.59 16.44 16.44 0 0 0 -5.44 1.4 20.34 20.34 0 0 0 -5.82 3.73c-.23.2-.45.41-.67.63l-.18-2.5a2 2 0 0 0 -2-1.85h-6.89a2 2 0 0 0 -2 2v34a2 2 0 0 0 2 2h7.68a2 2 0 0 0 2-2v-15.57a9.7 9.7 0 0 1 1.4-5.08 11.18 11.18 0 0 1 3.91-3.91 9.1 9.1 0 0 1 5.65-1.15 2 2 0 0 0 1.48-.49 2 2 0 0 0 .68-1.42l.33-7.7a2 2 0 0 0 -.64-1.5zm-3.65 7.08a12.62 12.62 0 0 0 -6 1.76 15.54 15.54 0 0 0 -3.32 2.68v-.3a12.88 12.88 0 0 1 2.88-3.73 16.26 16.26 0 0 1 4.67-3 19 19 0 0 1 1.89-.67zm-11.16 5.57-.33-1.4c.06-.14.12-.27.19-.41z' />
                <path d='m47.38 161.32v7.62a2 2 0 0 1 -2 2h-39.69a2 2 0 0 1 -2-2v-59.28a2 2 0 0 1 2-2h38.54a2 2 0 0 1 2 2v7.62a2 2 0 0 1 -2 2h-28.59v14h25.36a2 2 0 0 1 2 2v7.72a2 2 0 0 1 -2 2h-25.36v14.29h29.74a2 2 0 0 1 2 2.03z' />
                <rect
                  height='10.73'
                  rx='2'
                  width='19.34'
                  x='54.77'
                  y='145.95'
                />
                <path d='m132.34 166.18a36.72 36.72 0 0 1 -4.26 2.35 31.32 31.32 0 0 1 -6.34 2.19 35 35 0 0 1 -21.11-1.72 29.82 29.82 0 0 1 -16.45-17.1 33.87 33.87 0 0 1 -2.18-12.15 36.44 36.44 0 0 1 2.26-13 30.22 30.22 0 0 1 16.54-17.32 31.78 31.78 0 0 1 12.55-2.43 32.91 32.91 0 0 1 10.31 1.54 38.71 38.71 0 0 1 7.87 3.51 2 2 0 0 1 .8 2.49l-3.19 7.54a2 2 0 0 1 -1.29 1.14 2 2 0 0 1 -1.7-.28 30 30 0 0 0 -5.61-3 18.61 18.61 0 0 0 -14.32.23 19.21 19.21 0 0 0 -6.17 4.38 21.28 21.28 0 0 0 -4.24 6.6 21.58 21.58 0 0 0 -1.53 8.18 23.9 23.9 0 0 0 1.39 8.21 19.62 19.62 0 0 0 4 6.55 17.74 17.74 0 0 0 6.16 4.31 20.68 20.68 0 0 0 8.17 1.6 19.87 19.87 0 0 0 7.3-1.25 23.15 23.15 0 0 0 5.36-2.86 2 2 0 0 1 1.68-.34 2 2 0 0 1 1.32 1.08l3.37 7.05a2 2 0 0 1 -.69 2.5z' />
                <path d='m178.35 141.47a19.1 19.1 0 0 0 -7.26-7.23 21.32 21.32 0 0 0 -10.67-2.64 21.87 21.87 0 0 0 -10.76 2.63 19.36 19.36 0 0 0 -7.48 7.21 19.76 19.76 0 0 0 -2.7 10.2 20.06 20.06 0 0 0 2.75 10.59 19 19 0 0 0 7.45 7 22.39 22.39 0 0 0 10.66 2.49 21.17 21.17 0 0 0 10.76-2.69 19.36 19.36 0 0 0 7.25-7.26 21.19 21.19 0 0 0 0-20.34zm-18.18.45a8.09 8.09 0 0 1 4.57 1.27 9.47 9.47 0 0 1 3.23 3.53 10.38 10.38 0 0 1 1.19 5 10.49 10.49 0 0 1 -1.19 5 9.13 9.13 0 0 1 -3.21 3.48 8.29 8.29 0 0 1 -4.59 1.25 8.15 8.15 0 0 1 -4.5-1.25 9.4 9.4 0 0 1 -3.26-3.5 10.75 10.75 0 0 1 0-9.89 9.72 9.72 0 0 1 3.27-3.58 8 8 0 0 1 4.49-1.31z' />
                <path d='m247.45 143.69v25.25a2 2 0 0 1 -2 2h-7.7a2 2 0 0 1 -2-2v-22.38a6.18 6.18 0 0 0 -.93-3.27c-.15-.23-.62-.91-2.54-1a6.53 6.53 0 0 0 -4 1.36 9.49 9.49 0 0 0 -3 3.82 14.09 14.09 0 0 0 -1.18 5.42v16a2 2 0 0 1 -2 2h-7.7a2 2 0 0 1 -2-2v-22.33a5.72 5.72 0 0 0 -1-3.22c-.17-.24-.69-1-2.66-1a6.38 6.38 0 0 0 -4 1.35 10.13 10.13 0 0 0 -3 3.88 12.9 12.9 0 0 0 -1.13 5.4v16a2 2 0 0 1 -2 2h-7.71a2 2 0 0 1 -2-2v-33.97a2 2 0 0 1 2-2h7a2 2 0 0 1 2 1.83l.11 1.26a16.29 16.29 0 0 1 11.59-4.48 14.67 14.67 0 0 1 5.78 1.1 11.82 11.82 0 0 1 4.39 3.17 9.19 9.19 0 0 1 .76 1 16.62 16.62 0 0 1 11.95-5.28 12.73 12.73 0 0 1 9.31 3.45 12.34 12.34 0 0 1 3.66 8.64z' />
                <path d='m316.91 143.69v25.25a2 2 0 0 1 -2 2h-7.71a2 2 0 0 1 -2-2v-22.38a6.18 6.18 0 0 0 -.93-3.27c-.15-.23-.61-.91-2.54-1a6.56 6.56 0 0 0 -4 1.36 9.66 9.66 0 0 0 -3 3.82 13.9 13.9 0 0 0 -1.17 5.42v16a2 2 0 0 1 -2 2h-7.71a2 2 0 0 1 -2-2v-22.33a5.64 5.64 0 0 0 -1-3.22c-.17-.24-.69-1-2.65-1a6.4 6.4 0 0 0 -4 1.35 10 10 0 0 0 -3 3.88 12.9 12.9 0 0 0 -1.13 5.4v16a2 2 0 0 1 -2 2h-7.71a2 2 0 0 1 -2-2v-33.97a2 2 0 0 1 2-2h7a2 2 0 0 1 2 1.83l.11 1.26a16.18 16.18 0 0 1 2.43-1.9 16.55 16.55 0 0 1 9.1-2.59 14.76 14.76 0 0 1 5.79 1.1 11.78 11.78 0 0 1 4.38 3.17 9.19 9.19 0 0 1 .76 1 16.62 16.62 0 0 1 11.95-5.28 12.75 12.75 0 0 1 9.32 3.45 12.39 12.39 0 0 1 3.71 8.65z' />
                <path d='m365 147.9a22.4 22.4 0 0 0 -6.7-11.9 18.19 18.19 0 0 0 -12.48-4.44 20.74 20.74 0 0 0 -10.51 2.73 21.47 21.47 0 0 0 -7.54 7.22 18.78 18.78 0 0 0 -2.89 10.17 20.66 20.66 0 0 0 2.55 10.32 18.62 18.62 0 0 0 7.25 7.16 22.23 22.23 0 0 0 11 2.59 21.37 21.37 0 0 0 6.83-1.17 25.38 25.38 0 0 0 6.18-3 2 2 0 0 0 .59-2.69l-3.45-5.66a2 2 0 0 0 -2.85-.6 17 17 0 0 1 -3.56 1.91 9.85 9.85 0 0 1 -3.58.68 9.27 9.27 0 0 1 -4.84-1.22 8.45 8.45 0 0 1 -1.58-1.18l24.31-8.53a2 2 0 0 0 1.27-2.39zm-28.45 2.42a10.15 10.15 0 0 1 1.12-4.09 8.5 8.5 0 0 1 3.1-3.3 8.4 8.4 0 0 1 4.49-1.18 6.9 6.9 0 0 1 4.68 1.49 9.33 9.33 0 0 1 1.5 1.59z' />
                <path d='m397.35 133.69-.33 7.7a2 2 0 0 1 -.68 1.42 2 2 0 0 1 -1.49.49 9.1 9.1 0 0 0 -5.64 1.15 11.18 11.18 0 0 0 -3.91 3.91 9.7 9.7 0 0 0 -1.4 5.08v15.5a2 2 0 0 1 -2 2h-7.63a2 2 0 0 1 -2-2v-33.94a2 2 0 0 1 2-2h6.89a2 2 0 0 1 2 1.85l.18 2.5c.22-.22.44-.43.67-.63a20.34 20.34 0 0 1 5.82-3.73 16.45 16.45 0 0 1 5.43-1.38 2 2 0 0 1 2.09 2.09z' />
                <path d='m434.61 164.47a2 2 0 0 1 -.27 2.82 19.08 19.08 0 0 1 -6.13 3.3 22.14 22.14 0 0 1 -7 1.17 22.69 22.69 0 0 1 -10.65-2.44 18.34 18.34 0 0 1 -7.39-7 20.27 20.27 0 0 1 -2.66-10.45 19.08 19.08 0 0 1 2.86-10.47 19.65 19.65 0 0 1 7.34-6.84 20.55 20.55 0 0 1 9.76-2.4 24.34 24.34 0 0 1 7.9 1.21 19 19 0 0 1 6.28 3.53 2 2 0 0 1 .27 2.75l-3.92 4.94a2 2 0 0 1 -2.78.36 15.6 15.6 0 0 0 -3.16-1.77 10 10 0 0 0 -4-.77 8.46 8.46 0 0 0 -4.49 1.22 8.91 8.91 0 0 0 -3.23 3.36 9.93 9.93 0 0 0 -1.18 4.9 9.62 9.62 0 0 0 1.22 4.84 9.07 9.07 0 0 0 3.38 3.44 9.56 9.56 0 0 0 5 1.28 9.82 9.82 0 0 0 3.31-.54 9.92 9.92 0 0 0 2.76-1.5 2 2 0 0 1 2.77.3z' />
                <path d='m479.78 147.9a22.32 22.32 0 0 0 -6.68-11.9 18.21 18.21 0 0 0 -12.48-4.44 20.74 20.74 0 0 0 -10.51 2.73 21.47 21.47 0 0 0 -7.54 7.22 18.78 18.78 0 0 0 -2.89 10.17 20.66 20.66 0 0 0 2.55 10.32 18.56 18.56 0 0 0 7.25 7.16 22.23 22.23 0 0 0 11 2.59 21.37 21.37 0 0 0 6.83-1.17 25.38 25.38 0 0 0 6.18-3 2 2 0 0 0 .58-2.69l-3.44-5.66a2 2 0 0 0 -1.3-.92 2 2 0 0 0 -1.55.32 17.33 17.33 0 0 1 -3.57 1.91 9.76 9.76 0 0 1 -3.57.68 9.27 9.27 0 0 1 -4.85-1.24 8.45 8.45 0 0 1 -1.58-1.18l24.31-8.53a2 2 0 0 0 1.26-2.37zm-27.32-1.67a8.27 8.27 0 0 1 7.59-4.48 6.9 6.9 0 0 1 4.68 1.49 9.26 9.26 0 0 1 1.49 1.59l-14.88 5.49a10 10 0 0 1 1.12-4.09z' />
              </g>
            </svg>
          </HeroHeader>
          <HeroParagraph>
            Grow your business with the most unique, beautiful and functional
            e-shops that scale with your business.
          </HeroParagraph>
          <HeroParagraph>
            We offer a one-stop shop for premium e-commerce building.
          </HeroParagraph>
          <HeroParagraphPartner>
            <img src={logo} alt="Studio Klein"/>is a Shopify Partner.
          </HeroParagraphPartner>
          <Link href='/services' passHref>
            <CTA className='hero-CTA'>our services</CTA>
          </Link>
        </HeroDescription>
        <HeroImages>
          <ImageWrapper>
            <div className='lottie-social'>
              <LottieData data={social} />
            </div>
            <div className='lottie-branding'>
              <LottieData data={branding} />
            </div>
            <div className='lottie-seo'>
              <LottieData data={seo} />
            </div>
          </ImageWrapper>
          <Link href='/services' passHref>
            <MobileCTA>our services</MobileCTA>
          </Link>
        </HeroImages>
      </Wrapper>
      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap");
        `}
      </style>
    </HeroSection>
  );
};

export default Hero;
