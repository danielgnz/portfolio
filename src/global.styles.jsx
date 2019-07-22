import { createGlobalStyle, css } from "styled-components"
import {
  textColour,
  headingColour,
  backgroundAlt,
  blue,
  blueHover,
} from "./variables"

export const GlobalStyle = createGlobalStyle`
    body, caption, th, td, input, textarea, select, option, legend, fieldset, h1, h2, h3, h4, h5, h6 {
        font-size-adjust: 0.5;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        color: ${headingColour};
        line-height: 1.25;
    }

    b {
        color: ${headingColour}
    }

    h1 { font-size: 2.5em; ${({ isOpen }) => isOpen && `z-index: -1;`} }
    h2 { font-size: 1.75em; }
    h3 { font-size: 1.35em; }
    h4 { font-size: 1.1em; }
    h5 { font-size: 0.9em; }
    h6 { font-size: 0.75em; }

    body {
        background: ${backgroundAlt};
        color: ${textColour};
        font-family: 'Lato', sans-serif;
        font-size: 1em;
        line-height: 1.5;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        ${({ isOpen }) => isOpen && `overflow: hidden; z-index: -1;`}
    }

    img {
        min-height: 100%;
        max-width: 100%;
    }

`

export const ButtonStyle = css`
  text-decoration: none;
  background: ${blue};
  color: #fff;
  font-weight: 700;
  font-size: 0.9em;
  letter-spacing: 0.5px;
  padding: 1em 2em;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background: ${blueHover};
  }
`

export const HeadingSectionStyle = css`
  position: relative;
  text-align: center;
  color: ${headingColour};
  font-weight: 300;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    height: 1px;
    width: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #000;
  }
`
