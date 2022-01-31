import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  border-bottom:2px solid #231f20;
  padding: 1rem 0 0;
  background-color: ${({ page }) =>
    page === "/" ? "transparent" : ({ theme }) => theme.colours.header};
`;

const Navigation = styled.nav`
  width: 100%;
  position: relative;
  padding-bottom: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    padding-bottom: 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 35px;
    height: 80px;
    padding-bottom: 0;
  }
`;

const NavMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

const NavListMobile = styled.ul`
  list-style: none;
  margin: 20px 0 0;
  background: ${({ page }) =>
    page !== "/" ? "transparent" : ({ theme }) => theme.colours.header};
  display: block;
  overflow: hidden;
  height: ${(props) => (props.showMenu ? "200px" : "0px")};
  transition: 0.3s ease-in-out;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }

  & > li {
    margin: 20px 0 20px 10%;
  }

  & li > a {
    color: ${({ theme }) => theme.colours.mooGrey};
    font-size: 14pt;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;

const NavList = styled.ul`
  display: none;
  list-style: none;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10%;
    height: 100%;
    max-width: 1000px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    margin: 0 auto;
  }

  & > li {
    width: 125px;
    text-align: center;
    line-height: 50px;

    &:nth-child(3) {
      width: 200px;

      & > a {
        height: 80px;
        display: inline-block;
      }
    }
  }
`;

const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ page }) =>
    page === "/"
      ? ({ theme }) => theme.colours.mooGrey
      : ({ theme }) => theme.colours.mooGrey};
  text-transform: capitalize;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  font-family: ${({ theme }) => theme.fonts.mooGrey};

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    &:before,
    :after {
      content: "";
      position: absolute;
      width: ${({ page, route }) =>
        page.substring(1) === route ? "100%" : "0"};
      height: 1px;
      top: 100%;
      background: ${({ page }) =>
        page === "/"
          ? ({ theme }) => theme.colours.grey
          : ({ theme }) => theme.colours.primary};
    }

    &:after {
      right: 0;
      -webkit-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      -moz-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      -o-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    }

    &:hover:after {
      background: transparent;
      width: 100%;
    }

    &:hover:before {
      width: 100%;
      left: 0;
      -webkit-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      -moz-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      -o-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    }
  }
`;

const Hamurger = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  width: 33px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  position: relative;
  z-index: 1000;
  width: 150px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 160px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 45px;;
  }
`;

const HeaderLink = styled.a`
    position: relative;
    padding: .8rem;
    padding-bottom:1.2rem;
    text-decoration: none;
    color: inherit;
    width: 150px;
    text-align: center;
    border-radius: 3px;
    transition: 0.3s;
    font-size: 14pt;
    font-weight: 800;
    letter-spacing: 0.5px;

    &:before {
      position: absolute;
      content: '';
      height: 100%;
      top: 0;
      left: 0;
      border: ${({ page }) =>
        page === "active"
          ? `2px solid #231F20`
          : `2px solid transparent`};
      border-radius: 3px;
      width: ${({ page }) =>
        page === "active"
          ? `100%`
          : `0%`};
      height: 100%;
      transition: 0.3s;
    }

    &:hover:before {
      border: 2px solid #231F20; 
      width: 100%;
      cursor: pointer;
      transition: 0.3s;
    }
`

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
        <NavMobileContainer>
          <Link href='/'>
            <a>
            <Logo
                src={`/images/logo-wordmark${page === "/" ? "" : "-dark"}.svg`}
                alt='logo'
              />
            </a>
          </Link>
          <Hamurger onClick={handleMenuClick}>
            <img
              src={`/images/hamburger${page === "/" ? "" : "-mooGrey"}.svg`}
              alt='Hamburger Menu'
            />
          </Hamurger>
        </NavMobileContainer>
        <NavListMobile showMenu={showMenu} page={page}>
          {NAV_ITEMS.filter((route) => route !== "logo").map((route) => (
            <li key={route}>
              <Link href={`/${route}`}>
                <NavLink page={page}>{route}</NavLink>
              </Link>
            </li>
          ))}
        </NavListMobile>
        <div className='header header-desktop'>
          <div className='header-inner-ctn'>
            <Link href="/projects">
              <HeaderLink className='header-link' page={page === "/projects" ? "active" : null} route="projects">
                projects
              </HeaderLink>
            </Link>
            <Link href="/testimonials">
              <HeaderLink className='header-link' page={page === "/testimonials" ? "active" : null} route="testimonials">
                testimonials
              </HeaderLink>
            </Link>
          </div>
          <Link href="/">
            <a page={page} route="/">
              <img className='header-logo' src='/images/logo-wordmark-dark.svg'/>
            </a>
          </Link>
          <div className='header-inner-ctn'>
            <Link href="/contact">
              <HeaderLink className='header-link' page={page === "/contact" ? "active" : null} route="contact">
                contact
              </HeaderLink>
            </Link>
            <Link href="/about">
              <HeaderLink className='header-link' page={page === "/about" ? "active" : null} route="about">
                about
              </HeaderLink>
            </Link>
          </div>
        </div>
        {/* <NavList>
          {NAV_ITEMS.map((route) =>
            route === "logo" ? (
              <li key={route}>
                <Link href='/'>
                  <a>
                    <Logo
                      src={`/images/logo-wordmark${page === "/" ? "" : "-dark"}.svg`}
                      alt='logo'
                    />
                  </a>
                </Link>
              </li>
            ) : (
              <li key={route}>
                <Link href={`/${route}`}>
                  <NavLink page={page} route={route}>
                    {route}
                  </NavLink>
                </Link>
              </li>
            )
          )}
        </NavList> */}
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
