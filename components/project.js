import { createRef, useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { projectAsideTransition } from "../utils/gsap";
import Link from "next/link";
import { useRouter } from "next/router";



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
  border-right:2px solid #201f23;

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
  margin: 1rem 0rem 0rem 0rem;
  border-bottom: 2px solid #201f23;

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
      padding: 0.75rem 1.25rem 0.75rem;
      margin: 0.25rem 0.25rem;
    }
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: 20px;
    color: ${({ theme }) => theme.colours.grey};
    font-weight: 300;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-size: 20px;
    color: ${({ theme }) => theme.colours.grey};
    font-weight: 600;
    margin-bottom: 1rem;
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
  #bgvid {
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
#deliverables-moo{
  background-color:#2B2D30;
}
#deliverables-rainstick{
  background-color:#fafafa;
}
#deliverables-soap{
  background-color:#63171C;
}
#deliverables-roomme{
  background-color:#2E2D2B;
}
#width100{
  width:100%!important;
  min-width: 100%;
  max-height: none;
  min-height: none;
}
  .project-ctn {
    display: flex;
    flex-direction: column;
  }
  .content-ctn-roomme {
    background: #E4E0D8;
    padding:2.5rem;
    margin-bottom: 2rem;
  }
  .content-ctn-livinggreenhomes {
    background: radial-gradient(90.94% 77.51% at 93.5% 18.11%, #5C8265 0%, rgba(35, 40, 36, 0.87) 100%);
    border:1px solid black;
    padding:2.5rem;
    margin-bottom: 2rem;
  }
  .lgh-type{
   color:#FAF9E6!important;
  }
  .content-ctn-moo {
    background-color: #D8E1EE;
    padding:2.5rem;
    margin-bottom: 2rem;
    border-radius:5px;
  }
  .content-ctn-dreamawake {
    background-color: #CBCD5B;
    padding:2.5rem;
    margin-bottom: 2rem;
    border-radius:5px;
  }
  .content-ctn-soap {
    background-color: #fff;
    border:5px solid #0F265E;
    padding:2.5rem;
    margin-bottom: 2rem;
    border-radius:5px;
  }
  .content-ctn-rainstick {
    background-color: #1F1F1D;
    padding:2.5rem;
    margin-bottom: 2rem;
    border-radius:5px;
  }
  .content-ctn-pielander {
    background-color: #722B0C;
    padding:2.5rem;
    margin-bottom: 2rem;
    border-radius:5px;
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
      padding: 0.75rem 1.25rem 0.75rem;
      margin: 0.25rem 0.25rem;
  }
  .colorwhite{
    color:#fafafa!important;
  }
  .colorblack{
    color:#1d1d1d!important;
  }
  .content-ctn-full {
    display:flex;
    margin-bottom:2rem;
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
  .double-img{
    border-radius:0px;
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
   .border-radius{
     border-radius: 5px;
   }
  @media screen and (max-width:900px){
    .img--computer{
      width: 100vw;
    }
  }
  .livinggreen-logo{
    width: 20px;
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
  color: ${({ theme }) => theme.colours.mooGrey};
  display: inline-block;
  text-decoration: none;
  height: 40px;
  overflow: hidden;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;

  &:after,
  :before {
    content: "";
    position: absolute;
    width: 265px;
    height: 10px;
    bottom: 0px;
    background: url(/images/link-underline-${({ underlineColor }) => underlineColor}.svg);
    background-repeat: no-repeat;
    animation: ${scroll} 11s linear infinite;
  }

  &:after {
    left: 0;
  }

  &:before {
    left: 252px;
  }
`;

const Project = () => {
  const router = useRouter();
  const page = router.pathname;
  return (
    <ProjectPage>




<MobileBanner>
        <Background>
          <Image
            src='/images/projects/moo/moo-background-mobile.png'
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
              underlineColor=''
              href='https://moo-vintage-thrift.myshopify.com/'
              target='_blank'
              rel='noopener'
            >
              www.moovintage.com
            </ProjectURL>
          </div>
          <h5>Project Deliverables</h5>
          <ul className='deliverables'>
            <li id="deliverables-moo">Custom Shop</li>
            <li id="deliverables-moo">Brand Creation</li>
            <li id="deliverables-moo">Product Photo Editing</li>
            <li id="deliverables-moo">Logo Design</li>
            <li id="deliverables-moo">3D Rendering</li>
          </ul>
          <p>
            The Moo shop was built from scratch on Shopify,
            following a light-hearted and irreverant aesthetic. 
            Coversion-increasing 'shop-the-look' and occasion-based 
            collections are key to this shop's success.
          </p>
          </div>
          <div className='content-label'><div className='label' id="deliverables-moo">Desktop</div></div>
         <div className='content-ctn-full'>
         <video className='border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
          <source src="/images/projects/moo/mooo.mp4" type="video/mp4"/>
        </video>
         </div>

         <div className='content-label'><div className='label' id="deliverables-moo">Graphics</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/moo/graphic-moo.png'
            alt='Moo Vintage homepage'
          />
         </div>
         <div className='content-label'><div className='label' id="deliverables-moo">Mobile</div></div>
         <div className='project-ctn-double'>
          <div className='project-ctn-double-imgctn'>
         <img
            className='double-img'
            src='/images/projects/moo/moo-double-1.png'
            alt='The Pielander Mockups'
          />
          </div>
          <div className='project-ctn-double-imgctn'>
          <img
            className='double-img'
            src='/images/projects/moo/moo-double-2.png'
            alt='The Pielander Mockups'
          />
         </div>
         </div>
         <div className='content-label'><div className='label' id="deliverables-moo">Styles</div></div>
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
            src='/images/projects/roomme/background-roomme-mobile.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/projects/roomme/logo.svg'
            width={393}
            height={172}
          />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='roomme'>
        <AsideWrapper>
          <Background>
            <Image
              src='/images/projects/roomme/roomme-background.png'
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
              underlineColor=''
              href='https://roomme.ca/'
              target='_blank'
              rel='noopener'
            >
              www.roomme.ca
            </ProjectURL>
          </div>
          <h5>Project Deliverables</h5>
          <ul className='deliverables'>
            <li id="deliverables-roomme">Full Site Design</li>
            <li id="deliverables-roomme">Brand Identity</li>
            <li id="deliverables-roomme">Custom Shopify User Flows</li>
            <li id="deliverables-roomme">Logo Design</li>
          </ul>
          {/* <h4>The Brief</h4> */}
          <p>
          Roomme takes innovative approach to furnishing short-term rental 
          income properties by offers all-inclusive custom packages. 
          Studio Klein created a custom Shopify 
          store including a custom package-creation flow where users 
          choose from a selection of items in each category to furnish their space.
          </p>
          </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Desktop</div></div>
         <div className='content-ctn-full'>
          <video className='border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
            <source src="/images/projects/roomme/comp-roomme.mp4" type="video/mp4"/>
          </video>
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Mobile</div></div>
         <div className='project-ctn-double'>
          <div className='project-ctn-double-imgctn'>
         <img
            className='double-img'
            src='/images/projects/roomme/roomme-double-1.png'
            alt='Roomme Mobile View'
          />
          </div>
          <div className='project-ctn-double-imgctn'>
          <img
            className='double-img'
            src='/images/projects/roomme/roomme-double-2.png'
            alt='Roomme standing lamp'
          />
         </div>
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Package Building User Flow</div></div>
         <div className='content-ctn-full'>
          <video className='border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
            <source src="/images/projects/roomme/package-building.mp4" type="video/mp4"/>
          </video>
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Styles</div></div>
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


{/* living green homes */}


      <MobileBanner>
        <Background>
          <Image
            src='/images/projects/livinggreen/mobile-background-lgh.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/projects/livinggreen/logo-4.svg'
            width={393}
            height={172}
          />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='roomme'>
        <AsideWrapper>
          <Background>
            <Image
              src='/images/projects/livinggreen/background-3.png'
              layout='fill'
              objectFit='cover'
              quality='100'
            />
          </Background>
          <ProjectLogo>
            <img src='/images/projects/livinggreen/logo-4.svg'
            alt='Living Green Homes Logo'
            // className='livinggreen-logo'
            />
          </ProjectLogo>
        </AsideWrapper>
        <ProjectContent>
          <div className='project-ctn'>
          <div className='content-ctn-livinggreenhomes'>
          <div className='header-container'>
            <h2 className='lgh-type'>Living Green Homes</h2>
            <ProjectURL
              underlineColor=''
              href='https://livinggreenhome.ca/'
              target='_blank'
              rel='noopener'
              className='lgh-type'
            >
              www.livinggreenhomes.com
            </ProjectURL>
          </div>
          <h5 className='lgh-type'>Project Deliverables</h5>
          <ul className='deliverables'>
            <li id="deliverables-roomme">Full Site Design</li>
            <li id="deliverables-roomme">Brand Identity</li>
            <li id="deliverables-roomme">Custom Package Making</li>
            <li id="deliverables-roomme">Logo Design</li>
          </ul>
          {/* <h4>The Brief</h4> */}
          <p className="lgh-type">
          Living Green homes are purveyors of a traditional Japanese building material, Shikkui.
          Studio Klein created their full custom brand and e-shop. 
          </p>
          </div>
          <div className='content-label'><div className='label' id='deliverables-roomme'>Custom e-shop</div></div>
         <div className='content-ctn-full'>
          <video className='border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
            <source src="/images/projects/livinggreen/computer-lgh2.mp4" type="video/mp4"/>
          </video>
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Colours, Patterns</div></div>
         <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/livinggreen/colourspatterns2.svg'
            alt='Roomme homepage'
          />
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Type</div></div>
         <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/livinggreen/fonts.svg'
            alt='Roomme homepage'
          />
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Logos</div></div>
         <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/livinggreen/logos.svg'
            alt='Roomme homepage'
          />
         </div>
          </div>
        </ProjectContent>
      </ProjectWrapper>


      {/* dream awake */}
      <MobileBanner>
        <Background>
          <Image
            src='/images/projects/dreamawake/mobile-dreamawake.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image src='/images/projects/dreamawake/logo2.svg' width={393} height={172} />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='moovintage'>
        <AsideWrapper>
          <Background>
            <Image
              src='/images/projects/dreamawake/background.png'
              layout='fill'
              objectFit='cover'
              quality='100'
              priority={true}
            />
          </Background>
          <ProjectLogo>
            <img src='/images/projects/dreamawake/logo2.svg' alt='Moo Vintage Logo' />
          </ProjectLogo>
        </AsideWrapper>
        <ProjectContent>
        <div className='project-ctn'>
        <div className='content-ctn-dreamawake'>
          <div className='header-container'>
            <h2>Dream Awake</h2>
            {/* <ProjectURL
              underlineColor='grey3'
              href='https://moo-vintage-thrift.myshopify.com/'
              target='_blank'
              rel='noopener'
            >
              www.moovintage.com
            </ProjectURL> */}
          </div>
          <h5>Project Deliverables</h5>
          <ul className='deliverables'>
            <li id="deliverables-moo">Brand Creation</li>
            <li id="deliverables-moo">Homepage Mockup</li>
            <li id="deliverables-moo">Logo Design</li>
          </ul>
          <p>
            Dream Awake is a company that is building AR technology on mobile. The owner was looking for an impactful brand
            that references the steampunk aesthetic.
          </p>
          </div>
          <div className='content-label'><div className='label' id="deliverables-moo">Desktop</div></div>
         <div className='content-ctn-full'>
         <video className='border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
          <source src="/images/projects/dreamawake/dreamawake.mp4" type="video/mp4"/>
        </video>
         </div>

         <div className='content-label'><div className='label' id="deliverables-moo">Colours</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/dreamawake/colours.png'
            alt='Moo Vintage homepage'
          />
         </div>
         <div className='content-label'><div className='label' id="deliverables-moo">Logos</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/dreamawake/logos.svg'
            alt='Moo Vintage homepage'
          />
         </div>
         <div className='content-label'><div className='label' id="deliverables-moo">Textures</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/dreamawake/textures.png'
            alt='Moo Vintage homepage'
          />
         </div>
          </div>
        </ProjectContent>
      </ProjectWrapper>


  
      <MobileBanner>
        <Background>
          <Image
            src='/images/projects/pielander/pielander-background-mobile.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/projects/pielander/logo-wordmark.png'
            width={384}
            height={120}
            id={'width100'}
          />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='thepielander'>
        <AsideWrapper>
          <Background bgOverlay={false}>
            <Image
              src='/images/projects/pielander/pielander-background.png'
              layout='fill'
              objectFit='cover'
              quality='100'
            />
          </Background>
          <ProjectLogo>
            <img
              src='/images/projects/pielander/logo-wordmark.png'
              alt='The Rainstick Logo'
            />
          </ProjectLogo>
        </AsideWrapper>
        <ProjectContent>
        <div className='project-ctn'>
        <div className='content-ctn-pielander'>
          <div className='header-container'>
            <h2 className="colorwhite">The Pielander</h2>
            <ProjectURL
              underlineColor=''
              href='https://rainstickshower.com/'
              target='_blank'
              rel='noopener'
            >
              
            </ProjectURL>
          </div>
          <h4 className="colorwhite">Project Deliverables</h4>
          <ul className='deliverables'>
            <li id="deliverables-rainstick" className="colorblack">Brand Design</li>
            <li id="deliverables-rainstick" className="colorblack">Brand Patterns</li>
            <li id="deliverables-rainstick" className="colorblack">Logo Design</li>

          </ul>
          <p className="colorwhite">
          The Pielander was looking for a fun and friendly brand to highlight their vegan pies. Studio Klein
          referenced 1950s Americana and surrealism to create this eye-catching, nostalgia-inducing brand.
          </p>
          </div>
          <div className='content-label'><div className='label' id="deliverables-moo">Brand Tone</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/pielander/tone.png'
            alt='Moo Vintage homepage'
          />
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Brand Patterns</div></div>
         <div className='project-ctn-double'>
          <div className='project-ctn-double-imgctn'>
         <img
            className='double-img'
            src='/images/projects/pielander/pattern-hands.png'
            alt='The rainstick shower'
          />
          </div>
          <div className='project-ctn-double-imgctn'>
          <img
            className='double-img'
            src='/images/projects/pielander/pattern-pies.png'
            alt='The rainstick mobile desktop'
          />
         </div>
         </div>

         <div className='content-label'><div className='label' id='deliverables-roomme'>Colours</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/pielander/colours-pie.png'
            alt='Rainstick homepage'
          />
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Branded Elements</div></div>
         <div className='project-ctn-double'>
          <div className='project-ctn-double-imgctn'>
         <img
            className='double-img'
            src='/images/projects/pielander/menu.png'
            alt='The rainstick shower'
          />
          </div>
          <div className='project-ctn-double-imgctn'>
          <img
            className='double-img'
            src='/images/projects/pielander/map.png'
            alt='The rainstick mobile desktop'
          />
         </div>
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Logos</div></div>
          <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/pielander/logos.png'
            alt='Rainstick homepage'
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
              underlineColor=''
              href='https://soap-shop.ca/'
              target='_blank'
              rel='noopener'
            >
              www.soap-shop.ca
            </ProjectURL>
          </div>
          <h4>Project Deliverables</h4>
          <ul className='deliverables'>
            <li id="deliverables-soap">Shop Set-up</li>
            <li id="deliverables-soap">Custom Shop Design</li>
            <li id="deliverables-soap">SEO</li>
            <li id="deliverables-soap">Merch Design</li>
            <li id="deliverables-soap">Web &amp; Social Media Assets</li>
          </ul>
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
          <video className='border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
            <source src="/images/projects/soap/comp-soap2.mp4" type="video/mp4"/>
          </video>
         </div>
         <div className='content-label'><div className='label'>T-Shirt Graphic</div></div>
         <div className='content-ctn-full'>
          <img
            className='img--computer'
            src='/images/projects/soap/shirt-graphic.png'
            alt='Soap homepage'
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
            src='/images/projects/rainstick/rainstick-background-mobile.png'
            layout='fill'
            objectFit='cover'
          />
        </Background>
        <ProjectLogo>
          <Image
            src='/images/projects/rainstick/logo.png'
            width={384}
            height={77}
            id={'width100'}
          />
        </ProjectLogo>
      </MobileBanner>
      <ProjectWrapper id='thepielander'>
        <AsideWrapper>
          <Background bgOverlay={false}>
            <Image
              src='/images/projects/rainstick/rainstick-background.png'
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
            <h2 className="colorwhite">RainStick</h2>
            <ProjectURL
              underlineColor=''
              href='https://rainstickshower.com/'
              target='_blank'
              rel='noopener'
            >
              www.rainstickshower.com``
            </ProjectURL>
          </div>
          <h4 className="colorwhite">Project Deliverables</h4>
          <ul className='deliverables'>
            <li id="deliverables-rainstick" className="colorblack">Custom Shop Design</li>
            <li id="deliverables-rainstick" className="colorblack">SEO &amp; Google Anayltics</li>
            <li id="deliverables-rainstick" className="colorblack">Custom Calculator</li>
            <li id="deliverables-rainstick" className="colorblack">Custom Blog Templates</li>
            <li id="deliverables-rainstick" className="colorblack">Mobile Application Design</li>

          </ul>
          <p className="colorwhite">
          Rainstick is making showers more environmentally friendly with their revolutionary technology. Studio Klein designed and 
          built a full custom shop on Shopify. Custom items such as a water use calculator were also created.
          </p>
          </div>
          <div className='content-label'><div className='label' id='deliverables-roomme'>Desktop</div></div>
          <div className='content-ctn-full'>
         <video className='border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
          <source src="/images/projects/rainstick/computer-rainstick.mp4" type="video/mp4"/>
        </video>
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Mobile</div></div>
         <div className='project-ctn-double'>
          <div className='project-ctn-double-imgctn'>
         <img
            className='double-img'
            src='/images/projects/rainstick/rainstick-double-1.jpg'
            alt='The rainstick shower'
          />
          </div>
          <div className='project-ctn-double-imgctn'>
          <img
            className='double-img'
            src='/images/projects/rainstick/rainstick-double-2.png'
            alt='The rainstick mobile desktop'
          />
         </div>
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Water Calculator</div></div>
         <div className='content-ctn-full'>
         <video className='border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
          <source src="/images/projects/rainstick/calculator.mp4" type="video/mp4"/>
        </video>
         </div>
         <div className='content-label'><div className='label' id='deliverables-roomme'>Mobile App</div></div>
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
      <div className="main__footer background-beige">
       <Link href="/">
              <a className='footer-links-home' page={page} route="/">
              <img
            className='main__footer-logo'
            src='/images/sk-logo.svg'
            alt='click here to go to the contact page and book'
          />
              </a>
        </Link>

            <div className="main__footer-inner">
            <div className="main__footer-list">
             <Link href="/projects" className="testimonials">
              <a className='main__footer-list-items' page={page} route="/projects">projects</a>
             </Link>
             <Link href="/services" className="services">
              <a className='main__footer-list-items' page={page} route="/projects">services</a>
             </Link>
             <Link href="/contact" className="contact">
              <a className='main__footer-list-items' page={page} route="/projects">contact</a>
             </Link>
            </div>
            <div  className="main__footer-list">
            <Link href="/projects" className="testimonials">
              <a className='main__footer-list-items' page={page} route="/projects">FAQ</a>
             </Link>
             <Link href="/testimonials" className="testimonials">
              <a className='main__footer-list-items' page={page} route="/testimonials">about</a>
             </Link>
             <Link href="/projects" className="testimonials">
              <a className='main__footer-list-items' page={page} route="/projects">terms and conditions</a>
             </Link>
            </div>
            </div>
      </div>
   
    </ProjectPage>
  );
};

export default Project;
