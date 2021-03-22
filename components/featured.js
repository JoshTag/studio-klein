import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const FeaturedTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.grey};
  font-weight: normal;
  padding-bottom: 1rem;
  padding: 50px 0 50px;
`;

const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectImage = styled(Image)`
  filter: saturate(70%);
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
`;

const ImageWrapper = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &:hover ${ProjectImage} {
    filter: saturate(100%);
  }
`;

const FeaturedProject = styled.div`
  position: relative;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    height: 800px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    height: 900px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 600px;
    width: 100%;
    -webkit-transition: 0.6s ease-in-out;
    -moz-transition: 0.6s ease-in-out;
    -o-transition: 0.6s ease-in-out;
    transition: 0.6s ease-in-out;

    &:hover {
      width: 300%;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    height: 650px;
  }

  &:hover ${ProjectImage} {
    filter: saturate(100%);
  }
`;

const LogoContainer = styled.div`
  width: 200px;
  margin-top: 1.5rem;
  z-index: 100;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 145px;
  }
`;

const LinkButton = styled.a`
  margin: auto 2.5% 40px;
  width: 95%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colours.lightGrey};
  border: 1px solid ${({ theme }) => theme.colours.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colours.primary};
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: auto;
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    background: transparent;
    margin: 1rem 2.5% 40px;
    border: none;
  }
`;

const Featured = () => {
  return (
    <section>
      <FeaturedTitle>Featured Shop</FeaturedTitle>
      <FeaturedWrapper>
        <FeaturedProject>
          <LogoContainer>
            <Image
              src='/images/projects/studio-zoubida/logo-white.svg'
              width={166}
              height={101}
              layout='responsive'
              alt='Studio Zoubida Logo'
            />
          </LogoContainer>
          <Link href='/projects' passHref>
            <LinkButton>view project {">>"}</LinkButton>
          </Link>
          <ImageWrapper>
            <ProjectImage
              src='/images/projects/studio-zoubida/featured-image.png'
              layout='fill'
              objectFit='cover'
              alt='Studio Zoubida feature'
            />
          </ImageWrapper>
        </FeaturedProject>
        <FeaturedProject>
          <LogoContainer>
            <Image
              src='/images/projects/the-pielander/logo.svg'
              width={166}
              height={101}
              layout='responsive'
              alt='Studio Zoubida Logo'
            />
          </LogoContainer>
          <Link href='/projects' passHref>
            <LinkButton>view project {">>"}</LinkButton>
          </Link>
          <ImageWrapper>
            <ProjectImage
              src='/images/projects/the-pielander/featured-image.jpg'
              layout='fill'
              objectFit='cover'
              alt='Studio Zoubida feature'
            />
          </ImageWrapper>
        </FeaturedProject>
        <FeaturedProject>
          <span className='logo-placeholder'>Coming Soon</span>
          <ImageWrapper>
            <div className='image-placeholder--light' />
          </ImageWrapper>
        </FeaturedProject>
      </FeaturedWrapper>
      <style jsx>
        {`
          .image-placeholder {
            background-color: #323232;
            width: 100%;
            height: 100%;
          }

          .image-placeholder--light {
            background-color: #393939;
            width: 100%;
            height: 100%;
          }

          .logo-placeholder {
            margin-top: 4rem;
            color: rgb(244, 242, 235);
            font-size: 21px;
          }
        `}
      </style>
    </section>
  );
};

export default Featured;
