import styled, { css } from "styled-components"

import { ButtonStyle } from "../../global.styles"
import { blue, textColour } from "../../variables"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const HeroContainer = styled.div`
  background: rgb(245, 245, 245);
  padding: 1rem;
  display: flex;
  position: relative;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

export const Column = styled.div`
  z-index: 2;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 3.2em;
  font-weight: 400;
`

export const Description = styled.p`
  font-size: 1.2em;
`

export const CallToActionContainer = styled.div`
  display: flex;
  margin-top: 2em;
`

export const CallToActionItem = styled.div`
  margin-right: 20px;
`

export const ResumeButton = styled.a`
  ${ButtonStyle}
`

const iconStyle = css`
  height: 25px;
  width: 25px;
  color: ${textColour};

  &:hover {
    color: ${blue};
  }
`

export const GithubIcon = styled(FaGithub)`
  ${iconStyle}
`
export const LinkedInIcon = styled(FaLinkedinIn)`
  ${iconStyle}
`
export const EmailIcon = styled(MdEmail)`
  ${iconStyle}
`

export const Image = styled.img`
  max-width: 100%;
  min-height: 100%;
  margin-top: 15px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
