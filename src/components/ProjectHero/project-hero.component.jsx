import React from "react"

import { Wrapper, Title, SubTitle } from "./project-hero.styles"

export const ProjectHero = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Wrapper>
  )
}

export default ProjectHero
