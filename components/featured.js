import styled from "styled-components";
import Image from "next/image";
import SiteButton from "components/button";
import Title from "components/title"

const FeaturedTitle = styled(Title)`
  text-align: center;
  padding: 80px 0 60px;
`

const FeaturedWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FeaturedProject = styled.div`
  position: relative;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition-timing-function: ease-in-out;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    height: 800px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    height: 900px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 600px;
    width: 100%;
    transition: 0.6s;

    &:hover {
      width: 300%;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    height: 650px;
  }
`;

const LogoContainer = styled.div`
  width: 200px;
  margin-top: 20px;
  z-index: 100;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 145px;
  }
`;

const ProjectBtn = styled(SiteButton)`
  width: 95%;
  text-align: center;
  z-index: 100;
  margin: auto 2.5% 40px;
  padding: 0.5rem;
`;

const ProjectImage = styled(Image)`
  filter: saturate(70%);
  transition: 0.3s;
`;

const ImageWrapper = styled.div`
  position: absolute;
  z-index: 90;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &:hover ${ProjectImage} {
    filter: saturate(100%);
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
              src='/images/featured-project-logo-1.png'
              width={166}
              height={101}
              layout='responsive'
            />
          </LogoContainer>
          <ProjectBtn>view project</ProjectBtn>
          <ImageWrapper>
            <ProjectImage
              src='/images/featured-project-1.png'
              layout='fill'
              objectFit='cover'
            />
          </ImageWrapper>
        </FeaturedProject>
        <FeaturedProject>
          <LogoContainer>
            <Image
              src='/images/featured-project-logo-1.png'
              width={166}
              height={101}
              layout='responsive'
            />
          </LogoContainer>
          <ProjectBtn>view project</ProjectBtn>
          <ImageWrapper>
            <ProjectImage
              src='/images/featured-project-1.png'
              layout='fill'
              objectFit='cover'
            />
          </ImageWrapper>
        </FeaturedProject>
        <FeaturedProject>
          <LogoContainer>
            <Image
              src='/images/featured-project-logo-1.png'
              width={166}
              height={101}
              layout='responsive'
            />
          </LogoContainer>
          <ProjectBtn>view project</ProjectBtn>
          <ImageWrapper>
            <ProjectImage
              src='/images/featured-project-1.png'
              layout='fill'
              objectFit='cover'
            />
          </ImageWrapper>
        </FeaturedProject>
      </FeaturedWrapper>
    </section>
  );
};

export default Featured;
