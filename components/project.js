import { createRef, useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { projectAsideTransition } from "../utils/gsap";

const ProjectPage = styled.section`
  display: flex;
  flex-direction: column;

  & > section:not(:last-of-type) > div:nth-child(2):after {
    content: " ";
    position: absolute;
    bottom: -4rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colours.header};
  }
`;

const AsideWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 350px;
  height: 100vh;
  top: 0;
  flex-shrink: 0;

  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    display: none;
  }
  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    width: 400px;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;

  &:before {
    visibility: ${({ bgOverlay }) =>
      bgOverlay === true ? "visible" : "hidden"};
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
  top: ${({ logoPosition }) => (logoPosition === "high" ? "15%" : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  & > img {
    width: 200px;
  }
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

const ProjectWrapper = styled.section`
  position: relative;
  margin: 4rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 4rem;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    margin: 0;
    display: flex;
    flex-direction: row;
  }
`;

const ProjectContent = styled.div`
  margin: 4rem;
  position: relative;
  @media screen and (max-width:600px){
    margin:1rem;
  }

  .header-container {
    margin-bottom: 2rem;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    & > h2 {
      font-size: ${({ theme }) => theme.fontSize.xLarge};
      color: ${({ theme }) => theme.colours.grey};
      font-weight: 600;
      margin-bottom: 1rem;

      @media ${({ theme }) => theme.breakpoints.tablet} {
        margin-bottom: 0;
      }
    }
  }

  .deliverables {
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    margin: 0 0 2rem -0.25rem;

    & > li {
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.colours.primary};
      background-color: ${({ theme }) => theme.colours.lightGrey};
      border-radius: 3px;
      padding: 0.75rem 1.25rem 0.5rem;
      margin: 0.25rem 0.25rem;
    }
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: 22px;
    color: ${({ theme }) => theme.colours.grey};
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  h5 {
    font-size: 22px;
    color: ${({ theme }) => theme.colours.grey};
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    display: inline-block;
  }

  & img {
    max-width: 100%;
  }

  .indent-left {
    margin-left: 1rem;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      margin-left: 2rem;
    }
  }

  .project-ctn {
    display: flex;
    flex-direction: column;
  }
  .content-ctn-roomme {
    background-color: #E4E0D8;
    padding:2.5rem;
    margin-bottom: 2rem;
  }
  .content-ctn-moo {
    background-color: #D8E1EE;
    padding:2.5rem;
    margin-bottom: 2rem;
  }
  .content-ctn-soap {
    background-color: #fff;
    border:5px solid #0F265E;
    padding:2.5rem;
    margin-bottom: 2rem;
  }
  .content-ctn-rainstick {
    background-color: #1F1F1D;
    padding:2.5rem;
    margin-bottom: 2rem;
  }
  .content-label{
    display:flex;
    margin-bottom:1rem;
  }
  .label {
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.colours.primary};
      background-color: ${({ theme }) => theme.colours.lightGrey};
      border-radius: 3px;
      padding: 0.75rem 1.25rem 0.5rem;
      margin: 0.25rem 0.25rem;
  }
  .content-ctn-full {
    display:flex;
  }
  .project-ctn-double {
    display:flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media screen and (max-width:900px){
    .project-ctn-double{
      flex-wrap: wrap;
    }
  }
  .project-ctn-double-imgctn {
    padding-right:1rem;
  }
  @media screen and (max-width:900px){
    .project-ctn-double-imgctn{
      padding-right:0rem;
    }
  }
  .video-container {
    max-width: 660px;
    margin: 3rem 0;
  }
  .img--eight-tenths {
    width: 80%;
    max-width: 450px;
    display: block;
  }
  .img--computer {
    width: 80vw;
    display: block;
  }
  @media screen and (max-width:900px){
    .img--computer{
      width: 100vw;
    }
  }
  .moo-sections {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      flex-direction: row;
      justify-content: space-evenly;
    }

    @media ${({ theme }) => theme.breakpoints.tabletLarge} {
      flex-direction: column;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      flex-direction: row;
    }

    & > div {
      display: flex;
      flex-direction: column;
      padding-bottom: 2rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        width: 250px;
      }

      @media ${({ theme }) => theme.breakpoints.desktopLarge} {
        width: 300px;
      }

      & h4 {
        font-weight: 400;
      }

      & p,
      h4 {
        text-align: center;
        margin-bottom: 5px;
      }

      & p:last-of-type {
        margin-bottom: 2rem;
      }

      & img {
        width: 300px;
        margin: 0 auto 2rem;
      }
    }
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
    background: url(/images/link-underline-${({ underlineColor }) => underlineColor}.svg);
    background-repeat: no-repeat;
    animation: ${scroll} 6s linear infinite;
  }

  &:after {
    left: 0;
  }

  &:before {
    left: 265px;
  }
`;

const Project = () => {
  return (
    <ProjectPage>
      <MobileBanner>
        <Background>
          <Image
            src='/images/projects/moo/background.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image src='/images/projects/moo/logo.svg' width={393} height={172} />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='moovintage'>
        <AsideWrapper>
          <Background>
            <Image
              src='/images/projects/moo/background.png'
              layout='fill'
              objectFit='cover'
              quality='100'
              priority={true}
            />
          </Background>
          <ProjectLogo>
            <img src='/images/projects/moo/logo.svg' alt='Moo Vintage Logo' />
          </ProjectLogo>
        </AsideWrapper>
        <ProjectContent>
        <div className='project-ctn'>
        <div className='content-ctn-moo'>
          <div className='header-container'>
            <h2>MOO: Vintage and Thrift</h2>
            <ProjectURL
              underlineColor='black'
              href='https://moo-vintage-thrift.myshopify.com/'
              target='_blank'
              rel='noopener'
            >
              www.moovintage.com
            </ProjectURL>
          </div>
          <h5>Project Deliverables</h5>
          <ul className='deliverables'>
            <li>Custom Shop</li>
            <li>Brand Creation</li>
            <li>Product Photo Editing</li>
            <li>Logo Design</li>
            <li>3D Rendering</li>
          </ul>
          <h4>The Brand</h4>
          <p>
            The owners of Moo are just starting their vintage journey and came
            to us for a full brand concept along with their shop. They wanted
            something light-hearted with a touch of humour, and an on-trend
            design aesthetic. That’s where the MOO brand started.
          </p>
          </div>
          <div className='content-label'><div className='label'>Desktop</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/moo/computer-moo.png'
            alt='Moo Vintage homepage'
          />
         </div>
         <div className='content-ctn-full'>
         

         <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
          <source src="polina.webm" type="video/webm"/>
          <source src="polina.mp4" type="video/mp4"/>
        </video>
         </div>

         <div className='content-label'><div className='label'>Graphics</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/moo/graphic-moo.png'
            alt='Moo Vintage homepage'
          />
         </div>
         <div className='content-label'><div className='label'>Mobile</div></div>
         <div className='project-ctn-double'>
          <div className='project-ctn-double-imgctn'>
         <img
            src='/images/projects/moo/moo-double-1.png'
            alt='The Pielander Mockups'
          />
          </div>
          <div className='project-ctn-double-imgctn'>
          <img
            src='/images/projects/moo/moo-double-2.png'
            alt='The Pielander Mockups'
          />
         </div>
         </div>
         <div className='content-label'><div className='label'>Styles</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/moo/styles-moo.svg'
            alt='Moo Vintage homepage'
          />
         </div>
          </div>
        </ProjectContent>
      </ProjectWrapper>
      <MobileBanner>
        <Background>
          <Image
            src='/images/projects/soap/background.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/projects/soap/logo.svg'
            width={393}
            height={172}
          />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='operationsoap'>
        <AsideWrapper>
          <Background>
            <Image
              src='/images/projects/soap/background.png'
              layout='fill'
              objectFit='cover'
              quality='100'
            />
          </Background>
          <ProjectLogo logoPosition='high'>
            <img
              src='/images/projects/soap/logo.svg'
              alt='Operation Soap Logo'
            />
          </ProjectLogo>
        </AsideWrapper>
        < ProjectContent>
        <div className='project-ctn'>
        <div className='content-ctn-soap'>
          <div className='header-container'>
            <h2>Operation SOAP</h2>
            <ProjectURL
              underlineColor='blue'
              href='https://soap-shop.ca/'
              target='_blank'
              rel='noopener'
            >
              www.soap-shop.ca
            </ProjectURL>
          </div>
          <h4>Project Deliverables</h4>
          <ul className='deliverables'>
            <li>Shop Set-up</li>
            <li>Custom Shop Design</li>
            <li>SEO</li>
            <li>Merch Design</li>
            <li>Web &amp; Social Media Assets</li>
          </ul>
          <h4>The Shop</h4>
          <p>
            SOAP shop creates premium garments, designed and printed in Toronto,
            Canada. SOAP is short for 'Operation Soap', the metro Toronto
            police's code name for the 1981 Toronto bathhouse raids. Studio
            Klein set out to build a site that celebrates the bold spirit of the
            brand.
          </p>
          </div>
          <div className='content-label'><div className='label'>Desktop</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/soap/computer-soap.png'
            alt='Roomme homepage'
          />
         </div>
         <div className='content-label'><div className='label'>T-Shirt Graphic</div></div>
         <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/soap/shirt-graphic.png'
            alt='Roomme homepage'
          />
         </div>
         <div className='content-label'><div className='label'>Styles</div></div>
         <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/soap/styles-soap.svg'
            alt='Roomme homepage'
          />
         </div>
        </div>
        </ProjectContent>
      </ProjectWrapper>
      <MobileBanner>
        <Background>
          <Image
            src='/images/projects/pree/background.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/projects/pree/logo.svg'
            width={393}
            height={172}
          />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='pree'>
        <AsideWrapper>
          <Background>
            <Image
              src='/images/projects/roomme/background.png'
              layout='fill'
              objectFit='cover'
              quality='100'
            />
          </Background>
          <ProjectLogo>
            <img src='/images/projects/roomme/logo.svg' alt='Roomme Logo' />
          </ProjectLogo>
        </AsideWrapper>
        <ProjectContent>
          <div className='project-ctn'>
          <div className='content-ctn-roomme'>
          <div className='header-container'>
            <h2>Roomme</h2>
            <ProjectURL
              underlineColor='black'
              href='https://prehal.com/'
              target='_blank'
              rel='noopener'
            >
              www.roomme.ca
            </ProjectURL>
          </div>
          <h5>Project Deliverables</h5>
          <ul className='deliverables'>
            <li>Brand Identity</li>
            <li>Full Site Design</li>
            <li>Custom Package Making</li>
            <li>Logo Design</li>
            <li>3D Rendering</li>
          </ul>
          <h4>The Brief</h4>
          <p>
          Roomme is taking an innovative approach to short-term rental properties by offers all-inclusive custom packages and delivery. 
          </p>
          </div>
         <div className='content-label'><div className='label'>Desktop</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/roomme/computer-roomme.png'
            alt='Roomme homepage'
          />
         </div>
         <div className='content-label'><div className='label'>Mobile</div></div>
         <div className='project-ctn-double'>
          <div className='project-ctn-double-imgctn'>
         <img
            src='/images/projects/roomme/roomme-double-1.png'
            alt='The Pielander Mockups'
          />
          </div>
          <div className='project-ctn-double-imgctn'>
          <img
            src='/images/projects/roomme/roomme-double-2.png'
            alt='The Pielander Mockups'
          />
         </div>
         </div>
         <div className='content-label'><div className='label'>User Flow</div></div>
         <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/roomme/userflow.png'
            alt='Roomme homepage'
          />
         </div>
         <div className='content-label'><div className='label'>Styles</div></div>
         <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/roomme/roomme-styles.svg'
            alt='Roomme homepage'
          />
         </div>
          </div>
        </ProjectContent>
      </ProjectWrapper>
      <MobileBanner>
        <Background>
          <Image
            src='/images/projects/rainstick/logo.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/projects/rainstick/logo.png'
            width={393}
            height={172}
          />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='thepielander'>
        <AsideWrapper>
          <Background bgOverlay={false}>
            <Image
              src='/images/projects/rainstick/background.svg'
              layout='fill'
              objectFit='cover'
              quality='100'
            />
          </Background>
          <ProjectLogo>
            <img
              src='/images/projects/rainstick/logo.png'
              alt='The Rainstick Logo'
            />
          </ProjectLogo>
        </AsideWrapper>
        <ProjectContent>
        <div className='project-ctn'>
        <div className='content-ctn-rainstick'>
          <div className='header-container'>
            <h2>RainStick</h2>
            <ProjectURL
              underlineColor='white'
              href='https://the-pielander.myshopify.com/'
              target='_blank'
              rel='noopener'
            >
              www.rainstick.ca
            </ProjectURL>
          </div>
          <h4>Project Deliverables</h4>
          <ul className='deliverables'>
            <li>Shop Set-up</li>
            <li>Custom Shop Design</li>
            <li>Video Creation</li>
            <li>SEO</li>
            <li>Logos and Brand Guide</li>
            <li>Product Photo Editing</li>
            <li>Social Media Assets</li>
            <li>Delivery Restrictions</li>
          </ul>
          </div>
          <div className='content-label'><div className='label'>Desktop</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/rainstick/computer-rainstick.png'
            alt='Rainstick homepage'
          />
         </div>
         <div className='content-label'><div className='label'>Mobile</div></div>
         <div className='project-ctn-double'>
          <div className='project-ctn-double-imgctn'>
         <img
            src='/images/projects/rainstick/rainstick-double-1.jpg'
            alt='The rainstick shower'
          />
          </div>
          <div className='project-ctn-double-imgctn'>
          <img
            src='/images/projects/rainstick/rainstick-double-2.png'
            alt='The rainstick mobile desktop'
          />
         </div>
         </div>
         <div className='content-label'><div className='label'>Water Calculator</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/rainstick/water-calculator.png'
            alt='Rainstick homepage'
          />
         </div>
         <div className='content-label'><div className='label'>Mobile App</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/rainstick/mobile-app.png'
            alt='Rainstick homepage'
          />
         </div>
          </div>
        </ProjectContent>
      </ProjectWrapper>
    </ProjectPage>
  );
};

export default Project;
