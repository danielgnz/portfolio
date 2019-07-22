import React from "react"

import { Container, Title, SubTitle, Description } from "./edu-card.styles"

export const EduCard = ({ data }) => {
  const { frontmatter } = data
  const { name, startDate, finishDate, subject } = frontmatter

  return (
    <Container>
      <Title>{name}</Title>

      <SubTitle>{startDate + " - " + finishDate}</SubTitle>

      <SubTitle>{subject}</SubTitle>

      <Description>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </Description>
    </Container>
  )
}

export default EduCard
