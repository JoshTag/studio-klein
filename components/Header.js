import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem 0 0;
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
  background: ${({ theme }) => theme.colours.secondary80};
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
    color: ${({ theme }) => theme.colours.secondary80};
  }
`;
const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
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
      background: ${({ theme }) => theme.colours.secondary80};
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

// const Logo = styled(Image)`
//   width: 60px;
//   height: 60px;

//   @media ${({ theme }) => theme.breakpoints.tabletMin} {
//     width: 80px;
//     height: 80px;
//   }

//   @media ${({ theme }) => theme.breakpoints.tabletLarge} {
//     width: 100px;
//     height: 100px;
//   }
// `;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <Navigation>
        <NavMobileContainer>
          <Link href='/projects'>
            <a>
              <Image
                height="60"
                width="60"
                layout='fixed'
                src='/images/logo.svg'
              />
            </a>
          </Link>
          <Hamurger onClick={handleMenuClick}>
            <img src='/images/hamburger.svg' alt='Hamburger Menu' />
          </Hamurger>
        </NavMobileContainer>
        <NavListMobile showMenu={showMenu}>
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
              <a>
                <Image height="100" width="100" src='/images/logo.svg' />
              </a>
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
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
