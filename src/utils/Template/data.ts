import { graphql, useStaticQuery } from 'gatsby'
import { Node } from 'templates/Type'

export const settingQuery = () => {
  const data: any = graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              path
              subtitle
              title
              pagetype
              categoryslug
              categoryname
              tags
              draft
              image {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
              thumbnail {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
              contents {
                title
                text
                image {
                  childImageSharp {
                    original {
                      src
                    }
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `
  return useStaticQuery(data)
}
export const Query = (dataCategory: string) => {
  const queryBloolean =
    process.env.REACT_APP_ENVIRONMENT === 'production'
      ? settingQuery().allMarkdownRemark.edges.filter(
          (s: Node) => s.node.frontmatter.draft === false
        )
      : settingQuery().allMarkdownRemark.edges
  return queryBloolean.filter((s: Node) => s.node.frontmatter.categoryslug === dataCategory)
}

export const QueryFullList = () =>
  process.env.REACT_APP_ENVIRONMENT === 'production'
    ? settingQuery().allMarkdownRemark.edges.filter((s: Node) => s.node.frontmatter.draft === false)
    : settingQuery().allMarkdownRemark.edges
