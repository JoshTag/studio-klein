import styled, { keyframes } from "styled-components";
import Link from "next/link"

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
      background: url(/images/link-underline-black.svg)
        no-repeat;
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
  return (
    <ServiceContainer>
      <ServiceSidebar>
        <h3>full service design</h3>
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
          success -- and we’re going to build you a great one.{" "}
        </p>
        <h4>layouts, logos & videos, oh my!</h4>
        <p>
          But wait, you need more than just a great e-shop to build a brand.
          From logo and style-guide creation to animations, and social media
          graphics, we will build you ALL the assets. You’ll never run out of
          instagram content again.
        </p>
        <ProjectURL>
          <Link href="/projects">
            <a>
              check out our projects
            </a>
          </Link>
        </ProjectURL>
      </ServiceContent>
    </ServiceContainer>
  );
};

export default Service;
