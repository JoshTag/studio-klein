import Image from "next/image";
import Link from "next/link";
import Button from "components/button";
import Title from "components/title";
import styled from "styled-components";

const FeaturedTitle = styled(Title)`
  text-align: center;
  padding: 80px 0 60px;
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

const ProjectLink = styled(Link)`
  width: 100%;
`;

const LinkButton = styled(Button)`
  margin: auto 2.5% 40px;
  width: 95%;
  text-align: center;
  padding: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 1rem 2.5% 40px;
    background: transparent;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const Featured = () => {
  return (
    <section>
      <FeaturedTitle>Featured</FeaturedTitle>
      <FeaturedWrapper>
        <FeaturedProject>
          <LogoContainer>
            <Image
              src='/images/projects/studio-zoubida/logo-white.svg'
              width={166}
              height={101}
              layout='responsive'
            />
          </LogoContainer>
          <Link href='/projects' passHref>
            <ProjectLink>
              <LinkButton>view project {">>"} </LinkButton>
            </ProjectLink>
          </Link>
          <ImageWrapper>
            <ProjectImage
              src='/images/projects/studio-zoubida/featured-image.png'
              layout='fill'
              objectFit='cover'
            />
          </ImageWrapper>
        </FeaturedProject>
        <FeaturedProject>
          <span className="logo-placeholder">Coming Soon</span>
          <ImageWrapper>
            <div className='image-placeholder' />
          </ImageWrapper>
        </FeaturedProject>
        <FeaturedProject>
          <span className="logo-placeholder">Coming Soon</span>
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
