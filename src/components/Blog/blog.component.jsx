import React from "react"

import {
  Container,
  ContainerItem,
  Title,
  Description,
  Button,
} from "./blog.styles"

export const Blog = () => {
  return (
    <Container>
      <ContainerItem>
        <Title>Blog</Title>
      </ContainerItem>

      <ContainerItem style={{ flexDirection: "column" }}>
        <Description>Have a second?</Description>
        <Description>Check out my technical blog!</Description>
      </ContainerItem>

      <ContainerItem>
        <Button to="/blog">Visit Blog</Button>
      </ContainerItem>
    </Container>
  )
}

export default Blog
