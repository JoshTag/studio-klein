import React, { createRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const ServiceContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    flex-direction: row;
  }
`;

const ServiceSidebar = styled.div`
  background: ${({ theme }) => theme.colours.secondary80};
  height: 300px;
  background: #494947;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
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

const HeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const SVGWrapper = styled.svg`
  width: 60%;

  & > path {
    stroke-dasharray: 1508;
    stroke-dashoffset: 1508;
  }
`;

const ServiceContent = styled.div`
  margin: 4rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 4rem;
  }

  & > h4 {
    font-size: ${({ theme }) => theme.fontSize.mediumLarge};
    color: ${({ theme }) => theme.colours.secondary80};
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
    color: ${({ theme }) => theme.colours.secondary80};
    margin-bottom: 2rem;
    display: inline-block;
    text-decoration: none;
    height: 40px;
    width: 206px;
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
      right: -313px;
    }
  }
`;

const Service = () => {
  const pathRef = createRef();

  useEffect(() => {
    if (pathRef.current) {
      console.log(pathRef.current.getTotalLength());

      window.addEventListener("scroll", function (e) {
        // What % down is it?
        const scrollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

        // Length to offset the dashes
        const drawLength = pathRef.current.getTotalLength() * scrollPercentage;

        // Draw in reverse
        pathRef.current.style.strokeDashoffset =
          pathRef.current.getTotalLength() - drawLength;
      });
    }
  }, [pathRef]);

  return (
    <ServiceContainer>
      <ServiceSidebar>
        <HeaderWrapper>
          <SVGWrapper
            viewBox='0 0 500 500'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              ref={pathRef}
              d='M 250, 250 m -240, 0 a 240,240 0 1,0 480,0 a 240,240 0 1,0 -480,0'
              stroke='#F4F2EB'
              strokeWidth='10'
            />
          </SVGWrapper>
        </HeaderWrapper>
      </ServiceSidebar>
      <ServiceContent>
        <h4>the most customizable Shopify shops</h4>
        <p>
          Shopify is the gold standard for e-commerce, but templates are not
          going to get your business to stand out. Our team is built of top
          notch developers and designers that can create the best Shopify stores
          you can find nowhere else. Your shop deserves more than a template!
        </p>
        <h4>full service brand creation by *real* design experts</h4>
        <p>
          You can trust your brand with us. Just look at how cute our site is!
          Other Shopify experts just don’t have the chops. We understand what it
          means to stand out in today’s online market. A sticky brand is KEY to
          success -- and we’re going to build you a great one.
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
    </ServiceContainer>
  );
};

export default Service;
