import styled from "styled-components";
import Image from "next/image";
import SiteButton from "./Button";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectItem = styled.div`
  position: relative;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.bgColour};
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.mobileLarge} {
    height: 800px;
  }

  @media ${(props) => props.theme.breakpoints.tabletSmall} {
    height: 900px;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 600px;
    width: 100%;
    transition: 0.6s;

    &:hover {
      width: 400%;
    }
  }

  @media ${(props) => props.theme.breakpoints.desktopLarge} {
    height: 650px;
  }
`;

const LogoContainer = styled.div`
  width: 200px;
  margin-top: 20px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 145px;
  }
`;

const ProjectLogo = styled(Image)`
  z-index: 100;
  width: 100%;
`;

const ProjectBtn = styled(SiteButton)`
  width: 95%;
  text-align: center;
  z-index: 100;
  margin: auto 2.5% 40px;
  padding: 0.5rem;
`;

const ProjectImage = styled(Image)`
  z-index: 90;
  height: 100%;
  width: 100%;
  filter: saturate(70%);
  transition: 0.3s;

  &:hover {
    filter: saturate(100%);
  }
`;

const Projects = () => {
  return (
    <section>
      <h2 style={{ height: "120px", paddingTop: "60px", textAlign: "center" }}>
        Featured
      </h2>
      <ProjectsWrapper>
        <ProjectItem>
          <LogoContainer>
            <ProjectLogo src='/images/project-logo-1.png' layout="fill" />
          </LogoContainer>
          <ProjectBtn>view project</ProjectBtn>
          <ProjectImage src='/images/project-1.png' layout="fill"  />
        </ProjectItem>
        <ProjectItem>
          <LogoContainer>
            <ProjectLogo src='/images/project-logo-1.png' layout="fill" />
          </LogoContainer>
          <ProjectBtn>view project</ProjectBtn>
          <ProjectImage src='/images/project-1.png' layout="fill"  />
        </ProjectItem>
        <ProjectItem>
          <LogoContainer>
            <ProjectLogo src='/images/project-logo-1.png' layout="fill" />
          </LogoContainer>
          <ProjectBtn>view project</ProjectBtn>
          <ProjectImage src='/images/project-1.png' layout="fill" />
        </ProjectItem>
      </ProjectsWrapper>
    </section>
  );
};

export default Projects;
