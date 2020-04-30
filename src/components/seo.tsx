/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { oc } from 'ts-optchain'
import { SiteMetadataQueryQuery } from '../graphqlTypes'
import { globalHistory } from '@reach/router'

type MetaProps = JSX.IntrinsicElements['meta']

interface Props {
  description?: string
  lang?: string
  meta?: MetaProps[]
  title: string
}

const SEO: React.FC<Props> = ({ description, lang, title }) => {
  const { site }: SiteMetadataQueryQuery = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || oc(site).siteMetadata.description('')
  const path = globalHistory.location.pathname.split('/')
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        !path[1] || path[1] === 'en'
          ? oc(site).siteMetadata.title('')
          : `%s | ＳＯＭＰＯホールディングス株式会社 デジタル部門 採用情報`
      }
      meta={
        [
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: oc(site).siteMetadata.author(''),
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ]
        // .concat(meta)
      }
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
