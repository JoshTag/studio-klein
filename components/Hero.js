import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";

const HeroSection = styled.section`
  position: relative;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 685px;
  }
`;

const ImageContainer = styled.div`
  height: 1032px;
  width: 100%;
  position: absolute;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    height: 942px;
    top: -30px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 860px;
    top: -60px
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    height: 960px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 960px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    height: 960px;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  bottom: -92px;
  right: -255px;
  width: 741px;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    width: 715px;
    bottom: -87px;
    right: -35px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 665px;
    bottom: -72px;
    right: -41px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    width: 87%;
    top: -140px;
    left: 47%;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 78%;
    top: -150px;
    max-width: 858px
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    width: 62%;
    top: -90px;
    max-width: 806px;
    left: 48%;
  }

  @media ${({ theme }) => theme.breakpoints.desktopWide} {
    right: -90px;
    left: auto;
  }
`;

const HeroImage = styled(Image)`
  z-index: -1;
  opacity: 0.07;
  height: 100%;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    opacity: 0.7;
  }
`;

const Wrapper = styled.div`
  margin: 0 5%;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    margin: 0 10%;
  }
`;

const HeroDescription = styled.div`
  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    width: 50%;
  }

  & p:first-of-type {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    line-height: 40px;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    margin-bottom: 1.8rem;
  }
`;

const Herolist = styled.ul`
  list-style: none;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 820px;
    margin: 100px auto 50px;
  }

  & > li {
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.breakpoints.tabletLarge} {
      width: 200px;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      width: 240px;
    }
  }
`;

const Break = styled.br`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    display: block;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <ImageContainer>
        <ImageBox>
          <HeroImage
            src='/images/homepage-image.png'
            width={480}
            height={725}
            layout='responsive'
            quality={100}
          />
        </ImageBox>
      </ImageContainer>
      <Wrapper>
        <HeroDescription>
          <p>
            StudioKlein is the full-service agency building the future of
            e-commerce.
          </p>
          <p>
            At Studio Klein, we believe small business is the future. Thats why
            we are deeply committed to helping small business succeed in the
            rapidly evolving world of e-commerce.
          </p>
          <p>
            Studio Klein the agency committed to creating the most unique,
            beautiful and functional e-shops that will scale with your business.
            No matter if you are just starting out or looking to expand your
            reach, our flexible and innovative approach to e-commerce will allow
            your business to stand out and succeed.
          </p>
        </HeroDescription>
        <Herolist>
          <li>
            <Button>design development</Button>
          </li>
          <li>
            <Button>
              brand <Break />
              creation
            </Button>
          </li>
          <li>
            <Button>SEO app integration</Button>
          </li>
        </Herolist>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
