import React from "react"

import { Link } from "gatsby"

import logo from "../../images/logo.png"

import { FaBars, FaTimes } from "react-icons/fa"

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  NavigationMenu,
  NavLink,
  CloseButtonContainer,
  Hamburger,
} from "./header.styles"

const classes = {
  icon: {
    color: "#107887",
  },
  closeIcon: {
    color: "#107887",
    fontSize: "1.5em",
  },
}

const Header = ({ isOpen, openMenu, closeMenu }) => {
  return (
    <HeaderContainer id="home">
      <LogoContainer>
        <Link to="/#home">
          <Logo src={logo} alt="logo" />
        </Link>
      </LogoContainer>

      <NavigationMenu isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="/#projects">Projects</NavLink>
        <NavLink to="/#education">Education</NavLink>
        <NavLink to="/#skills">Skills</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
      </NavigationMenu>

      {isOpen ? (
        <CloseButtonContainer onClick={closeMenu}>
          <FaTimes style={classes.closeIcon} />
        </CloseButtonContainer>
      ) : (
        <Hamburger onClick={openMenu}>
          <FaBars style={classes.icon} />
        </Hamburger>
      )}
    </HeaderContainer>
  )
}
export default Header
