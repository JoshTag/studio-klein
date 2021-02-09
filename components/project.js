import Image from "next/image";
import styled from "styled-components";
import Title from "components/title";

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    flex-direction: row;
  }
`;

const ProjectImage = styled.div`
  position: relative;

  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    overflow: hidden;
    height: 300px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
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

const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;

  &:before {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ProjectLogo = styled.div`
  position: absolute;
  width: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const ProjectInfo = styled.div`
  margin: 4rem 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    margin: 4rem;
  }

  & > h3,
  > h4 {
    margin-bottom: 1rem;
  }
`;

const ProjectSubHeader = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.colours.secondary80};
  font-weight: normal;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 27px;
  margin: 1rem 0;
  display: inline-block;
`;

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectImage>
        <Background>
          <Image
            src='/images/studio-zoubida.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/studio-zoubida-logo-pink.svg'
            width={166}
            height={101}
            layout='responsive'
          />
        </ProjectLogo>
      </ProjectImage>
      <ProjectInfo>
        <Title>Studio Zoubida</Title>
        <ProjectSubHeader>The Shop</ProjectSubHeader>
        <Paragraph>
          At Studio Klein, we believe small business is the future.T hat’s why
          we are deeply commited to helping small business succeed in the
          e-commerce landscape that evolving at a breakneck speed.
        </Paragraph>
        <Paragraph>
          Studio Klein the agency commited to creating the most unique,
          beautiful and functional e-shops that will scale with your business.
          Our toolbox is full with all the things you need to succeed - whether
          you are just starting out or looking to grow your reach online.
        </Paragraph>
        <Image
          src='/images/studio-zoubida-image-1.png'
          width={627}
          height={745}
        />
        <ProjectSubHeader>The Brand</ProjectSubHeader>
        <Paragraph>
          At Studio Klein, we believe small business is the future.T hat’s why
          we are deeply commited to helping small business succeed in the
          e-commerce landscape that evolving at a breakneck speed.
        </Paragraph>
        <Paragraph>
          Studio Klein the agency commited to creating the most unique,
          beautiful and functional e-shops that will scale with your business.
          Our toolbox is full with all the things you need to succeed - whether
          you are just starting out or looking to grow your reach online.
        </Paragraph>
      </ProjectInfo>
    </ProjectContainer>
  );
};

export default Project;
