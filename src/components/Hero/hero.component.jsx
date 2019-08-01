import React from "react"

import {
  HeroContainer,
  Wrapper,
  Column,
  Title,
  Description,
  CallToActionContainer,
  CallToActionItem,
  GithubIcon,
  LinkedInIcon,
  EmailIcon,
  ResumeButton,
  Image,
} from "./hero.styles"

import ParticlesBG from "../ParticlesBG/particles-bg.component"

import photo from "./danielgnz.png"

export const Hero = props => {
  return (
    <HeroContainer id="hero-home">
      <ParticlesBG />
      <Wrapper>
        <Column>
          <Title>Daniel Buhaianu</Title>
          <Description>
            High-Performance Full Stack Developer based in Birmingham, UK.
          </Description>
          <Description>
            Currently, I'm looking for a remote opportunity.
          </Description>
          <CallToActionContainer>
            <CallToActionItem>
              <ResumeButton href="https://docs.google.com/document/d/19k8KZK5miA6aCeuQl0TD6KgGB1cZvDzZgJ_kTqvVlU0/edit?usp=sharing">View Resume</ResumeButton>
            </CallToActionItem>

            <CallToActionItem>
              <a href="https://github.com/danielgnz">
                <GithubIcon />
              </a>
            </CallToActionItem>

            <CallToActionItem>
              <a href="https://www.linkedin.com/in/danielbuhaianu/">
                <LinkedInIcon />
              </a>
            </CallToActionItem>

            <CallToActionItem>
              <a href="mailto:daniel@danielbuhaianu.com">
                <EmailIcon />
              </a>
            </CallToActionItem>
          </CallToActionContainer>
        </Column>

        <Column>
          <Image src={photo} />
        </Column>
      </Wrapper>
    </HeroContainer>
  )
}

export default Hero
