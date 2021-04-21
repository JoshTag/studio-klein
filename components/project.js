import { createRef, useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { projectAsideTransition } from "../utils/gsap";

const ProjectPageContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    flex-direction: row;
  }
`;

const ProjectAside = styled.div`
  display: none;
  overflow: hidden;
  height: 100vh;
  width: 350px;
  flex-shrink: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    display: block;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 400px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    width: 500px;
  }
`;

const AsideWrapper = styled.div``;

const TransitionAnimation = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: #292929;
  display: block;

  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    display: none;
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
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const ProjectLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  & > img {
    width: 300px;
  }

  /* @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    width: 175px;
  } */
`;

const MobileBanner = styled.div`
  position: relative;

  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    height: 300px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    display: none;
  }
`;

const ProjectInfoContainer = styled.div`
  /* margin: 4rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 4rem;
  } */
`;

const ProjectContent = styled.section`
  position: relative;
  margin: 4rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 4rem;
  }

  & > h2 {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    color: ${({ theme }) => theme.colours.grey};
    font-weight: 300;
    padding-bottom: 0.5rem;
  }

  & > h3 {
    margin-bottom: 1.5rem;
  }

  & > h4 {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    color: ${({ theme }) => theme.colours.grey};
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    margin-bottom: 2rem;
    display: inline-block;
  }

  .indent-left {
    margin-left: 2rem;
  }

  .video-container {
    max-width: 660px;
    margin: 3rem 0;
  }

  .pielander-menu {
    width: 80%;
  }

  &:not(:last-of-type):after {
    content: " ";
    position: absolute;
    bottom: -19px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colours.header};
  }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(-265px)}
`;

