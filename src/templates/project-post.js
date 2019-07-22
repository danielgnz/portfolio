import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout.component"

import ProjectHero from "../components/ProjectHero/project-hero.component"
import ArticleLayout from "../components/ArticleLayout/article-layout.styles"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <ProjectHero
        title={post.frontmatter.title}
        subtitle={post.frontmatter.type}
      />
      <ArticleLayout>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </ArticleLayout>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        type
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
