import styled from "styled-components"
import Button from "./Button"
import Image from 'next/image'

const HeroSection = styled.section`
  position: relative;

  @media ${props => props.theme.breakpoints.desktop} {
    height: 685px;
  }

  @media ${props => props.theme.breakpoints.desktopLarge} {
    height: 720px;
  }
`

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;

  @media ${props => props.theme.breakpoints.mobileLarge} {
    height: 123%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    height: 134%;
    top: -45px;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    height: 129%;
    top: -70px;
  }

  @media ${props => props.theme.breakpoints.desktopLarge} {
    height: 127%;
  }
`

const HeroImage = styled(Image)`
  position: absolute;
  width: 655px;
  top: -50px;
  right: -180px;
  z-index: -1;
  opacity: 0.07;

  @media ${props => props.theme.breakpoints.mobileLarge} {
    width: 800px;
    top: -31px;
    right: -150px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width: 800px;
    top: -31px;
    right: -150px;
  }

  @media ${props => props.theme.breakpoints.tabletLarge} {
    opacity: 0.5;
    width: 850px;
    top: -110px;
    right: -355px;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    width: 840px;
    top: -130px;
    right: -305px;
  }

  @media ${props => props.theme.breakpoints.desktopLarge} {
    top: -118px;
    right: -220px;
  }

  @media ${props => props.theme.breakpoints.desktopWide} {
    top: -85px;
    right: -91px;
  }
`

const Wrapper = styled.div`
  margin: 0 5%;

  @media ${props => props.theme.breakpoints.mobileLarge} {
    margin: 0 10%;
  }
`

const HeroDescription = styled.div`
  @media ${props => props.theme.breakpoints.tabletLarge} {
    width: 50%;
  }

  & p:first-of-type {
    font-size: ${props => props.theme.fontSize.xLarge};
    line-height: 40px;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }

  & > p {
    font-size: ${props => props.theme.fontSize.small};
    line-height: 27px;
    margin-bottom: 1.8rem;
  }
`

const Herolist = styled.ul`
  list-style: none;

  @media ${props => props.theme.breakpoints.tabletLarge} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    max-width: 820px;
    margin: 100px auto 50px;
  }

  & > li {
    margin-bottom: 1rem;

    @media ${props => props.theme.breakpoints.tabletLarge} {
      width: 200px;
    }

    @media ${props => props.theme.breakpoints.desktop} {
      width: 240px;
    }
  }
`

const Break = styled.br`
  display: none;

  @media ${props => props.theme.breakpoints.tabletLarge} {
    display: block;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    display: none;
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <ImageContainer>
        <HeroImage src="/images/homepage-image.png" layout="fill" objectFit="cover" quality={100}/>
      </ImageContainer>
      <Wrapper>
        <HeroDescription>
          <p>StudioKlein is the full-service agency building the future of e-commerce.</p>
          <p>
            At Studio Klein, we believe small business is the future. Thats why we are deeply
            committed to helping small business succeed in the rapidly evolving world of e-commerce.
          </p>
          <p>
            Studio Klein the agency committed to creating the most unique, beautiful and functional
            e-shops that will scale with your business. No matter if you are just starting out or
            looking to expand your reach, our flexible and innovative approach to e-commerce will
            allow your business to stand out and succeed.
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
            <Button>SEO app intergration</Button>
          </li>
        </Herolist>
      </Wrapper>
    </HeroSection>
  )
}

export default Hero
