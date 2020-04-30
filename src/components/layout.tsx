/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactNode, useState } from 'react'
import { oc } from 'ts-optchain'
import { SiteTitleQueryQuery } from '../graphqlTypes'
import Header from 'components/Recruit/Header'
import Footer from 'components/Recruit/Footer'
import './layout.css'

interface Props {
  children: ReactNode
}

const useSiteTitle = () => {
  const data: SiteTitleQueryQuery = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return oc(data).site.siteMetadata.title('')
}

const Layout = ({ children }: Props) => {
  const [menu, setMenu] = useState(false)
  const title = useSiteTitle()
  console.log(title)

  return (
    <>
      <Header menu={menu} onClick={() => (menu ? setMenu(false) : setMenu(true))} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
