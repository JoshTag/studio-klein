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

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    width: 175px;
  }
`;

const ProjectInfo = styled.div`
  margin: 4rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 4rem;
  }

  & > h3 {
    margin-bottom: 1.5rem;
  }

  & > h4 {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    color: ${({ theme }) => theme.colours.secondary80};
    font-weight: normal;
    margin-bottom: 1rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    margin: 0.5rem 0;
    display: inline-block;
  }

  & > video {
    max-width: 660px;
    margin: 3rem 0;
  }
`;

const ProjectURL = styled.a`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.colours.secondary80};
  margin-bottom: 2rem;
  display: inline-block;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: -10px;
    left: 0;
    background: url(/images/projects/studio-zoubida/underline.svg) no-repeat;
  }
`;

const ImageWrapper = styled.div`
  margin: 3rem 0;
`;

const Project = () => {
  return (
    <ProjectContainer id='project-1'>
      <ProjectImage>
        <Background>
          <Image
            src='/images/projects/studio-zoubida/background.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/projects/studio-zoubida/logo-pink.svg'
            width={200}
            height={144}
          />
        </ProjectLogo>
      </ProjectImage>
      <ProjectInfo>
        <Title>Studio Zoubida</Title>
        <ProjectURL
          href='https://www.studiozoubida.com'
          target='_blank'
          rel='noopener'
        >
          www.studiozoubida.com
        </ProjectURL>
        <p>
          Studio Zoubida is owned by Rhekia Fahssi (they/them), a queer Toronto
          artist making one-of-a-kind decorative rug hangings. From subtle earth
          tones in organic shapes to vivid tufts in elegantly chaotic geometry -
          Studio Zoubida’s aesthetic is as eclectic as it is beautiful.
        </p>
        <p>
          The name Studio Zoubida comes from Rhekia’s grandmother in Morocco.
        </p>
        <ImageWrapper>
          <Image
            src='/images/projects/studio-zoubida/image-1.png'
            width={551}
            height={797}
          />
        </ImageWrapper>
        <h4>The Brand</h4>
        <p>
          We set up to build a brand around Studio Zoubida that would match its
          light hearted spirit and work well in any of the varied ways the brand
          presents its aesthetic. Our main goal is always to highlight product -
          adding to the overall experiencing and never taking away from the
          product.
        </p>
        <p>
          We used backgrounds of industrial textures like cement and concrete.
          This mimics the aesthetic in the product photos, and gives a neutral
          yet interesting backdrop for the shop.
        </p>
        <p>
          We used accent colours that spark joy in the owner, Rhekia. A light
          peachy pink and dark muted green can be used in variety of different
          scenarios, with light and dark backgrounds.
        </p>
        <video width='100%' loop autoPlay muted>
          <source
            src='/images/projects/studio-zoubida/zoubida-video.mp4'
            type='video/mp4'
          />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <p>
          Taking inspiration from 60s psychedelia lettering, we built the Studio
          Zoubida logo to be light-hearted, irreverent, and versatile. We
          created the logo in the Studio Zoubida signature colours - but of
          course we couldn’t help but make an animated version as well.
        </p>
        <ImageWrapper>
          <Image
            src='/images/projects/studio-zoubida/logo-pink.svg'
            width={200}
            height={140}
          />
          <Image
            src='/images/projects/studio-zoubida/logo-green.svg'
            width={200}
            height={140}
          />
        </ImageWrapper>
        <h4>The Shop</h4>
        <p>
          Because many of Rhekia’s pieces are truly one-of-kind, simplicity was
          key. We did not need to build out a lot of different options for
          products because some products are not available in different{" "}
        </p>
        <p>
          Studio Zoubida is a small-scale operation and we wanted the shop to
          reflect that. We did not build out colour and size options for every
          product because some products are truly one-of-a-kind, and we wanted
          to highlight that.{" "}
        </p>
      </ProjectInfo>
    </ProjectContainer>
  );
};

export default Project;
