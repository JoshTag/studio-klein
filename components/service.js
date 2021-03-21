import React, { createRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { serviceScrollAnimation } from "./../utils/gsap";

const ServiceContainer = styled.section`
  position: relative; // remove
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    flex-direction: row;
  }
`;

const MobileHeader = styled.div`
  background: ${({ theme }) => theme.colours.grey};
  height: 200px;
  background: #494947;
  display: grid;
  place-items: center;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    display: none;
  }

  & > h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    color: ${({ theme }) => theme.colours.primary};
    font-weight: normal;
    width: 300px;

    @media ${({ theme }) => theme.breakpoints.tabletSmall} {
      width: 500px;
    }
  }
`;

const ServiceAside = styled.aside`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    display: block;
    background: ${({ theme }) => theme.colours.grey};
    height: 300px;
    background: #494947;
    height: 100vh;
    width: 350px;
    flex-shrink: 0;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 400px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    width: 500px;
  }
`;

const AsideWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const AsideTitle = styled.h3`
  position: absolute;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.primary};
  font-weight: normal;
  padding-bottom: 1rem;
  margin: 0 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    padding: 0;
    opacity: 0;
    margin: 0;
  }
`;

const SVGWrapper = styled.svg`
  width: 60%;
`;

const PathDraw = styled.path`
  stroke-dasharray: 1508;
  stroke-dashoffset: 1508;
  opacity: 0;
`;

const ServiceMain = styled.div``;

const ServiceContent = styled.div`
  margin: 4rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 4rem 0;
    padding: 4rem 0 0;
  }

  & > h3 {
    display: none;

    @media ${({ theme }) => theme.breakpoints.tabletLarge} {
      display: block;
      font-size: ${({ theme }) => theme.fontSize.xxLarge};
      font-weight: normal;
      margin-bottom: 1.5rem;
    }
  }

  & > h4 {
    font-size: ${({ theme }) => theme.fontSize.mediumLarge};
    font-weight: normal;
    margin-bottom: 1.5rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    margin-bottom: 2rem;
    display: inline-block;
  }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(-260px)}
`;

const ProjectURL = styled.div`
  & > a {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colours.grey};
    margin-bottom: 2rem;
    display: inline-block;
    text-decoration: none;
    height: 40px;
    overflow: hidden;
    text-decoration: none;

    &:after,
    :before {
      content: "";
      position: absolute;
      width: 260px;
      height: 10px;
      bottom: 0px;
      background: url(/images/link-underline-black.svg) no-repeat;
      animation: ${scroll} 15s linear infinite;
    }

    &:after {
      left: 0;
    }

    &:before {
      left: 259px;
    }
  }
`;

const Service = () => {
  const designContainer = createRef(null);
  const designPath = createRef(null);
  const designHeader = createRef(null);
  const developContainer = createRef(null);
  const developPath = createRef(null);
  const developHeader = createRef(null);
  const unknownContainer = createRef(null);
  const unknownPath = createRef(null);
  const unknownHeader = createRef(null);

  useEffect(() => {
    const designTrigger = designContainer.current;
    const designDraw = designPath.current;
    const designTitle = designHeader.current;
    const developTrigger = developContainer.current;
    const developDraw = developPath.current;
    const developTitle = developHeader.current;
    const unknownTrigger = unknownContainer.current;
    const unknownDraw = unknownPath.current;
    const unknownTitle = unknownHeader.current;

    serviceScrollAnimation(
      designTrigger,
      designDraw,
      "200px",
      "center",
      designTitle
    );
    serviceScrollAnimation(
      developTrigger,
      developDraw,
      "center",
      "center",
      developTitle
    );
    serviceScrollAnimation(
      unknownTrigger,
      unknownDraw,
      "center",
      "center",
      unknownTitle
    );
  }, []);

  return (
    <ServiceContainer>
      <ServiceAside>
        <AsideWrapper>
          <AsideTitle ref={designHeader}>design</AsideTitle>
          <AsideTitle ref={developHeader}>development</AsideTitle>
          <AsideTitle ref={unknownHeader}>SEO</AsideTitle>
          <SVGWrapper
            viewBox='0 0 500 500'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <PathDraw
              ref={designPath}
              d='M250.5 10.159C383.048 10.159 490.5 117.611 490.5 250.159C490.5 382.707 383.048 490.159 250.5 490.159C117.952 490.159 10.5 382.707 10.5 250.159C10.5 117.611 117.952 10.159 250.5 10.159Z'
              stroke='#F4F2EB'
              strokeWidth='20'
            />
            <PathDraw
              ref={developPath}
              d='M250.5 10.159C383.048 10.159 490.5 117.611 490.5 250.159C490.5 382.707 383.048 490.159 250.5 490.159C117.952 490.159 10.5 382.707 10.5 250.159C10.5 117.611 117.952 10.159 250.5 10.159Z'
              stroke='#F4F2EB'
              strokeWidth='20'
            />
            <PathDraw
              ref={unknownPath}
              d='M250.5 10.159C383.048 10.159 490.5 117.611 490.5 250.159C490.5 382.707 383.048 490.159 250.5 490.159C117.952 490.159 10.5 382.707 10.5 250.159C10.5 117.611 117.952 10.159 250.5 10.159Z'
              stroke='#F4F2EB'
              strokeWidth='20'
            />
            <path
              d='M250.5 1.15899C388.019 1.15899 499.5 112.64 499.5 250.159C499.5 387.678 388.019 499.159 250.5 499.159C112.981 499.159 1.49999 387.678 1.49999 250.159C1.49999 112.64 112.981 1.15899 250.5 1.15899Z'
              stroke='#F4F2EB'
              strokeWidth='1'
            />
          </SVGWrapper>
        </AsideWrapper>
      </ServiceAside>
      <ServiceMain>
        <MobileHeader>
          <h3>Desgin</h3>
        </MobileHeader>
        <ServiceContent ref={designContainer}>
          <h3>Design</h3>
          <h4>the most customizable Shopify shops</h4>
          <p>
            Shopify is the gold standard for e-commerce, but templates are not
            going to get your business to stand out. Our team is built of top
            notch developers and designers that can create the best Shopify
            stores you can find nowhere else. Your shop deserves more than a
            template!
          </p>
          <h4>full service brand creation by *real* design experts</h4>
          <p>
            You can trust your brand with us. Just look at how cute our site is!
            Other Shopify experts just don’t have the chops. We understand what
            it means to stand out in today’s online market. A sticky brand is
            KEY to success -- and we’re going to build you a great one.
          </p>
          <h4>layouts, logos & videos, oh my!</h4>
          <p>
            But wait, you need more than just a great e-shop to build a brand.
            From logo and style-guide creation to animations, and social media
            graphics, we will build you ALL the assets. You’ll never run out of
            instagram content again.
          </p>
          <ProjectURL>
            <Link href='/projects'>
              <a>check out our projects</a>
            </Link>
          </ProjectURL>
        </ServiceContent>
        <MobileHeader>
          <h3>development</h3>
        </MobileHeader>
        <ServiceContent ref={developContainer}>
          <h3>Development</h3>
          <h4>the most customizable Shopify shops</h4>
          <p>
            Shopify is the gold standard for e-commerce, but templates are not
            going to get your business to stand out. Our team is built of top
            notch developers and designers that can create the best Shopify
            stores you can find nowhere else. Your shop deserves more than a
            template!
          </p>
          <h4>full service brand creation by *real* design experts</h4>
          <p>
            You can trust your brand with us. Just look at how cute our site is!
            Other Shopify experts just don’t have the chops. We understand what
            it means to stand out in today’s online market. A sticky brand is
            KEY to success -- and we’re going to build you a great one.
          </p>
          <h4>layouts, logos & videos, oh my!</h4>
          <p>
            But wait, you need more than just a great e-shop to build a brand.
            From logo and style-guide creation to animations, and social media
            graphics, we will build you ALL the assets. You’ll never run out of
            instagram content again.
          </p>
          <ProjectURL>
            <Link href='/projects'>
              <a>check out our projects</a>
            </Link>
          </ProjectURL>
        </ServiceContent>
        <MobileHeader>
          <h3>SEO</h3>
        </MobileHeader>
        <ServiceContent ref={unknownContainer}>
          <h3>SEO</h3>
          <h4>the most customizable Shopify shops</h4>
          <p>
            Shopify is the gold standard for e-commerce, but templates are not
            going to get your business to stand out. Our team is built of top
            notch developers and designers that can create the best Shopify
            stores you can find nowhere else. Your shop deserves more than a
            template!
          </p>
          <h4>full service brand creation by *real* design experts</h4>
          <p>
            You can trust your brand with us. Just look at how cute our site is!
            Other Shopify experts just don’t have the chops. We understand what
            it means to stand out in today’s online market. A sticky brand is
            KEY to success -- and we’re going to build you a great one.
          </p>
          <h4>layouts, logos & videos, oh my!</h4>
          <p>
            But wait, you need more than just a great e-shop to build a brand.
            From logo and style-guide creation to animations, and social media
            graphics, we will build you ALL the assets. You’ll never run out of
            instagram content again.
          </p>
          <ProjectURL>
            <Link href='/projects'>
              <a>check out our projects</a>
            </Link>
          </ProjectURL>
        </ServiceContent>
      </ServiceMain>
    </ServiceContainer>
  );
};

export default Service;
