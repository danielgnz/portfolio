import styled, { css } from "styled-components"
import { Link } from "gatsby"

import { blueHover, textColour } from "../../variables"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #dcd9d9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;
  margin: 10px 0;
`

export const Title = styled.h3`
  margin: 0;
`
export const SubTitle = styled.p`
  margin: 0;
  color: #74808a;
`

export const Description = styled.div`
  color: #525f7f;
  margin: 10px 0 0;
`

export const CallToAction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: .5em;
`

const linkStyle = css`
  text-decoration: none;
  color: ${blueHover};
  font-weight: 600;

  &:hover {
    border-bottom: 1px solid ${textColour};
  }

`

export const Certificate = styled.a`
  ${linkStyle}

`

export const ReadMore = styled(Link)`
  ${linkStyle}
`