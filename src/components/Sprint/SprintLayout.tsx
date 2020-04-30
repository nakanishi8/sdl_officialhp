/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode, useState } from 'react'
import Header from 'components/Sprint/Header'
import Footer from 'components/Sprint/Footer'
import './layout.css'

interface Props {
  children: ReactNode
}

const SprintLayout = ({ children }: Props) => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <Header
        siteTitle="SOMPO"
        onClick={() => (menu ? setMenu(false) : setMenu(true))}
        menu={menu}
      />
      <div>
        <main>{children}</main>
      </div>
      <Footer siteTitle="SOMPO" />
    </>
  )
}

export default SprintLayout
