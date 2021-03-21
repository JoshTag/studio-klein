import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem 0 0;
  background-color: ${({ page }) =>
    page === "/" ? "transparent" : ({ theme }) => theme.colours.header};
`;

const Navigation = styled.nav`
  width: 100%;
  position: relative;
  padding-bottom: 1.5rem;
`;

const NavMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${({ theme }) => theme.breakpoints.tablet} {
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

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }

  & > li {
    margin: 20px 0 20px 10%;
  }

  & li > a {
    color: ${({ theme }) => theme.colours.primary};
  }
`;

const NavList = styled.ul`
  display: none;
  list-style: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10%;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    max-width: 990px;
    margin: 0 auto;
  }

  & > li {
    width: 100px;
    text-align: center;
  }

  & li > a {
  }
`;

const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ page }) =>
    page === "/"
      ? ({ theme }) => theme.colours.grey
      : ({ theme }) => theme.colours.primary};
  text-transform: capitalize;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

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
  width: 60px;
  height: 60px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 100px;
    height: 100px;
  }
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const NAV_ITEMS = ["projects", "services", "logo", "testamonials", "contact"];
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
                src={`/images/logo${page === "/" ? "" : "-white"}.svg`}
                alt='logo'
              />
            </a>
          </Link>
          <Hamurger onClick={handleMenuClick}>
            <img
              src={`/images/hamburger${page === "/" ? "" : "-white"}.svg`}
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
        <NavList>
          {NAV_ITEMS.map((route) =>
            route === "logo" ? (
              <li key={route}>
                <Link href='/'>
                  <a>
                    <Logo
                      src={`/images/logo${page === "/" ? "" : "-white"}.svg`}
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
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
