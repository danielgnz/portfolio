import styled from "styled-components"

import { HeadingSectionStyle } from "../../global.styles"
import { textColour } from "../../variables"

export const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  background: #fff;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const Title = styled.h1`
  ${HeadingSectionStyle}

  @media only screen and (min-width: 992px) {
    width: 30%;

    &::after {
      content: "";
      position: absolute;
      top: 40%;
      height: 1px;
      width: 50px;
      left: 0;
      xright: 0;
      margin: 0 auto;
      background: ${textColour};
    }
  }
`

export const Description = styled.p`
  padding: 0.5rem;
  max-width: 750px;
  margin: 0 auto;

  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`
