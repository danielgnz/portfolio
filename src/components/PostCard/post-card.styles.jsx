import styled from "styled-components"
import { Link } from "gatsby"

import { textColour, blue, blueHover } from "../../variables"

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  text-decoration: none;
  position: relative;
  padding: 0 2.5rem 2.5rem;
  margin: 0 -1.5rem 2.5rem;
  border-bottom: 1px solid rgb(240, 240, 242);
  width: 90%;
  max-width: 624px;

  @media only screen and (min-width: 42rem) {
    box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
      rgba(71, 63, 79, 0.08) 0px 2px 4px;
    margin: 0 0 1.5rem;
    padding: 3rem;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    border-width: 0px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:active {
      transform: translateY(0px);
    }

    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px,
        rgba(71, 63, 79, 0.16) 0px 8px 16px;
    }
  }
`
export const Description = styled.p`
  margin: 0 0 2em;
`

export const PostLink = styled(Link)`
  text-decoration: none;
  color: ${textColour};

  &:active {
    color: ${blue};
  }
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
`

export const OtherInfo = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 10px;
`

export const Name = styled.span`
  color: ${blueHover};
  border-bottom: 1px solid ${blue};

  &:hover {
    border-bottom: 1px solid ${blueHover};
  }
`
