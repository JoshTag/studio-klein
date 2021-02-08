import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem 0 0;
  background-color: ${({ page }) =>
    page === "home" ? "transparent" : ({ theme }) => theme.colours.secondary80};
`;

const Navigation = styled.nav`
  width: 100%;
  position: relative;
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
    page !== "home" ? "transparent" : ({ theme }) => theme.colours.secondary80};
  display: block;
  overflow: hidden;
  height: ${(props) => (props.showMenu ? "200px" : "0px")};
  transition: 0.3s;

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
    page === "home"
      ? ({ theme }) => theme.colours.secondary80
      : ({ theme }) => theme.colours.primary};
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    &:before,
    :after {
      content: "";
      position: absolute;
      width: 0;
      height: 1px;
      top: 100%;
      background: ${({ page }) =>
        page === "home"
          ? ({ theme }) => theme.colours.secondary80
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

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled(Image)`
  position: relative;
  z-index: 1000;
`

const Header = ({ page }) => {
  const [showMenu, setShowMenu] = useState(false);
  const NAV_ITEMS = ["Projects", "Services", "Logo", "Testamonials", "Contact"];

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
                height='60'
                width='60'
                layout='fixed'
                src={
                  page === "home"
                    ? "/images/logo.svg"
                    : "/images/logo-white.svg"
                }
              />
            </a>
          </Link>
          <Hamurger onClick={handleMenuClick}>
            <img src='/images/hamburger.svg' alt='Hamburger Menu' />
          </Hamurger>
        </NavMobileContainer>
        <NavListMobile showMenu={showMenu} page={page}>
          <li>
            <Link href='/projects'>
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <NavLink>Services</NavLink>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <NavLink>Testamonials</NavLink>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <NavLink>Contact</NavLink>
            </Link>
          </li>
        </NavListMobile>
        <NavList>
          <li>
            <Link href='/projects'>
              <NavLink page={page}>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <NavLink page={page}>Services</NavLink>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <Logo
                  height='100'
                  width='100'
                  src={
                    page === "home"
                      ? "/images/logo.svg"
                      : "/images/logo-white.svg"
                  }
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <NavLink page={page}>Testamonials</NavLink>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <NavLink page={page}>Contact</NavLink>
            </Link>
          </li>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
