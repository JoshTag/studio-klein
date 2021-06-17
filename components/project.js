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

  h4,
  h5 {
    font-size: 22px;
    color: ${({ theme }) => theme.colours.grey};
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    margin-bottom: 2rem;
    display: inline-block;
  }

  & img {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  .indent-left {
    margin-left: 1rem;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      margin-left: 2rem;
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

  .pree-logos:not(:nth-of-type(2)){
    margin-left: 2rem;
  }

  .pree-3d-logo {
    display: block;
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
          <h4>Project Deliverables</h4>
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
          <h4>The Shop</h4>
          <p>
            The owners were looking for innovative ways for customers to see new
            shop items. We brainstormed with their team and implemented “Picks
            of the Week” as well as “Shop the Look” features. These features
            allow the MOO team to switch up their site by highlighting the
            products they want to sell. They also encourage customers to
            purchase items as a pair or group.
          </p>
          <div className='moo-sections'>
            <div>
              <h4>Homepage</h4>
              <p>includes:</p>
              <p>Parallax Cow Print</p>
              <p>Picks of the Week</p>
              <img src='/images/projects/moo/mockup.png' />
            </div>
            <div>
              <h4>Theme Shopping Section</h4>
              <p>includes:</p>
              <p>Themed Collection</p>
              <p>Shop the Look</p>
              <img src='/images/projects/moo/mockup-section.png' />
            </div>
          </div>
          <h4>Social Media Asset Examples</h4>
          <img src='/images/projects/moo/moo-asset.png' />
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
        <ProjectContent>
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
          <img
            src='/images/projects/soap/mockup-1.png'
            alt='Operation Soap Mockup'
          />
          <img
            src='/images/projects/soap/mockup-2.png'
            alt='Operation Soap Mockup'
          />
          <h4>Merch</h4>
          <p>
            Studio Klein designed merch for SOAP using their slogan, “Nurture
            Your Nature”. This design draws from a 60’s era psychadelic asthetic
            and features a mushroom motif with a highly decorative font.
          </p>
          <img
            className='img--eight-tenths'
            src='/images/projects/soap/merch.png'
            alt='Nurture Your Nature t-shirts'
          />
          <h4>Extra Assets</h4>
          <p>
            Many extra assets were created for website and social to ensure the
            brand stays consistent and fresh across all platforms.
          </p>
          <img
            className='img--eight-tenths'
            src='/images/projects/soap/extra-assets.png'
            alt='SOAP Size Guide and instagram post'
          />
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
              src='/images/projects/pree/background.png'
              layout='fill'
              objectFit='cover'
              quality='100'
            />
          </Background>
          <ProjectLogo>
            <img src='/images/projects/pree/logo.svg' alt='Pree Logo' />
          </ProjectLogo>
        </AsideWrapper>
        <ProjectContent>
          <div className='header-container'>
            <h2>Pree Rehal: Artist and Educator</h2>
            <ProjectURL
              underlineColor='orange'
              href='https://prehal.com/'
              target='_blank'
              rel='noopener'
            >
              www.prehal.com
            </ProjectURL>
          </div>
          <h4>Project Deliverables</h4>
          <ul className='deliverables'>
            <li>Custom 2-part shop</li>
            <li>Shop Branding</li>
            <li>Newsletter Implementation</li>
            <li>Logo Design</li>
            <li>3D Rendering</li>
          </ul>
          <h4>The Shop</h4>
          <p>
            Pree Rehal (they/them) is a multidisciplinary artist and community
            organizer. The challenge was creating a website that separated the
            art shop from the community organizing/education while keeping a
            consistent feeling across both sides of the shop.
          </p>
          <p>
            That challenge led us to create a landing page that introduces a
            cohesive brand while splitting up the two sides of the sites. Once
            users have chosen a path, they can switch from either side of the
            site using the footer navigation.
          </p>
          <img src='/images/projects/pree/mockups.png' alt='Pree Mockups' />
          <h4>Brand Creation</h4>
          <p>
            As part of Pree’s new brand, we created a logo and colour palette
            which was utilized on the site.
          </p>
          <p>
            To create a logo that best represents Pree, we were inspired by
            common themes in their art as well as their playful use of colour. A
            mango-shaped wordmark with a touch of whimsy and smooth bubbly lines
            fit the bill.
          </p>
          <img
            className='pree-logos'
            src='/images/projects/pree/logo-1.svg'
            alt='prehal gradient logo'
          />
          <img
            className='pree-logos'
            src='/images/projects/pree/logo-2.svg'
            alt='prehal prehal orange logo'
          />
          <img
            className='pree-logos'
            src='/images/projects/pree/logo-3.svg'
            alt='prehal grey logo'
          />
          <h4>3D Rendering</h4>
          <p>
            Sometimes you just need to throw in a 3D logo rendering for fun.
          </p>
          <img
            src='/images/projects/pree/logo-3d.png'
            alt='Prehal 3D Logo'
            className='pree-3d-logo'
          />
        </ProjectContent>
      </ProjectWrapper>
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
      <ProjectWrapper id='thepielander'>
        <AsideWrapper>
          <Background bgOverlay={true}>
            <Image
              src='/images/projects/the-pielander/background.png'
              layout='fill'
              objectFit='cover'
              quality='100'
            />
          </Background>
          <ProjectLogo>
            <img
              src='/images/projects/the-pielander/logo.svg'
              alt='The Pielander Logo'
            />
          </ProjectLogo>
        </AsideWrapper>
        <ProjectContent>
          <div className='header-container'>
            <h2>The Pielander</h2>
            <ProjectURL
              underlineColor='rust'
              href='https://the-pielander.myshopify.com/'
              target='_blank'
              rel='noopener'
            >
              www.thepielander.com
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
          <p>
            The Pielander is making delicious Scottish comfort foods such as
            pasties, pot pies, mac and cheese and don't forget the ‘broon sass’.
            They deliver the goodies in Toronto, Canada. Scottish import John
            started his business during the Covid-19 pandemic, and quickly
            realized that many Canadians shared his love of Scottish classics,
            made vegan.
          </p>
          <img
            src='/images/projects/the-pielander/mockup.png'
            alt='The Pielander Mockups'
          />
          <h4>The Shop</h4>
          <p>
            Pielander needed a simple ‘get-to-the-pie’ approach. We opted for a
            Shopify theme that would allow us to implement his menu in the most
            straightforward way possible, while still full of personality.
          </p>
          <h5 className='indent-left'>Delivery Zones</h5>
          <p className='indent-left'>
            Pielander does local delivery only, so we implemented Postal/Zip
            code based ordering.
          </p>
          <h5 className='indent-left'>Route-Making</h5>
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
            className='img--eight-tenths'
            src='/images/projects/the-pielander/menu.svg'
            alt='Pielander Menu'
          />
        </ProjectContent>
      </ProjectWrapper>
    </ProjectPage>
  );
};

export default Project;
