import Layout from "components/layout";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";


const TestimonialsContainer = styled.div`
  margin: 2%;
  border: 2px solid #231f20;
  border-radius: 5px;
  padding: 0%;

   @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 3rem 3rem 7rem 3rem;
    display:flex;
  }
`;

const TestimonialItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:none;
  padding: 2rem;
  flex-direction:column-reverse;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction:row;
    border-bottom: 2px solid #231f20;
  }
`;

const TestimonialName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.colours.grey};
  font-weight: 600;
  width: auto;
  text-align: left;
  line-height: 30px;
`;

const TestimonialImg = styled.img`
  align-self:center;
  width:33%;
  padding:1rem;

 @media ${({ theme }) => theme.breakpoints.tablet} {
  width:70%;
  margin: 1rem 0;
  }
`;

const TestimonialContent = styled.div`
  text-align: center;
  line-height: 34px;
`;

const Testimonials = () => {
  const router = useRouter();
  const page = router.pathname;
  return (
    <Layout>
      <Head>
        <title>Studio Klein | Testimonials</title>
      </Head>


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

      <div className='main__testimonials-ctn-outer background-beige-light'>
      <h2 className='margin-bottom-2'>Studio Klein's mission</h2>
      <div className='main__testimonials-ctn'>
      <div className='main__testimonials-ctn-inner'>
      <img
                  className='main__testimonial-logo'
                  src='/images/icon-grow.svg'
                  alt='click here to go to the contact page and book'
                />
      <p className='main__testimonials-text-bold'>
        grow small business
      </p>
      <p className='main__testimonials-text'>
      my number one goal is to grow your business by creating a world-class brand and digital presence
      </p>

      </div>
      <div className='main__testimonials-ctn-inner'>
      <img
                  className='main__testimonial-logo'
                  src='/images/icon-money.svg'
                  alt='click here to go to the contact page and book'
                />
      <p className='main__testimonials-text-bold'>
      shop small
      </p>
      <p className='main__testimonials-text'>
      I redirect consumers to small businesses, like yours. I'll make 
      your shop as appealing and easy to use as the big guys! 
      </p>
      </div>
      <div className='main__testimonials-ctn-inner'>
      <img
                  className='main__testimonial-logo'
                  src='/images/icon-heart.svg'
                  alt='click here to go to the contact page and book'
                />
      <p className='main__testimonials-text-bold'>
      create community
      </p>
      <p className='main__testimonials-text'>
      let's create a community of small businesses that believes in empowering each other 
      through economic opportunities
      </p>
      </div>
    </div>
</div>
      <div className="main__tiktok-ctn">
        <video className='main__tiktok-video' loop muted controls webkit-playsinline playsinline autoplay="autoplay" id="bgvid">
            <source src="/images/tiktok-livinggreen.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' loop muted controls webkit-playsinline playsinline autoplay="autoplay" id="bgvid">
            <source src="/images/tiktok-thp2.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' loop muted controls webkit-playsinline playsinline autoplay="autoplay" id="bgvid">
            <source src="/images/tiktok-greenberry.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' loop muted controls webkit-playsinline playsinline autoplay="autoplay" id="bgvid">
            <source src="/images/tiktok-thp1.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' loop muted controls webkit-playsinline playsinline autoplay="autoplay" id="bgvid">
            <source src="/images/tiktok-heather.MOV" type="video/mp4"/>
        </video>
        <video className='main__tiktok-video' loop muted controls webkit-playsinline playsinline autoplay="autoplay" id="bgvid">
            <source src="/images/tiktok-prelim.mp4" type="video/mp4"/>
        </video>
      </div>


      <div className='main__follow-along-ctn background-beige border-bottom'>
        <Link href="https://www.tiktok.com/@thestudioklein?lang=en">
                <img
                className='about__follow-along-img bounce2'
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
    </Layout>
  );
};

export default Testimonials;
