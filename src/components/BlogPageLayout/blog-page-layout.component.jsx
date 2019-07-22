import React from "react"

import { Container, ContainerItem } from "./blog-page-layout.styles"

import PostCard from "../PostCard/post-card.component"

export const BlogPageLayout = ({ posts }) => {
  return (
    <Container>
      {posts.map((edge, index) => {
        const postInfo = edge.node.frontmatter
        return (
          <ContainerItem>
            <PostCard
              key={postInfo.path}
              path={postInfo.path}
              title={postInfo.title}
              excerpt={postInfo.excerpt}
              author={postInfo.author}
              date={postInfo.date}
            />
          </ContainerItem>
        )
      })}
    </Container>
  )
}

export default BlogPageLayout
