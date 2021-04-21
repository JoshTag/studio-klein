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

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    flex-direction: row;
  }
`;

const ProjectImage = styled(Image)`
  filter: saturate(70%);
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
`;

const ProjectBackground = styled.div`
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

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    height: 800px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    height: 900px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
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

const ProjectLogo = styled.div`
  position: absolute;
  margin: 0;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  z-index: 1000;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: ${({ width }) => width};
  }

  & > img {
    width: 100%;
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
  z-index: 100;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 190px;
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    background: transparent;
    margin: auto 2.5% 450px;
    border: none;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    position: absolute;
    margin: 0;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Featured = () => {
  return (
    <section>
      <FeaturedTitle>Featured Shops</FeaturedTitle>
      <FeaturedWrapper>
        <FeaturedProject>
          <ProjectLogo width='175px'>
            <img
              src='/images/projects/studio-zoubida/logo-white.svg'
              alt='Studio Zoubida Logo'
            />
          </ProjectLogo>
          <Link href='/projects' passHref>
            <LinkButton>view project {">>"}</LinkButton>
          </Link>
          <ProjectBackground>
            <ProjectImage
              src='/images/projects/studio-zoubida/featured-image.png'
              layout='fill'
              objectFit='cover'
              alt='Studio Zoubida Feature'

            />
          </ProjectBackground>
        </FeaturedProject>
        <FeaturedProject>
          <ProjectLogo width='200px'>
            <img
              src='/images/projects/the-pielander/logo.svg'
              alt='The Pielander Logo'
            />
          </ProjectLogo>
          <Link href='/projects' passHref>
            <LinkButton>view project {">>"}</LinkButton>
          </Link>
          <ProjectBackground>
            <ProjectImage
              src='/images/projects/the-pielander/featured-image.jpg'
              layout='fill'
              objectFit='cover'
              alt='The Pielander Feature'
            />
          </ProjectBackground>
        </FeaturedProject>
        <FeaturedProject>
          <span className='logo-placeholder'>Coming Soon</span>
          <ProjectBackground>
            <div className='image-placeholder--light' />
          </ProjectBackground>
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
            z-index: 100;
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
          }
        `}
      </style>
    </section>
  );
};

export default Featured;
