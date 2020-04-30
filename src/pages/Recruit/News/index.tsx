import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import styles from './styles.module.scss'

// component
import NewsList from 'components/Recruit/NewsList'
import { Headding } from 'components/Recruit/Headding'
import Breadcrumbs from 'components/Recruit/Breadcrumbs'
import SideMenu from 'components/Recruit/SideMenu'

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface breadcrumbs {
  text: string
  link: string
}

const breadcrumbs: breadcrumbs[] = [
  {
    text: 'NEWS',
    link: '',
  },
]

const News = () => {
  return (
    <Layout>
      <SEO title="NEWS" />
      <Headding title={'NEWS'} />
      <Breadcrumbs dataList={breadcrumbs} />
      <div className={styles.contents}>
        <div className={styles.left}>
          <NewsList />
        </div>
        <div className={styles.right}>
          <SideMenu />
        </div>
      </div>
    </Layout>
  )
}
export default News
