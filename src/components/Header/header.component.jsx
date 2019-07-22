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

  const handleClick = () => {
    if(isOpen) {
      closeMenu()
    }
  }

  return (
    <HeaderContainer id="home">
      <LogoContainer>
        <Link to="/#home">
          <Logo src={logo} alt="logo" />
        </Link>
      </LogoContainer>

      <NavigationMenu isOpen={isOpen}>
        <NavLink to="/" onClick={handleClick}>Home</NavLink>
        <NavLink to="/#about" onClick={handleClick}>About</NavLink>
        <NavLink to="/#projects" onClick={handleClick}>Projects</NavLink>
        <NavLink to="/#education" onClick={handleClick}>Education</NavLink>
        <NavLink to="/#skills" onClick={handleClick}>Skills</NavLink>
        <NavLink to="/blog" onClick={handleClick}>Blog</NavLink>
        <NavLink to="/#contact" onClick={handleClick}>Contact</NavLink>
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
