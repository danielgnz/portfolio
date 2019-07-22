import React from "react"
import { Link } from "gatsby"

import { Container, Title, SubTitle, Description, Certificate, ReadMore, CallToAction } from "./edu-card.styles"

export const EduCard = ({ data }) => {
  const { frontmatter } = data
  const { path, title, startDate, finishDate, type, excerpt, certificate } = frontmatter

  return (
    <Container>
      
      <Link to={path} style={{textDecoration: 'none'}}>
        <Title>{title}</Title>
      </Link>
      
      <SubTitle>
      {
        startDate === finishDate
        ? `${startDate}`
        : `${startDate} - ${finishDate}`
        
      }
      </SubTitle>

      <SubTitle>{type}</SubTitle>

      <Description>
        { excerpt }
      </Description>
      
      <CallToAction>
        
        <Certificate href={certificate}>
          View Certificate
        </Certificate>

        <ReadMore to={path}>
          Read More >
        </ReadMore>
      </CallToAction>
      

    </Container>
  )
}

export default EduCard
