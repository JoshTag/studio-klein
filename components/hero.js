import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 600px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    height: 700px;
  }
`;

const HeroImages = styled.div`
  width: 100%;
  height: 575px;
  z-index: -1;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    height: 800px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 1000px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: auto;
    width: 50%;
  }

  & > .lottie-social {
    position: absolute;
    height: 275px;
    top: 10px;
    right: 70px;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      height: 375px;
      right: 110px;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      height: 500px;
      right: 150px;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      height: 300px;
      right: -200px;
      top: 20px;
      z-index: 95;
    }

    @media ${({ theme }) => theme.breakpoints.desktopLarge} {
      right: -240px;
      top: 20px;
    }

    @media ${({ theme }) => theme.breakpoints.desktopWide} {
      height: 350px;
      right: -250px;
    }
  }

  & > .lottie-branding {
    position: absolute;
    height: 225px;
    top: 90px;
    left: 60px;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      height: 325px;
      left: 80px;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      height: 450px;
      left: 120px;
      top: 125px;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      height: 320px;
      left: 120px;
      top: 250px;
      z-index: 100;
    }

    @media ${({ theme }) => theme.breakpoints.desktopLarge} {
      left: 150px;
    }

    @media ${({ theme }) => theme.breakpoints.desktopWide} {
      height: 370px;
      top: 275px;
    }
  }

  & > .lottie-seo {
    position: absolute;
    height: 225px;
    top: 275px;
    z-index: 100;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      height: 325px;
      top: 375px;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      height: 425px;
      top: 475px;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      height: 275px;
      top: 75px;
      left: 0px;
      z-index: 90;
    }

    @media ${({ theme }) => theme.breakpoints.desktopWide} {
      height: 325px;
      top: 75px;
      left: -40px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    .hero-CTA {
      display: none;
    }
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
    top: -109px;
    left: 47%;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 78%;
    top: -150px;
    max-width: 858px;
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
  padding-top: 4rem;
  font-weight: normal;
`;

const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 27px;
  margin-bottom: 1rem;
  display: inline-block;
`;

const ButtonStyle = styled.a`
  width: 100%;
  background-color: ${({ theme }) => theme.colours.lightGrey};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colours.primary};
  border: 1px solid ${({ theme }) => theme.colours.lightGrey};
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  position: absolute;
  bottom: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Wrapper>
        <HeroDescription>
          <HeroHeader>
            Studio Klein is the full-service agency building the future of
            e-commerce.
          </HeroHeader>
          <HeroParagraph>
            At Studio Klein, we believe small business is the future. That is
            why we are deeply committed to helping small business succeed in the
            rapidly evolving world of e-commerce.
          </HeroParagraph>
          <HeroParagraph>
            Studio Klein is committed to creating the most unique, beautiful and
            functional e-shops that will scale with your business. Whether you
            are just starting out or looking to expand your reach, our flexible
            and innovative approach to e-commerce will allow your business to
            stand out and succeed.
          </HeroParagraph>
        </HeroDescription>
        <HeroImages>
          <lottie-player
            class='lottie-social'
            src='https://assets8.lottiefiles.com/packages/lf20_gafmag5k.json'
            background='transparent'
            speed='1'
            loop='true'
            autoplay
          ></lottie-player>
          <lottie-player
            class='lottie-seo'
            src='https://assets4.lottiefiles.com/packages/lf20_gsmymebw.json'
            background='transparent'
            speed='1'
            loop='true'
            autoplay
          ></lottie-player>
          <lottie-player
            class='lottie-branding'
            src='https://assets10.lottiefiles.com/packages/lf20_ut1ind7s.json'
            background='transparent'
            speed='1'
            loop='true'
            autoplay
          ></lottie-player>
          <Link href='/services' passHref>
            <ButtonStyle className='hero-CTA'>serivces</ButtonStyle>
          </Link>
        </HeroImages>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
