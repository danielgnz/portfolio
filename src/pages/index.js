import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout.component.jsx"
import SEO from "../components/seo"

import Hero from "../components/Hero/hero.component"
import AboutMe from "../components/AboutMe/about-me.component"
import Projects from "../components/Projects/projects.component"
import Education from "../components/Education/education.component"
import Skills from "../components/Skills/skills.component"
import GetInTouch from "../components/GetInTouch/get-in-touch.component"
import Blog from "../components/Blog/blog.component"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutMe />
    <Projects projects={data.allMarkdownRemark.edges} />
    <Education />
    <Skills />
    <Blog />
    <GetInTouch />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "projects" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            type
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
