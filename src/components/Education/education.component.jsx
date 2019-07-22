import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Container,
  ContainerItem,
  Title,
  LoadEducationButton,
} from "./education.styles"

import EduCard from "../EduCard/edu-card.component"

import { educationHistory } from "./education"

export const Education = () => {
  const INITIAL_ITEMS_TO_SHOW = 3

  const [itemsToShow, setItems] = useState(INITIAL_ITEMS_TO_SHOW)
  const [isExpanded, setExpanded] = useState(false)

  const showMore = () => {
    if (isExpanded) {
      setItems(3)
      setExpanded(false)
    } else {
      setItems(6)
      setExpanded(true)
    }
  }

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "education" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                startDate
                finishDate
                name
                subject
              }
              html
            }
          }
        }
      }
    `
  )

  return (
    <Container id="education">
      <Title>Education</Title>
      {data.allMarkdownRemark.edges.slice(0, itemsToShow).map((edge, index) => (
        <ContainerItem key={edge.node.id}>
          <EduCard data={edge.node} />
        </ContainerItem>
      ))}

      {INITIAL_ITEMS_TO_SHOW < educationHistory.length ? (
        <ContainerItem style={{ justifyContent: "center" }}>
          <LoadEducationButton onClick={showMore}>
            {isExpanded ? "Show Less" : "Show More"}
          </LoadEducationButton>
        </ContainerItem>
      ) : null}
    </Container>
  )
}

export default Education
