import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import styles from './styles.module.scss'

// component
import { Headding } from 'components/Recruit/Headding'
import Breadcrumbs from 'components/Recruit/Breadcrumbs'
import SideMenu from 'components/Recruit/SideMenu'
import RecruitCategolyTemplate from 'templates/Categoly/RecruitCategoly'

interface Breadcrumbs {
  text: string
  link: string
}

const breadcrumbs: Breadcrumbs[] = [
  {
    text: 'PEOPLE',
    link: '',
  },
]

const People = () => {
  return (
    <Layout>
      <SEO title="PEOPLE" />
      <Headding title={'PEOPLE'} />
      <Breadcrumbs dataList={breadcrumbs} />
      <div className={styles.contents}>
        <div className={styles.left}>
          <RecruitCategolyTemplate dataCategory="PEOPLE" />
        </div>
        <div className={styles.right}>
          <SideMenu />
        </div>
      </div>
    </Layout>
  )
}
export default People
