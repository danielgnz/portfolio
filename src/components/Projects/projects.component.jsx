import React, { useState } from "react"

import {
  Container,
  ContainerItem,
  ProjectsContainer,
  TitleWrapper,
  Title,
  LoadProjectsButton,
} from "./projects.styles"

import ProjectCard from "../ProjectCard/project-card.component"

export const Projects = ({ projects }) => {
  const INITIAL_ITEMS_TO_SHOW = 4

  const [itemsToShow, setItems] = useState(INITIAL_ITEMS_TO_SHOW)
  const [isExpanded, setExpanded] = useState(false)

  const showMore = () => {
    if (isExpanded) {
      setItems(4)
      setExpanded(false)
    } else {
      setItems(8)
      setExpanded(true)
    }
  }
  return (
    <Container id="projects">
      <ContainerItem>
        <TitleWrapper>
          <Title>Projects</Title>
        </TitleWrapper>
      </ContainerItem>

      <ContainerItem>
        <ProjectsContainer>
          {projects.slice(0, itemsToShow).map((item, index) => (
            <ProjectCard
              key={index}
              link={item.node.frontmatter.path}
              title={item.node.frontmatter.title}
              subtitle={item.node.frontmatter.type}
              image={item.node.frontmatter.thumbnail.childImageSharp.fluid.src}
            />
          ))}
        </ProjectsContainer>
      </ContainerItem>

      {projects.length > INITIAL_ITEMS_TO_SHOW ? (
        <ContainerItem style={{ justifyContent: "center" }}>
          <LoadProjectsButton onClick={showMore}>
            {isExpanded ? `Show Less` : `Show More`}
          </LoadProjectsButton>
        </ContainerItem>
      ) : null}
    </Container>
  )
}

export default Projects
