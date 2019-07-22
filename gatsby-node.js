const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const projectTemplate = path.resolve(`./src/templates/project-post.js`)
const postTemplate = path.resolve(`./src/templates/blog-post.js`)

exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            path
                            category
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const { category }  = node.frontmatter
            
            if(category !== "education") {
                const component = (category === "projects") ? projectTemplate : postTemplate
            
                createPage({
                    path: node.frontmatter.path,
                    component: component,
                    context: {
                        path: node.frontmatter.path,
                    },
                })
            }
            
        })
    })
}