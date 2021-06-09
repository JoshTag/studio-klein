import { createRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { serviceScrollAnimation } from "./../utils/gsap";
import LottieData from "components/lottie";
import social from "./../public/images/social.json";
import seo from "./../public/images/seo.json";
import branding from "./../public/images/branding.json";

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
    font-weight: 300;
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
  font-weight: 300;
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
      font-weight: 300;
      margin-bottom: 1.5rem;
    }
  }

  & > h4 {
    font-size: ${({ theme }) => theme.fontSize.mediumLarge};
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    margin-bottom: 2rem;
    display: inline-block;
  }

  & > ul {
    margin: 0 0 2.5rem 4rem;

    & li > ul > li:first-of-type {
      margin-top: 1rem;
    }

    & > li > ul {
      margin-left: 2rem;
    }
  }

  & li {
    margin-bottom: 1rem;
  }

  .services__social-lottie {
    width: 250px;
  }

  .services__branding-lottie {
    width: 250px;
  }

  .services__seo-lottie {
    width: 250px;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      width: 370px;
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
  const seoContainer = createRef(null);
  const seoPath = createRef(null);
  const seoHeader = createRef(null);

  useEffect(() => {
    serviceScrollAnimation(
      designContainer.current,
      designPath.current,
      "170px",
      "center",
      designHeader.current
    );
    serviceScrollAnimation(
      developContainer.current,
      developPath.current,
      "center",
      "center",
      developHeader.current
    );
    serviceScrollAnimation(
      seoContainer.current,
      seoPath.current,
      "center",
      "bottom",
      seoHeader.current,
      "bottom+=170px"
    );
  }, []);

  return (
    <ServiceContainer>
      <ServiceAside>
        <AsideWrapper>
          <AsideTitle ref={designHeader}>
            design and <br />
            development
          </AsideTitle>
          <AsideTitle ref={developHeader}>
            brand
            <br />
            creation
          </AsideTitle>
          <AsideTitle ref={seoHeader}>
            SEO and app
            <br />
            integration
          </AsideTitle>
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
              ref={seoPath}
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
          <h3>Fully Customizable Shops</h3>
        </MobileHeader>
        <ServiceContent ref={designContainer} id='fullycustomizableshops'>
          <h3>Fully Customizable Shops</h3>
          <p>
            We offer comprehensive e-shop development. We understand the full
            spectrum of what is needed to succeed in e-commerce today, and in
            the future.
          </p>
          <p>
            A great brand combined with the most functional and customized
            features, fully integrated with social media, and a stack of content
            ready for you to publish. Studio Klein will make your business stand
            out from the crowd.
          </p>
          <div className='services__branding-lottie'>
            <LottieData data={branding} />
          </div>
        </ServiceContent>
        <MobileHeader>
          <h3>Brand Creation</h3>
        </MobileHeader>
        <ServiceContent ref={developContainer} id='brandcreation'>
          <h3>Brand Creation</h3>
          <p>
            If your e-commerce business needs a boost of brand power, Studio
            Klein delivers. We offer the total package - full brand creation,
            including assets. This means we supply:
          </p>
          <ul>
            <li>Logo</li>
            <li>Brand colours and fonts</li>
            <li>
              Graphics for Web and Social
              <ul>
                <li>Hero Images</li>
                <li>Product Photo Editing</li>
                <li>Animated Logos</li>
                <li>Videos, including animations</li>
                <li>
                  Extras like Menus, Size Guides, Delivery Maps, or anything you
                  need!
                </li>
              </ul>
            </li>
          </ul>
          <p>
            When we create a brand we don’t just design a logo. We also set you
            up for success, so your site and social media never get stale.
          </p>
          <p>
            We give you a stack of social media postings, videos and hero
            images, so you’re site stays fresh.
          </p>
        </ServiceContent>
        <MobileHeader>
          <h3>SEO and App Integration</h3>
        </MobileHeader>
        <ServiceContent ref={seoContainer} id='seoandappintegration'>
          <h3>SEO and App Integration</h3>
          <p>
            We provide integration for any Shopify app. Incorporate any Shopify
            app into your store. Including but not limited to:
          </p>
          <p className='margin-list'>Available for:</p>
          <ul>
            <li>MailChimp and other popular email marketing apps</li>
            <li>SEO optimization</li>
            <li>Incremental payment services like Afterpay</li>
            <li>Performance and financial reporting</li>
            <li>Marketing tools</li>
            <li>Specialized shipping and tracking features</li>
            <li>And endless other options!</li>
          </ul>
          <div className='services__seo-lottie'>
            <LottieData data={seo} />
          </div>
          <p>
            Don’t see what you need in the Shopify app store? No worries, we can
            create a custom app just for your shop.
          </p>
          <h3>Social Media Integration</h3>
          <div className='services__social-lottie'>
            <LottieData data={social} />
          </div>
          <p>
            Look forward to seamless integration with social media platforms.
            Customers can buy directly from your socials, but the shop receives
            all orders as if they are ordering directly from your shop.
          </p>
          <p className='margin-list'>Available for:</p>
          <ul>
            <li>Instgram</li>
            <li>Facebook</li>
            <li>Any major social media platforms</li>
          </ul>
        </ServiceContent>
      </ServiceMain>
      <style jsx>
        {`
          .margin-list {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </ServiceContainer>
  );
};

export default Service;
