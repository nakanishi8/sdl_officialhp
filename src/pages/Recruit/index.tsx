import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'

// Section
// import News from "components/Section/News"
import Infomation from 'components/Recruit/Section/Infomation'
import Access from 'components/Recruit/Section/Access'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="HOME" />
      {/* <News /> */}
      <Infomation />
      <Access />
    </Layout>
  )
}
export default IndexPage
