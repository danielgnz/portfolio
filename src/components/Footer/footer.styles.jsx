import styled, { css } from "styled-components"

import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

import { blue, textColour } from "../../variables"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`
export const Text = styled.p`
  margin: 0;
`
export const GoToTopButton = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid #b9bfc4;
  text-align: center;

  &:active {
    color: ${textColour};
  }
`

const iconStyle = css`
  height: 25px;
  width: 25px;
  color: ${textColour};
  margin-right: 20px;

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
