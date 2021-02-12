import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

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
  z-index: -1;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    height: 942px;
    top: -30px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 860px;
    top: -60px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    height: 980px;
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
  }
`;

const HeroDescription = styled.div`
  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    width: 50%;
  }
`;

const HeroHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  line-height: 40px;
  margin-bottom: 1.5rem;
  padding-top: 2rem;
  font-weight: normal;
`;

const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 27px;
  margin: 1rem 0;
  display: inline-block;
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

const ButtonStyle = styled.a`
  width: 100%;
  background-color: ${({ theme }) => theme.colours.secondary70};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colours.primary};
  border: 1px solid ${({ theme }) => theme.colours.secondary70};
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <ImageContainer>
        <ImageBox>
          <HeroImage
            src='/images/hero-image.png'
            width={480}
            height={725}
            layout='responsive'
            quality={100}
          />
        </ImageBox>
      </ImageContainer>
      <Wrapper>
        <HeroDescription>
          <HeroHeader>
            Studio Klein is the full-service agency building the future of
            e-commerce.
          </HeroHeader>
          <HeroParagraph>
            At Studio Klein, we believe small business is the future. Thats why
            we are deeply committed to helping small business succeed in the
            rapidly evolving world of e-commerce.
          </HeroParagraph>
          <HeroParagraph>
            Studio Klein the agency committed to creating the most unique,
            beautiful and functional e-shops that will scale with your business.
            No matter if you are just starting out or looking to expand your
            reach, our flexible and innovative approach to e-commerce will allow
            your business to stand out and succeed.
          </HeroParagraph>
        </HeroDescription>
        <Herolist>
          <li>
            <Link href='/services' passHref>
              <ButtonStyle>design</ButtonStyle>
            </Link>
          </li>
          <li>
            <Link href='/services' passHref>
              <ButtonStyle>development</ButtonStyle>
            </Link>
          </li>
          <li>
            <Link href='/services' passHref>
              <ButtonStyle>SEO</ButtonStyle>
            </Link>
          </li>
        </Herolist>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
