import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "./screens";
import { slide as Menu } from "react-burger-menu";
import menu from "../../menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faSignIn,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavbarContainer = styled.div`
  /* padding: 0px 30px; */
  background-color: rgb(41, 92, 71);
  /* background-color: rgb(18, 99, 15); */
  height: 70px;
  box-shadow: 0px 5px 8px rgba(0, 255, 64, 0.699);
  background-image: url("/assets/logo.jpg");
  /* max-width: 100%; */
  ${tw`
      w-full
      flex
      items-center
      justify-between
       pr-5
  `}
`;
const LogoContainer = styled.div`
  ${tw`
      w-full
  `}
`;
const Img = styled.img`
  ${tw`
  h-28
  w-28
  `}
`;

const NavLinks = styled.ul`
  ${tw`
    flex
    list-none
    items-center
    max-w-screen-2xl
    text-white
  `}
`;
const NavLink = styled.li`
  ${tw`
    flex
    list-none
    max-w-screen-2xl
    mr-3
    text-lg
    cursor-pointer
  `}
`;
const Link = styled.a``;
export const RedIcon = styled.span`
  ${tw`
 text-3xl
    rounded-full
    flex
    items-center
    justify-center
    text-base
    mr-1
    text-white
  `}
`;

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile) {
    return (
      <NavbarContainer>
        <LogoContainer>
          <Img src="/assets/net.png" alt="logo" />
        </LogoContainer>
        <Menu right styles={menu}>
          <NavLinks>
            <NavLink>
              <Link href="/">Home</Link>{" "}
            </NavLink>
            <NavLink>
              <Link href="/community">Community</Link>
            </NavLink>
            <NavLink>
              <Link href="/farm">Farm</Link>{" "}
            </NavLink>
            <NavLink>
              <Link href="/register">Register</Link>{" "}
            </NavLink>
            <NavLink>
              <Link href="/">Notifications</Link>{" "}
            </NavLink>
            <NavLink>
              <Link href="/">Settings</Link>{" "}
            </NavLink>
            <NavLink>
              <Link href="/login">Sign In</Link>{" "}
            </NavLink>
          </NavLinks>
        </Menu>
      </NavbarContainer>
    );
  }
  return (
    <NavbarContainer>
      <LogoContainer>
        <Img src="/assets/net.png" alt="logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink>
          <Link href="/">Home</Link>{" "}
        </NavLink>
        <NavLink>
          <Link href="/community">Community</Link>
        </NavLink>
        <NavLink>
          <Link href="/farm">Farm</Link>{" "}
        </NavLink>
        <NavLink>
          <RedIcon>
            <a href="/register">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </RedIcon>
        </NavLink>
        <NavLink>
          <RedIcon>
            <FontAwesomeIcon icon={faBell} />
          </RedIcon>
        </NavLink>
        <NavLink>
          <RedIcon>
            <FontAwesomeIcon icon={faCog} />
          </RedIcon>
        </NavLink>
        <NavLink>
          <RedIcon>
            <a href="/login">
              <FontAwesomeIcon icon={faSignIn} />
            </a>
          </RedIcon>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
