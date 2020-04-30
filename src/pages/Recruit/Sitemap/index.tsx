import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import styles from './styles.module.scss'

// component
import { Headding } from 'components/Recruit/Headding'
import Breadcrumbs from 'components/Recruit/Breadcrumbs'
import SideMenu from 'components/Recruit/SideMenu'

interface Breadcrumbs {
  text: string
  link: string
}

const breadcrumbs: Breadcrumbs[] = [
  {
    text: 'サイトマップ',
    link: '',
  },
]

const Sitemap = () => {
  return (
    <Layout>
      <SEO title="サイトマップ" />
      <Headding title={'サイトマップ'} />
      <Breadcrumbs dataList={breadcrumbs} />
      <div className={styles.contents}>
        <div className={styles.left}>
          <h2 className={styles.sitemapTitle}>
            <Link to="/">TOP</Link>
          </h2>

          <ul className={styles.sitemapList}>
            <li>
              <Link to="/message/">MESSAGE</Link>
            </li>
            <li>
              <Link to="/recruit/people/">PEOPLE</Link>
            </li>
            <li>
              <Link to="/recruit/environment/">ENVIRONMENT</Link>
            </li>
            <li>
              <Link to="/recruit/job/">RECRUIT</Link>
            </li>
            <li>
              <Link to="/recruit/company/">COMPANY</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <SideMenu />
        </div>
      </div>
    </Layout>
  )
}
export default Sitemap
