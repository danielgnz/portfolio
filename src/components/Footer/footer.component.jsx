import React from "react"

import {
  Container,
  ContainerItem,
  Text,
  GoToTopButton,
  GithubIcon,
  LinkedInIcon,
  EmailIcon,
} from "./footer.styles"

import { FaChevronUp } from "react-icons/fa"

const classes = {
  icon: {
    height: "25px",
    width: "25px",
  },
}

export const Footer = () => {
  return (
    <Container>
      <ContainerItem>
        <GoToTopButton href="#home">
          <FaChevronUp style={classes.icon} />
        </GoToTopButton>
      </ContainerItem>

      <ContainerItem>
        <a href="https://github.com/danielgnz">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/danielbuhaianu/">
          <LinkedInIcon />
        </a>
        <a href="mailto:danibtechnology@gmail.com">
          <EmailIcon />
        </a>
      </ContainerItem>

      <ContainerItem>
        <Text>Made by Daniel Buhaianu</Text>
      </ContainerItem>
    </Container>
  )
}

export default Footer
