import { createRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { serviceScrollAnimation } from "./../utils/gsap";
import { useRouter } from "next/router";


const ServiceContainer = styled.section`
  position: relative; // remove
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    flex-direction: column;
  }
`;

const MobileHeader = styled.div`
  background: ${({ theme }) => theme.colours.grey};
  height: 200px;
  background: #494947;
  display: grid;
  place-items: center;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    display: none;
  }

  & > h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    color: ${({ theme }) => theme.colours.primary};
    width: 300px;

    @media ${({ theme }) => theme.breakpoints.tabletSmall} {
      width: 500px;
    }
  }
`;

const ServiceAside = styled.aside`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    display: block;
    background: ${({ theme }) => theme.colours.grey};
    height: 300px;
    background: #231F20;
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

const AsideWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const AsideTitle = styled.h3`
  position: absolute;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.primary};
  /* font-weight: 300; */
  padding-bottom: 1rem;
  margin: 0 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    padding: 0;
    opacity: 0;
    margin: 0;
  }
`;

const SVGWrapper = styled.svg`
  width: 60%;
`;

const PathDraw = styled.path`
  stroke-dasharray: 1508;
  stroke-dashoffset: 1508;
  opacity: 0;
`;

const ServiceMain = styled.div``;

const ServiceContent = styled.div`
  margin: 4rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 4rem 0;
    padding: 4rem 0 0;
  }

  & > h3 {
    display: none;

    @media ${({ theme }) => theme.breakpoints.tabletLarge} {
      display: block;
      font-size: ${({ theme }) => theme.fontSize.xxLarge};
      margin-bottom: 1.5rem;
    }
  }

  & > h4 {
    font-size: ${({ theme }) => theme.fontSize.mediumLarge};
    margin-bottom: 1.5rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 27px;
    margin-bottom: 2rem;
    display: inline-block;
  }

  & > ul {
    margin: 0 0 2.5rem 4rem;

    & li > ul > li:first-of-type {
      margin-top: 1rem;
    }

    & > li > ul {
      margin-left: 2rem;
    }
  }

  & li {
    margin-bottom: 1rem;
  }

  .services__social-lottie {
    width: 250px;
  }

  .services__branding-lottie {
    width: 250px;
  }

  .services__seo-lottie {
    width: 250px;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      width: 370px;
    }
  }
