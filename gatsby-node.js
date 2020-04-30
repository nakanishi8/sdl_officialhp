/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/BlogTemplate/index.tsx`)
  const query = process.env.REACT_APP_ENVIRONMENT === 'production'? graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { eq: false } } }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`): graphql(`
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          path
        }
      }
    }
  }
}
`)
  return  query.then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        config: path.resolve(__dirname, "config"),
        assets: path.resolve(__dirname, "src/public"),
        components: path.resolve(__dirname, "src/components"),
        lib: path.resolve(__dirname, "src/lib"),
        utils: path.resolve(__dirname, "src/utils"),
        images: path.resolve(__dirname, "src/images"),
        videos: path.resolve(__dirname, "src/videos"),
        pages: path.resolve(__dirname, "src/pages"),
        templates: path.resolve(__dirname, "src/templates"),
        locales: path.resolve(__dirname, "src/locales"),
      },
    },
  })
}
