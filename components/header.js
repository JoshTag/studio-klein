import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: none;
  border-right: 10px #C1C5E1 solid;
  border-left: 10px #C7D670 solid;
`
;

const Navigation = styled.nav`
  width: 100%;
  position: relative;


  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    padding-bottom: 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding-bottom: 0;
  }
`;


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const NAV_ITEMS = ["projects", "services", "logo", "testimonials", "contact"];
  const router = useRouter();
  const page = router.pathname;

  const handleMenuClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <HeaderContainer page={page}>
      <Navigation>



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
              <a className='header-links current services' page={page} route="/services">
                SERVICES
              </a>
            </Link>
            <Link href="/testimonials" className="testimonials">
              <a className='header-links current testimonials' page={page} route="/testimonials">
                ABOUT
              </a>
            </Link>
            <Link href="/contact" className="contact">
              <a className='header-links current contact' page={page} route="/contact">
                CONTACT
              </a>
            </Link>
            </div>
          </div>
          
        </div>
      </div>

      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
