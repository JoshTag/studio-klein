import { createRef, useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ProjectWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    flex-direction: row;
  }
`;

const ProjectAside = styled.div`
  position: relative;

  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    height: 300px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    overflow: hidden;
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

const TransitionAnimation = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: #292929;
  /* transform: translateY(100vh); */

  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    display: none;
  }
`

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

const ProjectInfoContainer = styled.div`
  margin: 4rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 4rem;
  }
`;

const ProjectContent = styled.section`
  & > h2 {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    color: ${({ theme }) => theme.colours.grey};
    font-weight: normal;
    padding-bottom: 0.5rem;
  }

  & > h3 {
    margin-bottom: 1.5rem;
  }

  & > h4 {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    color: ${({ theme }) => theme.colours.grey};
    font-weight: normal;
    margin-bottom: 1.5rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    margin-bottom: 2rem;
    display: inline-block;
  }

  .video-container {
    max-width: 660px;
    margin: 3rem 0;
  }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(-260px)}
`;

const ProjectURL = styled.div`
  & > a {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colours.grey};
    margin-bottom: 2rem;
    display: inline-block;
    text-decoration: none;
    height: 40px;
    width: 206px;
    overflow: hidden;
    text-decoration: none;

    &:after,
    :before {
      content: "";
      position: absolute;
      width: 260px;
      height: 10px;
      bottom: 0px;
      background: url(/images/link-underline-pink.svg) no-repeat;
      animation: ${scroll} 15s linear infinite;
    }

    &:after {
      left: 0;
    }

    &:before {
      right: -313px;
    }
  }
