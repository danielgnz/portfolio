import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout.component.jsx"
import SEO from "../components/seo"

import ProjectHero from "../components/ProjectHero/project-hero.component"
import BlogPageLayout from "../components/BlogPageLayout/blog-page-layout.component"

export default ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <ProjectHero title={"Latest Posts"} subtitle={"Daniel Buhaianu's Blog"} />
    <BlogPageLayout posts={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "posts" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            author
            date(formatString: "DD MMMM, YYYY")
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
