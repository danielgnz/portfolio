import React from "react"

import {
  Card,
  Wrapper,
  TitleWrapper,
  SubTitle,
  Title,
  ButtonContainer,
  Button,
} from "./project-card.styles"

export const ProjectCard = ({ link, title, subtitle, image }) => {
  return (
    <Card to={link}>
      <img src={image} alt={title} />
      <Wrapper>
        <TitleWrapper>
          <SubTitle>{subtitle}</SubTitle>
          <Title>{title}</Title>
        </TitleWrapper>

        <ButtonContainer>
          <Button>View Project</Button>
        </ButtonContainer>
      </Wrapper>
    </Card>
  )
}

export default ProjectCard
