import React from "react"

import { Container, Title, List, ListItem } from "./skills.styles"

import { skills as mySkills } from "./skills"

export const Skills = () => {
  return (
    <Container id="skills">
      <Title>Skills</Title>

      <List>
        {mySkills.map((skill, index) => (
          <ListItem key={index}>{skill}</ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Skills
