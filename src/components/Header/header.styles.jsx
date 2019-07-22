import styled, { css } from "styled-components"

import { Link } from "gatsby"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  width: 100vw;
  background: rgb(245, 245, 245);
  position: relative;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;

  @media only screen and (min-width: 768px) {
    width: 150px;
  }
`

export const NavigationMenu = styled.div`
    
    @media only screen and (max-width: 767px) {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")}
        height: 100vh;
        width: 100%;
        position: fixed;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: rgb(245, 245, 245);
        z-index: 20;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    @media only screen and (min-width: 768px) {
        display: flex;
        margin: 0 .5rem;
    }

`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: rgb(82, 95, 127);

  @media only screen and (max-width: 767px) {
    font-weight: 700;
    font-size: 1.5em;
    letter-spacing: 0.05em;
    position: relative;
    border-bottom: 1px solid #107887;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 1.5em;
  }
`
const FixedButton = css`
  position: fixed;
  right: 15px;
  z-index: 20;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
export const Hamburger = styled.div`
  ${FixedButton}
  background: rgb(245, 245, 245);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15);
  font-size: 1.5em;
  padding: 5px 7px;
  border-radius: 4px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseButtonContainer = styled.div`
  ${FixedButton}
  font-size: 1.5em;
`
