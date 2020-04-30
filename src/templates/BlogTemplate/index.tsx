import React from 'react'
import Layout from 'components/layout'
import SprintLayout from 'components/Sprint/SprintLayout'

import { graphql } from 'gatsby'
import { Query, QueryFullList } from 'utils/Template/data'
import { MarkdownRemark } from 'templates/Type'

import RecruitTemplate from './RecruitTemplate'
import ProductTemplate from './ProductTemplate'

interface Props {
  data: MarkdownRemark
}

const Template = (pageQuery: Props) => {
  const { data } = pageQuery
  const { frontmatter, html } = data.markdownRemark

  return (
    <>
      {frontmatter.categoryslug === 'MESSAGE' ||
      frontmatter.categoryslug === 'PEOPLE' ||
      frontmatter.categoryslug === 'ENVIRONMENT' ? (
        <Layout>
          <RecruitTemplate frontmatter={frontmatter} html={html} queryData={QueryFullList()} />
        </Layout>
      ) : (
        frontmatter.categoryslug === 'PRODUCTS' && (
          <SprintLayout>
            <ProductTemplate frontmatter={frontmatter} html={html} queryData={Query('PRODUCTS')} />
          </SprintLayout>
        )
      )}
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MM/DD/YYYY")
        path
        title
        tags
        pagetype
        categoryname
        categoryslug
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default Template
