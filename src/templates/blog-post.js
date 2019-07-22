import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout.component"

import ArticleLayout from "../components/ArticleLayout/article-layout.styles"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
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
        category
        type
        excerpt
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