const ProjectURL = styled.a`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colours.grey};
  margin-bottom: 2rem;
  display: inline-block;
  text-decoration: none;
  height: 40px;
  overflow: hidden;
  text-decoration: none;

  &:after,
  :before {
    content: "";
    position: absolute;
    width: 265px;
    height: 10px;
    bottom: 0px;
    background: url(/images/link-underline-${({ underlineColor }) => underlineColor}.svg) no-repeat;
    animation: ${scroll} 6s linear infinite;
  }

  &:after {
    left: 0;
  }

  &:before {
    left: 265px;
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
  const projectAnimation = createRef(null);
  const projectOne = createRef(null);
  const asideOne = createRef(null);
  const projectTwo = createRef(null);
  const asideTwo = createRef(null);

  useEffect(() => {
    const animate = projectAnimation.current;
    const triggerOne = projectOne.current;
    const asideTriggerOne = asideOne.current;
    const triggerTwo = projectTwo.current;
    const asideTriggerTwo = asideTwo.current;

    projectAsideTransition(
      triggerOne,
      triggerTwo,
      "top",
      animate,
      asideTriggerOne,
      "pause reset play reset",
      "-500"
    );
    projectAsideTransition(
      triggerTwo,
      triggerTwo,
      "bottom",
      animate,
      asideTriggerTwo,
      "play reset play reset"
    );
  }, []);

  return (
    <ProjectPageContainer>
      <ProjectAside>
        <TransitionAnimation ref={projectAnimation} />
        <div className='aside-wrapper' ref={asideOne}>
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
        </div>
        <div className='aside-wrapper' ref={asideTwo}>
          <Background>
            <Image
              src='/images/projects/the-pielander/background.png'
              layout='fill'
              objectFit='cover'
            />
          </Background>
          <ProjectLogo>
            <img src='/images/projects/the-pielander/logo.svg' />
          </ProjectLogo>
        </div>
      </ProjectAside>
      <ProjectInfoContainer>
        <MobileBanner>
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
        </MobileBanner>
        <ProjectContent ref={projectOne} id='studiozoubida'>
          <h2>Studio Zoubida</h2>
          <ProjectURL
            href='https://www.studiozoubida.com'
            target='_blank'
            rel='noopener'
            underlineColor='pink'
          >
            www.studiozoubida.com
          </ProjectURL>
          <p>
            Studio Zoubida is owned by Rhekia Fahssi (they/them), a queer
            Toronto artist making one-of-a-kind decorative rug hangings. From
            subtle earth tones in organic shapes to vivid tufts in elegantly
            chaotic geometry - Studio Zoubida’s aesthetic is as eclectic as it
            is beautiful.
          </p>
          <Image
            src='/images/projects/studio-zoubida/mockup.png'
            width={660}
            height={435}
          />
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
            We set out to build a brand around Studio Zoubida that would match
            its light hearted spirit and work well with any of the varied styles
            that Studio Zoubida produces. Our main goal is always to highlight
            product - adding to the overall experience and never taking away
            from the art pieces.
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
            was key. We created two main sections, one for one-of-a-kind
            designs, and one for the Zoubida classics - pieces that can be
            remade, or made-to-order. We also highlighted the fact that
            customers can order their very own custom pieces.
          </p>
          <p>
            Studio Zoubida is a small-scale operation and we wanted the shop to
            reflect that. We did not build out colour and size options for every
            product because some products are truly one-of-a-kind, and we wanted
            to highlight that.{" "}
          </p>
        </ProjectContent>
        <MobileBanner>
          <Background>
            <Image
              src='/images/projects/the-pielander/background.png'
              layout='fill'
              objectFit='cover'
            />
          </Background>
          <ProjectLogo>
            <Image
              src='/images/projects/the-pielander/logo.svg'
              width={393}
              height={172}
            />
          </ProjectLogo>
        </MobileBanner>
        <ProjectContent ref={projectTwo} id='thepielander'>
          <h2>Pielander: Vegan Scottish Comfort Food</h2>
          <ProjectURL
            underlineColor='rust'
            href='https://the-pielander.myshopify.com/'
            target='_blank'
            rel='noopener'
          >
            www.thepielander.com
          </ProjectURL>
          <p>
            The Pielander is making delicious Scottish comfort foods such as
            pasties, pot pies, mac and cheese and don't forget the ‘broon sass’.
            They deliver the goodies in Toronto, Canada. Scottish import John
            started his business during the Covid-19 pandemic, and quickly
            realized that many Canadians shared his love of Scottish classics,
            made vegan.
          </p>
          <Image
            src='/images/projects/the-pielander/mockup.png'
            width={660}
            height={435}
          />
          <h4>The Shop</h4>
          <p>
            Pielander needed a simple ‘get-to-the-pie’ approach. We opted for a
            Shopify theme that would allow us to implement his menu in the most
            straightforward way possible, while still full of personality.
          </p>
          <h4 className='indent-left'>Delivery Zones</h4>
          <p className='indent-left'>
            Pielander does local delivery only, so we implemented Postal/Zip
            code based ordering.
          </p>
          <h4 className='indent-left'>Route-Making</h4>
          <p className='indent-left'>
            We implemented Route-Planning as the Pielander does his deliveries
            in-house. By using this app, we have made it so the most efficient
            route is planned out automatically according to delivery locations.
          </p>
          <h4>The Brand</h4>
          <p>
            We took the inspiration from Pielander's social media presence, and
            developed a full-fledged brand for Pielander.
          </p>
          <p>
            The colour choices reference vintagey hues reminescent of pies,
            paried with a flamboyant-but-functional font that just makes you
            feel like you’re in a Scottish pub! Again, this was made during a
            global pandemic so an online pub is as good as we’re going to get.
          </p>
          <p>
            Check out the menu below for an example of the branded assets we
            created for Pielander.
          </p>
          <img
            className='pielander-menu'
            src='/images/projects/the-pielander/menu.svg'
          />
        </ProjectContent>
      </ProjectInfoContainer>
    </ProjectPageContainer>
  );
};

export default Project;