`;

const Service = () => {
  const designContainer = createRef(null);
  const designPath = createRef(null);
  const designHeader = createRef(null);
  const developContainer = createRef(null);
  const developPath = createRef(null);
  const developHeader = createRef(null);
  const seoContainer = createRef(null);
  const seoPath = createRef(null);
  const seoHeader = createRef(null);
  const router = useRouter();
  const page = router.pathname;

  useEffect(() => {
    serviceScrollAnimation(
      designContainer.current,
      designPath.current,
      "170px",
      "center",
      designHeader.current
    );
    serviceScrollAnimation(
      developContainer.current,
      developPath.current,
      "center",
      "center",
      developHeader.current
    );
    serviceScrollAnimation(
      seoContainer.current,
      seoPath.current,
      "center",
      "bottom",
      seoHeader.current,
      "bottom+=170px"
    );
  }, []);

  return (
    <ServiceContainer>

      <div className="main__info-strip2 no-border-top-mobile background-beige-light"> 
          <h2 className='main__info-strip-text'>
          choose your tier
          </h2>
      </div>
      <div className='main__outer-packages-ctn'>
          <div className='main__inner-package-ctn no-border-right-mobile'>
            <div className='main__package-title-ctn-inner'>
              <div className='main__package-title-ctn'>
                <h2 className='main__package-title'>tier 1 // <br></br>anything-but-basic brand guide</h2>
              </div>
            </div>
          <ul className='main__package-list background-beige border-top-mobile'>
            <li className='main__package-list-item'>logo suite</li>
              <p className='main__package-list-item-description'>
              a full range of logos // 6-12 logo versions for all applications, 
              so it looks as good on web as it does on stationary
              </p>
            <li className='main__package-list-item'>colour palette, type pack, mood board</li>
              <p className='main__package-list-item-description'>
              the complete toolkit // 
              everything you need to make every element of your brand cohesive and beautiful
              </p>
            <li className='main__package-list-item'>brand pattern, textures and imagery</li>
              <p className='main__package-list-item-description'>
              would you recognize the Louis Vuitton pattern? yes, you would. 
              custom brand patterns and textures have major sticking 
              power when it comes to brand resonance. 
              </p>
          </ul>

          <Link href="/contact" className="services">
          <div className='main__package-title-ctn-inner'>
            <div className='main__package-title-ctn'>
              <h2 className='main__package-price jodaguz__small'>$800</h2>
            </div>
          </div>
          </Link>
          </div>

        <div className='main__inner-package-ctn no-border-right-mobile'>
            <div className='main__package-title-ctn-inner'>
              <div className='main__package-title-ctn background-beige'>
                <h2 className='main__package-title'>tier 2 // <br></br>design the site of your dreams</h2>
              </div>
            </div>
          <ul className='main__package-list border-top-mobile'>
            <li className='main__package-list-item margin-bottom-2'>all items from tier 1+</li>
            
            <li className='main__package-list-item'>web mockups</li>
              <p className='main__package-list-item-description'>
              you have your brand, now see it come to life. 
              I supply you with 10-20 web page mock-ups, that 
              perfectly encapsulate your new look. 
              </p>
            <li className='main__package-list-item'>web and social assets</li>
              <p className='main__package-list-item-description'>
              consistency across platforms is key.that’s why I
               supply icons, buttons, and social post templates of varying 
               dimensions, to suit your needs. 
              </p>
          </ul>

          <Link href="/contact" className="services">
          <div className='main__package-title-ctn-inner'>
            <div className='main__package-title-ctn'>
              <h2 className='main__package-price jodaguz__small'>$1200</h2>
            </div>
          </div>
          </Link>
        </div>
        <div className='main__inner-package-ctn background-radial-gradient-1'>
            <div className='main__package-title-ctn-inner background-beige-light'>
              <div className='main__package-title-ctn'>
                <h2 className='main__package-title'>tier 3 // <br></br>the full package</h2>
              </div>
            </div>
          <ul className='main__package-list border-top-mobile background-radial-gradient-1'>
            <li className='main__package-list-item'>all items from tier 2</li>
              <p className='main__package-list-item-description'>
              super amazing branding and full mockups
              </p>
            <li className='main__package-list-item'>website or e-commerce shop</li>
              <p className='main__package-list-item-description'>
              choose your platform - Shopify or Squarespace - based on your needs 
              </p>
            <li className='main__package-list-item'>website or e-commerce shop</li>
              <p className='main__package-list-item-description'>
              choose your platform - Shopify or Squarespace - based on your needs
              </p>

          </ul>
          <Link href="/contact" className="services">
          <div className='main__package-title-ctn-inner'>
            <div className='main__package-title-ctn'>
              <h2 className='main__package-price jodaguz__small'>$2500</h2>
            </div>
          </div>
          </Link>
        </div>
      </div>

      <h2 className='title-no-ctn'>a la carte pricing</h2>

              <div className="services__outer">

                <img
                className='main__info-strip-vector bounce4'
                src='/images/icon-money.svg'
                alt='click here to go to the contact page and book'
              />
                <div className="services__prices-ctn-outer">

                    <div className="services__prices-ctn-inner">

                      <ul className='services__list'>
                        <li className='services__list-item'>logo suite</li>
                        <li className='services__list-price'>300</li>
                      </ul>
                      <ul className='services__list'>
                        <li className='services__list-item'>colour palette, type pack, mood board</li>
                        <li className='services__list-price'>350</li>
                      </ul>
                      <ul className='services__list'>
                        <li className='services__list-item'>brand pattern, textures and imagery</li>
                        <li className='services__list-price'>350</li>
                      </ul>
                      <ul className='services__list'>
                        <li className='services__list-item'>web mockups</li>
                        <li className='services__list-price'>600</li>
                      </ul>
                      <ul className='services__list'>
                        <li className='services__list-item'>web and social assets</li>
                        <li className='services__list-price'>300</li>
                      </ul>
                      <ul className='services__list'>
                        <li className='services__list-item'>website or e-commerce shop</li>
                        <li className='services__list-price'>2000</li>
                      </ul>
                    </div>
                </div>
              <img
                className='main__info-strip-vector bounce4'
                src='/images/icon-money.svg'
                alt='click here to go to the contact page and book'
              />
</div>


      <div className="services__info-strip background-beige">

          <p className='main__info-strip-text'>
            Also available:
          </p>
          <p className='main__info-strip-text'>
            pitchdecks and presentations
          </p>
          <p className='main__info-strip-text'>
            3D design
          </p>
          <p className='main__info-strip-text'>
            animation for web
          </p>
          <p className='main__info-strip-text'>
            video editing
          </p>
          <p className='main__info-strip-text'>
            app design
          </p>

          <Link href="/contact">
                <img
                className='services__booknow-img bounce2'
                src='/images/booknow.svg'
                alt='click here to go to the contact page and book'
              />
           </Link>
      </div>

      <div className='main__project-ctn-outer background-super-light'>
      
            <div className='main__project-video-ctn'>
              <div className='main__project-video-ctn-inner'>
            {/* <p className='xlarge__judaguz-short'>"</p>
            <p className='main__testimonials-text'>I've worked with designers from Apple, but SK's work is better</p>
            <p className='xlarge__judaguz-short'>"</p> */}
            </div>
              <video className='main__project-video border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
                <source src="/images/projects/soap/comp-soap2.mp4" type="video/mp4"/>
              </video>

              <p className='main__testimonials-text-bold'>
             - Filip I.
              </p>
              <img
                  className='main__testimonial-logo'
                  src='/images/projects/soap/logo.svg'
                  alt='click here to go to the contact page and book'
                />
            </div>
            <div className='main__project-video-ctn'>
            <div className='main__project-video-ctn-inner'>
            {/* <p className='xlarge__judaguz-short'>"</p>
            <p className='main__testimonials-text'>huge boost in conversion rate</p>
            <p className='xlarge__judaguz-short'>"</p> */}
            </div>
              <video className='main__project-video border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
                <source src="/images/projects/livinggreen/computer-lgh2.mp4" type="video/mp4"/>
              </video>
              <p className='main__testimonials-text-bold'>
             - Becky T.
              </p>
              <img
                  className='main__testimonial-logo'
                  src='/images/projects/livinggreen/logo-dark-lgh2.svg'
                  alt='click here to go to the contact page and book'
                />
            </div>
            <div className='main__project-video-ctn'>
            <div className='main__project-video-ctn-inner'>
            {/* <p className='xlarge__judaguz-short'>"</p>
            <p className='main__testimonials-text'>felt SO confident launching my shop</p>
            <p className='xlarge__judaguz-short'>"</p> */}
            </div>
              <video className='main__project-video border-radius' loop muted webkit-playsinline playsInline autoplay="autoplay" id="bgvid">
                <source src="/images/projects/rainstick/computer-rainstick.mp4" type="video/mp4"/>
              </video>
              <p className='main__testimonials-text-bold'>
             - Chyna H.
              </p>
              <img
                  className='main__testimonial-logo2'
                  src='/images/projects/rainstick/logo.png'
                  alt='click here to go to the contact page and book'
                />
            </div>
      </div>

      <div className='main__questions-outer background-radial-gradient-4-light border-top'>
      <img
                className='main__info-strip-vector bounce4'
                src='/images/icon-questionmark.svg'
                alt='click here to go to the contact page and book'
              />

      <div className="main__info-strip-contact padding-bottom-3">
          <p className='xlarge__judaguz'>
           questions?
          </p>
          <p  className='margin-bottom-1'>Let's chat! Book a call with me and let's get started. <br></br> Or feel free to shoot me an email with any questions! 
          </p>
          <p className='margin-bottom-1'>
            contact me
          </p>
            <Link href="/contact" className="main__service-link">
            <img
                className='main__info-strip-arrow'
                src='/images/arrow1.svg'
                alt='click here to go to the contact page and book'
              ></img>
            </Link>
      </div>
      <img
                className='main__info-strip-vector bounce4'
                src='/images/icon-questionmark.svg'
                alt='click here to go to the contact page and book'
              />
 </div>





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
      

      {/* <ServiceAside> */}
        {/* <AsideWrapper>
          <AsideTitle ref={designHeader}>
            design and <br />
            development
          </AsideTitle>
          <AsideTitle ref={developHeader}>
            brand
            <br />
            creation
          </AsideTitle>
          <AsideTitle ref={seoHeader}>
            SEO and app
            <br />
            integration
          </AsideTitle>
          <SVGWrapper
            viewBox='0 0 500 500'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <PathDraw
              ref={designPath}
              d='M250.5 10.159C383.048 10.159 490.5 117.611 490.5 250.159C490.5 382.707 383.048 490.159 250.5 490.159C117.952 490.159 10.5 382.707 10.5 250.159C10.5 117.611 117.952 10.159 250.5 10.159Z'
              stroke='#F4F2EB'
              strokeWidth='20'
            />
            <PathDraw
              ref={developPath}
              d='M250.5 10.159C383.048 10.159 490.5 117.611 490.5 250.159C490.5 382.707 383.048 490.159 250.5 490.159C117.952 490.159 10.5 382.707 10.5 250.159C10.5 117.611 117.952 10.159 250.5 10.159Z'
              stroke='#F4F2EB'
              strokeWidth='20'
            />
            <PathDraw
              ref={seoPath}
              d='M250.5 10.159C383.048 10.159 490.5 117.611 490.5 250.159C490.5 382.707 383.048 490.159 250.5 490.159C117.952 490.159 10.5 382.707 10.5 250.159C10.5 117.611 117.952 10.159 250.5 10.159Z'
              stroke='#F4F2EB'
              strokeWidth='20'
            />
            <path
              d='M250.5 1.15899C388.019 1.15899 499.5 112.64 499.5 250.159C499.5 387.678 388.019 499.159 250.5 499.159C112.981 499.159 1.49999 387.678 1.49999 250.159C1.49999 112.64 112.981 1.15899 250.5 1.15899Z'
              stroke='#F4F2EB'
              strokeWidth='1'
            />
          </SVGWrapper>
        </AsideWrapper> */}
      {/* </ServiceAside> */}
      {/* <ServiceMain> */}
        {/* <MobileHeader> */}
          {/* // <h3>Package 1</h3> */}
        {/* </MobileHeader> */}
        {/* <ServiceContent ref={designContainer} id='fullycustomizableshops' className="service__ctn"> */}
          {/* <h3>Package 1</h3>
          <p>
            We offer comprehensive e-shop development. We understand the full
            spectrum of what is needed to succeed in e-commerce today, and in
            the future.
          </p>
          <p>
            A great brand combined with the most functional and customized
            features, fully integrated with social media, and a stack of content
            ready for you to publish. Studio Klein will make your business stand
            out from the crowd.
          </p> */}
          {/* <div className='services__branding-lottie'>
            <LottieData data={branding} />
          </div>
        </ServiceContent>
        <MobileHeader>
          <h3>Brand Creation</h3>
        </MobileHeader>
        <ServiceContent ref={developContainer} id='brandcreation' className="service__ctn">
          <h3 className="main__package-title">Brand Creation</h3>
          <p>
            If your e-commerce business needs a boost of brand power, Studio
            Klein delivers. We offer the total package - full brand creation,
            including assets. This means we supply:
          </p>
          <ul>
            <li>Logo</li>
            <li>Brand colours and fonts</li>
            <li>
              Graphics for Web and Social
              <ul>
                <li>Hero Images</li>
                <li>Product Photo Editing</li>
                <li>Animated Logos</li>
                <li>Videos, including animations</li>
                <li>
                  Extras like Menus, Size Guides, Delivery Maps, or anything you
                  need!
                </li>
              </ul>
            </li>
          </ul>
          <p>
            When we create a brand we don’t just design a logo. We also set you
            up for success, so your site and social media never get stale.
          </p>
          <p>
            We give you a stack of social media postings, videos and hero
            images, so you’re site stays fresh.
          </p>
        </ServiceContent>
        <MobileHeader>
          <h3>SEO and App Integration</h3>
        </MobileHeader>
        <ServiceContent ref={seoContainer} id='seoandappintegration'>
          <h3>SEO and App Integration</h3>
          <p>
            We provide integration for any Shopify app. Incorporate any Shopify
            app into your store. Including but not limited to:
          </p>
          <p className='margin-list'>Available for:</p>
          <ul>
            <li>MailChimp and other popular email marketing apps</li>
            <li>SEO optimization</li>
            <li>Incremental payment services like Afterpay</li>
            <li>Performance and financial reporting</li>
            <li>Marketing tools</li>
            <li>Specialized shipping and tracking features</li>
            <li>And endless other options!</li>
          </ul>
          {/* <div className='services__seo-lottie'>
            <LottieData data={seo} />
          </div> */}

          {/* <h3>Package 2</h3> */}
          {/* <div className='services__social-lottie'>
            <LottieData data={social} />
          </div> */}
          {/* <p>
            Look forward to seamless integration with social media platforms.
            Customers can buy directly from your socials, but the shop receives
            all orders as if they are ordering directly from your shop.
          </p> */}
          {/* <p className='margin-list'>Available for:</p> */}
          {/* <ul>
            <li>Instgram</li>
            <li>Facebook</li>
            <li>Any major social media platforms</li>
          </ul> */}
        {/* </ServiceContent> */}
      {/* </ServiceMain> */}
      <style jsx>
        {`
          .margin-list {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </ServiceContainer>
  );
};

export default Service;