`;

const ImageWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: row;

  & > div:last-child {
    margin-left: 2rem;
  }
`;

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projectAnimation = createRef(null);
  const projectOne = createRef(null);

  useEffect(() => {
    const animate = projectAnimation.current;
    const triggerOne = projectOne.current;

    const animateTransition = (triggerRef, animation) => {
      gsap.fromTo(
        animation,
        {
          transform: "translateY(100vh)",
        },
        {
          transform: "translateY(-100vh)",
          duration: 1.2,
          scrollTrigger: {
            trigger: triggerRef,
            toggleActions: "restart restart restart restart",
            start: `top center`,
            end: `bottom center`,
            markers: true
          },
        }
      )
    }

    animateTransition(triggerOne, animate)

  }, [])

  return (
    <ProjectWrapper>
      <ProjectAside>
        <TransitionAnimation ref={projectAnimation} />
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
      </ProjectAside>
      <ProjectInfoContainer>
        <ProjectContent>
          <h2>Studio Zoubida</h2>
          <ProjectURL>
            <a
              href='https://www.studiozoubida.com'
              target='_blank'
              rel='noopener'
            >
              www.studiozoubida.com
            </a>
          </ProjectURL>
          <p>
            Studio Zoubida is owned by Rhekia Fahssi (they/them), a queer
            Toronto artist making one-of-a-kind decorative rug hangings. From
            subtle earth tones in organic shapes to vivid tufts in elegantly
            chaotic geometry - Studio Zoubida’s aesthetic is as eclectic as it
            is beautiful.
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
            We set up to build a brand around Studio Zoubida that would match
            its light hearted spirit and work well in any of the varied ways the
            brand presents its aesthetic. Our main goal is always to highlight
            product - adding to the overall experiencing and never taking away
            from the product.
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
          <div className='video-container'>
            <video width='100%' loop autoPlay muted>
              <source
                src='/images/projects/studio-zoubida/product-video.mp4'
                type='video/mp4'
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <p>
            Taking inspiration from 60s psychedelia lettering, we built the
            Studio Zoubida logo to be light-hearted, irreverent, and versatile.
            We created the logo in the Studio Zoubida signature colours - but of
            course we couldn’t help but make an animated version as well.
          </p>
          <ImageWrapper>
            <div>
              <Image
                src='/images/projects/studio-zoubida/logo-pink.svg'
                width={200}
                height={140}
              />
            </div>
            <div>
              <Image
                src='/images/projects/studio-zoubida/logo-green.svg'
                width={200}
                height={140}
              />
            </div>
          </ImageWrapper>
          <h4>The Shop</h4>
          <p>
            Because many of Rhekia’s pieces are truly one-of-kind, simplicity
            was key. We did not need to build out a lot of different options for
            products because some products are not available in different{" "}
          </p>
          <p>
            Studio Zoubida is a small-scale operation and we wanted the shop to
            reflect that. We did not build out colour and size options for every
            product because some products are truly one-of-a-kind, and we wanted
            to highlight that.{" "}
          </p>
        </ProjectContent>
        <ProjectContent ref={projectOne} >
          <h2>Studio Zoubida</h2>
          <ProjectURL>
            <a
              href='https://www.studiozoubida.com'
              target='_blank'
              rel='noopener'
            >
              www.studiozoubida.com
            </a>
          </ProjectURL>
          <p>
            Studio Zoubida is owned by Rhekia Fahssi (they/them), a queer
            Toronto artist making one-of-a-kind decorative rug hangings. From
            subtle earth tones in organic shapes to vivid tufts in elegantly
            chaotic geometry - Studio Zoubida’s aesthetic is as eclectic as it
            is beautiful.
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
            We set up to build a brand around Studio Zoubida that would match
            its light hearted spirit and work well in any of the varied ways the
            brand presents its aesthetic. Our main goal is always to highlight
            product - adding to the overall experiencing and never taking away
            from the product.
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
          <div className='video-container'>
            <video width='100%' loop autoPlay muted>
              <source
                src='/images/projects/studio-zoubida/product-video.mp4'
                type='video/mp4'
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <p>
            Taking inspiration from 60s psychedelia lettering, we built the
            Studio Zoubida logo to be light-hearted, irreverent, and versatile.
            We created the logo in the Studio Zoubida signature colours - but of
            course we couldn’t help but make an animated version as well.
          </p>
          <ImageWrapper>
            <div>
              <Image
                src='/images/projects/studio-zoubida/logo-pink.svg'
                width={200}
                height={140}
              />
            </div>
            <div>
              <Image
                src='/images/projects/studio-zoubida/logo-green.svg'
                width={200}
                height={140}
              />
            </div>
          </ImageWrapper>
          <h4>The Shop</h4>
          <p>
            Because many of Rhekia’s pieces are truly one-of-kind, simplicity
            was key. We did not need to build out a lot of different options for
            products because some products are not available in different{" "}
          </p>
          <p>
            Studio Zoubida is a small-scale operation and we wanted the shop to
            reflect that. We did not build out colour and size options for every
            product because some products are truly one-of-a-kind, and we wanted
            to highlight that.{" "}
          </p>
        </ProjectContent>
        <ProjectContent>
          <h2>Studio Zoubida</h2>
          <ProjectURL>
            <a
              href='https://www.studiozoubida.com'
              target='_blank'
              rel='noopener'
            >
              www.studiozoubida.com
            </a>
          </ProjectURL>
          <p>
            Studio Zoubida is owned by Rhekia Fahssi (they/them), a queer
            Toronto artist making one-of-a-kind decorative rug hangings. From
            subtle earth tones in organic shapes to vivid tufts in elegantly
            chaotic geometry - Studio Zoubida’s aesthetic is as eclectic as it
            is beautiful.
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
            We set up to build a brand around Studio Zoubida that would match
            its light hearted spirit and work well in any of the varied ways the
            brand presents its aesthetic. Our main goal is always to highlight
            product - adding to the overall experiencing and never taking away
            from the product.
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
          <div className='video-container'>
            <video width='100%' loop autoPlay muted>
              <source
                src='/images/projects/studio-zoubida/product-video.mp4'
                type='video/mp4'
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <p>
            Taking inspiration from 60s psychedelia lettering, we built the
            Studio Zoubida logo to be light-hearted, irreverent, and versatile.
            We created the logo in the Studio Zoubida signature colours - but of
            course we couldn’t help but make an animated version as well.
          </p>
          <ImageWrapper>
            <div>
              <Image
                src='/images/projects/studio-zoubida/logo-pink.svg'
                width={200}
                height={140}
              />
            </div>
            <div>
              <Image
                src='/images/projects/studio-zoubida/logo-green.svg'
                width={200}
                height={140}
              />
            </div>
          </ImageWrapper>
          <h4>The Shop</h4>
          <p>
            Because many of Rhekia’s pieces are truly one-of-kind, simplicity
            was key. We did not need to build out a lot of different options for
            products because some products are not available in different{" "}
          </p>
          <p>
            Studio Zoubida is a small-scale operation and we wanted the shop to
            reflect that. We did not build out colour and size options for every
            product because some products are truly one-of-a-kind, and we wanted
            to highlight that.{" "}
          </p>
        </ProjectContent>
      </ProjectInfoContainer>
    </ProjectWrapper>
  );
};

export default Project;
