import Head from 'next/head'
import Layout from "components/layout.js"
import { useRouter } from "next/router";
import Link from "next/link";
import LottieData from "components/lottie";
import shoe from "./../public/images/lottie-homepage-3.json";

export default function Home() {
  const router = useRouter();
  const page = router.pathname;
  return (
    <Layout>
      <Head>
        <title>Studio Klein</title>
      </Head>
      <div className='header-ctn'>
        <div className='header-ctn-inner'>

          <div className='header-ctn-btm'>
            
          </div>
          <div className='header-ctn-top'>
          <Link href="/">
              <a className='header-links-home' page={page} route="/">
              <img
            className='header-logo'
            src='/images/sk-logo.svg'
            alt='click here to go to the contact page and book'
          />
              </a>
            </Link>
            <div className='header-ctn-top-inner'>
            <Link href="/projects" className="projects">
              <a className='header-links current projects' page={page} route="/projects">
                PROJECTS
              </a>
            </Link>
            <Link href="/services" className="services">
              <a className='header-links services' page={page} route="/services">
                SERVICES
              </a>
            </Link>
            <Link href="/testimonials" className="testimonials">
              <a className='header-links testimonials' page={page} route="/testimonials">
                ABOUT
              </a>
            </Link>
            <Link href="/contact" className="contact">
              <a className='header-links contact' page={page} route="/contact">
                CONTACT
              </a>
            </Link>
            </div>
          </div>
          
        </div>
      </div>

      <div className='main__full-ctn'>

        <div className='main__lottie-ctn no-border-right-mobile background-radial-gradient-4-light'>
        <div className='lottie-shoe'>

        {/* <div className='lottie'> */}
          <LottieData data={shoe} />
        {/* </div>  */}
        </div>
        </div>
        <div className='main__info-ctn'>
          <div className='main__info-ctn-words'>
          <div className='main__info-ctn-words-inner'>
            <h1 className='main__h1'>custom websites and branding</h1>
            <h2 className='main__h2'> beautifully executed sites <u>on time and under budget</u></h2>
            <div>
              <div className="main__h3-ctn">
              <h3 className='main__h3'>websites for small businesses that 
                  understand the importance of unique and impactful digital presence.
                </h3>
                <h3  className='main__h3'>turnaround time in as little 1 week</h3>
                </div>
              </div>
            </div>

            <Link href="/contact">
                <img
                className='main__booknow-img bounce2'
                src='/images/booknow.svg'
                alt='click here to go to the contact page and book'
              />
           </Link>

          </div>
          <div className='main__info-ctn-inner border-bottom-mobile'>
              <div className='main__info-small background-beige'>
                <p className='main__points-txt'>I make e-shops too!</p>
              </div>
              <div className='main__info-small'>
                <p className='main__points-txt'>cool factor guaranteed</p>
              </div>
              <div className='main__info-small no-border-right background-radial-gradient-1'>
                <p className='main__points-txt'>user-experience focused</p>
              </div>
          </div>
        </div>
      </div>

      <div className="main__info-strip background-beige">
            <img
                className='main__info-strip-vector bounce3'
                src='/images/icon-heart.svg'
                alt='click here to go to the contact page and book'
              />
          <div className='main__info-inner'>
          <h2 className='main__info-strip-text margin-bottom-1'>
            <u>I build brands that stop them in their scroll</u>
          </h2> 
          <p className='main__info-strip-text'>
          Small business should not mean small impact. 
          Whether you’re looking for a brand, or high-converting 
          modern site or e-shop, I deliver scroll-stopping 
          impact that consumers won’t forget.
          </p>
          </div>
          <img
                className='main__info-strip-vector bounce4'
                src='/images/icon-heart.svg'
                alt='click here to go to the contact page and book'
              />
      </div>
      <h2 className='title-no-ctn background-super-light'>my clients love me...</h2>

      <div className='main__project-ctn-outer background-super-light'>
      
            <div className='main__project-video-ctn'>
              <div className='main__project-video-ctn-inner'>
            <p className='xlarge__judaguz-short'>"</p>
            <p className='main__testimonials-text'>I've worked with designers from Apple, but SK's work is better</p>
            <p className='xlarge__judaguz-short'>"</p>
            </div>
              <video className='main__project-video border-radius' playsinline autoplay="autoplay" muted loop id="bgvid">
                <source src="/images/projects/dreamawake/dreamawake-2.mp4" type="video/mp4"/>
              </video>
              <p className='main__testimonials-text-bold'>
             - Filip I.
              </p>
              <img
                  className='main__testimonial-logo'
                  src='/images/projects/dreamawake/logo3-DA.svg'
                  alt='click here to go to the contact page and book'
                />
            </div>
            <div className='main__project-video-ctn'>
            <div className='main__project-video-ctn-inner'>
            <p className='xlarge__judaguz-short'>"</p>
            <p className='main__testimonials-text'>huge boost in conversion rate</p>
            <p className='xlarge__judaguz-short'>"</p>
            </div>
              <video className='main__project-video border-radius' playsinline autoplay="autoplay" muted loop id="bgvid">
                <source src="/images/projects/moo/mooo.mp4" type="video/mp4"/>
              </video>
              <p className='main__testimonials-text-bold'>
             - Becky T.
              </p>
              <img
                  className='main__testimonial-logo'
                  src='/images/test-moo.svg'
                  alt='click here to go to the contact page and book'
                />
            </div>
            <div className='main__project-video-ctn'>
            <div className='main__project-video-ctn-inner'>
            <p className='xlarge__judaguz-short'>"</p>
            <p className='main__testimonials-text'>felt SO confident launching my shop</p>
            <p className='xlarge__judaguz-short'>"</p>
            </div>
              <video className='main__project-video border-radius' playsinline autoplay="autoplay" muted loop id="bgvid">
                <source src="/images/projects/roomme/comp-roomme.mp4" type="video/mp4"/>
              </video>
              <p className='main__testimonials-text-bold'>
             - Chyna H.
              </p>
              <img
                  className='main__testimonial-logo'
                  src='/images/projects/roomme/logo.svg'
                  alt='click here to go to the contact page and book'
                />
            </div>
      </div>

      <div className="main__info-strip2 background-beige-light"> 
          <h2 className='main__info-strip-text'>
          how it works
          </h2>
      </div>

      <div className="main__info-strip3"> 
      <div className="main__howitworks-icon-ctn">
      <img
                  className='main__number-logo'
                  src='/images/icon-n1.svg'
                  alt='click here to go to the contact page and book'
                />
      </div>
      <div className="main__howitworks-text-ctn background-beige">
          <h2 className='main__howitworks-heading'>
          let's chat
          </h2>
          <p className='main__howitworks-text'>
            Let’s hop on a call. 
            Tell me your vision, and I’ll get 
            to execution. Whether you’re starting 
            from scratch or need a refresh, I’ve 
            got you covered.
          </p>
      </div>
      </div>

      <div className="main__info-strip3"> 
      <div className="main__howitworks-text-ctn2">
          <h2 className='main__howitworks-heading2'>
          execute effectively
          </h2>
          <p className='main__howitworks-text2'>
          Establish a timeline and line of communication. 
          Through steady communications and set rounds of feedback, 
          I bring your project to life.
          </p>
      </div>
      <div className="main__howitworks-icon-ctn2 background-radial-gradient-1">
      <img
                  className='main__number-logo'
                  src='/images/icon-n2.svg'
                  alt='click here to go to the contact page and book'
                />
      </div>
      </div>

      <div className="main__info-strip3"> 
      <div className="main__howitworks-icon-ctn background-radial-gradient-1">
      <img
                  className='main__number-logo'
                  src='/images/icon-n3.svg'
                  alt='click here to go to the contact page and book'
                />
      </div>
      <div className="main__howitworks-text-ctn">
          <h2 className='main__howitworks-heading'>
          start reaping the benefits
          </h2>
          <p className='main__howitworks-text'>
          Get the keys to your site and/or all the files ready to use. 
          Reap the benefits of improved brand recognition and smooth-as-butter 
          user experience that is as high-converting as it is beautiful.
          </p>
      </div>
      </div>



      <div className="main__info-strip2 background-beige-light"> 
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
          <ul className='main__package-list background-beige'>
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

          <Link href="/services" className="services">
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
          <ul className='main__package-list'>
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

          <Link href="/services" className="services">
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
          <ul className='main__package-list background-radial-gradient-1'>
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
          <Link href="/services" className="services">
          <div className='main__package-title-ctn-inner'>
            <div className='main__package-title-ctn'>
              <h2 className='main__package-price jodaguz__small'>$2500</h2>
            </div>
          </div>
          </Link>
        </div>
      </div>

          <div className="main__info-strip background-radial-gradient-1 no-border-top-desktop">
            <img
                className='main__info-strip-vector bounce3'
                src='/images/icon-money.svg'
                alt='click here to go to the contact page and book'
              />
             <div className='main__info-strip-column-inner'>
          <h2 className='main__info-strip-title margin-bottom-1'>
            I work with your budget
          </h2>
          <p className='margin-bottom-1'>
            Check out my a la carte pricing
          </p>


            <Link href="/services" className="main__service-link">
            <img
                className='main__info-strip-arrow'
                src='/images/arrow1.svg'
                alt='click here to go to the contact page and book'
              ></img>
            </Link>

          </div> 
          <img
                className='main__info-strip-vector bounce4'
                src='/images/icon-money.svg'
                alt='click here to go to the contact page and book'
              ></img>
      </div>

{/* <div className='main__testimonials-ctn-outer background-beige-light'>
<h2 className='margin-bottom-2'>my clients love me..</h2>
    <div className='main__testimonials-ctn'>
      <div className='main__testimonials-ctn-inner'>
      <img
                  className='main__testimonial-logo'
                  src='/images/test-rainstick.svg'
                  alt='click here to go to the contact page and book'
                />
      <p className='main__testimonials-text'>
      continued to surpass our expectations... 
      would highly recommend working with Heather
      </p>
      <p className='main__testimonials-text-bold'>
     - Alisha M.
      </p>
      </div>
      <div className='main__testimonials-ctn-inner'>
      <img
                  className='main__testimonial-logo'
                  src='/images/test-moo.svg'
                  alt='click here to go to the contact page and book'
                />
      <p className='main__testimonials-text'>
        I saw a huge boost in sales after working with Heather
      </p>
      <p className='main__testimonials-text-bold'>
      - Becca T.
      </p>
      </div>
      <div className='main__testimonials-ctn-inner'>
      <img
                  className='main__testimonial-logo'
                  src='/images/test-pielander.svg'
                  alt='click here to go to the contact page and book'
                />
      <p className='main__testimonials-text'>
        She made it SO easy for me - which I desperately needed
      </p>
      <p className='main__testimonials-text-bold'>
      - John H.
      </p>
      </div>
    </div>
</div> */}

      <div className="main__tiktok-ctn">
        <video className='main__tiktok-video' playsinline autoplay="autoplay" muted loop id="bgvid">
            <source src="/images/tiktok-livinggreen.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' playsinline autoplay="autoplay" muted loop id="bgvid">
            <source src="/images/tiktok-thp2.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' playsinline autoplay="autoplay" muted loop id="bgvid">
            <source src="/images/tiktok-greenberry.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' playsinline autoplay="autoplay" muted loop id="bgvid">
            <source src="/images/tiktok-thp1.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' playsinline autoplay="autoplay" muted loop id="bgvid">
            <source src="/images/tiktok-heather.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' playsinline autoplay="autoplay" muted loop id="bgvid">
            <source src="/images/tiktok-prelim.mp4" type="video/mp4"/>
        </video>
      </div>

      <div className='main__follow-along-ctn background-beige'>
        <Link href="https://www.tiktok.com/@thestudioklein?lang=en">
                <img
                className='main__follow-along-img bounce2'
                src='/images/follow-along.svg'
                alt='click here to go to the contact page and book'
              />
          </Link>
          <Link href="https://www.instagram.com/_heidekraut/">
          <img
                className='main__info-strip-socials'
                src='/images/ig.svg'
                alt='click here to go to the contact page and book'
              />
          </Link>
          <Link href="https://www.tiktok.com/@thestudioklein?lang=en">
           <img
                className='main__info-strip-socials'
                src='/images/tiktok.svg'
                alt='click here to go to the contact page and book'
              />
            </Link>
      </div>


      <div className="main__info-strip-aboutme padding-bottom-3 background-beige">
        <div className="main__info-strip-aboutme-info">
          <h2 className='margin-bottom-2'>
          why me?
          </h2>
          <p  className="margin-bottom-1">
            From web design, mobile apps, video, animation - 
            I do it all, and I do it well.  I am also a developer, 
            so I have full control over the whole process - 
            from design to launch.
            </p>
            <p>
            My 10+ years experience spans from small business 
            to the aerospace industry. I am passionate about 
            redirecting consumer dollars away from the big guys. 
            I want to work with companies that value social and 
            environmental good.
          </p>
        </div>
          <div  className="main__info-strip-aboutme-img-ctn">
            <img
                className='main__aboutme-img'
                src='/images/heather.svg'
                alt='click here to go to the contact page and book'
              />
          </div>
      </div>

<div className='main__questions-outer background-radial-gradient-4-light'>
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
              <a className='main__footer-list-items' page={page} route="/projects">FAQ - coming soon</a>
             </Link>
             <Link href="/testimonials" className="testimonials">
              <a className='main__footer-list-items' page={page} route="/testimonials">about</a>
             </Link>
             <Link href="/projects" className="testimonials">
              <a className='main__footer-list-items' page={page} route="/projects">terms and conditions - coming soon</a>
             </Link>
            </div>
            </div>
      </div>

    </Layout>
  )
}
