import styled from "styled-components";

const FooterContainer = styled.section`
  display: grid;
  place-items: center;
  height: 100px;
  background: ${({ theme }) => theme.colours.grey};
`;

const Copyright = styled.small`
  color: #fff;
  font-size: 16px;
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;

const Social = styled.a`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  width: 20px;
  height: 20px;
  margin: 0 auto;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const Footer = () => (
  <FooterContainer>
    <div>
      <Copyright>&copy; 2021, The Studio Klein</Copyright>
      <Social
        href='https://www.instagram.com/thestudioklein'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src="/images/instagram.svg"/>
      </Social>
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

  </FooterContainer>
);

export default Footer;
