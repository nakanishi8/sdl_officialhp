import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import styles from './styles.module.scss'

// component
import { Headding } from 'components/Recruit/Headding'
import Breadcrumbs from 'components/Recruit/Breadcrumbs'
import SideMenu from 'components/Recruit/SideMenu'

// img
import companny from 'images/Recruit/company.jpg'
import icon from 'images/Recruit/icon/icon-blank02.png'

interface Breadcrumbs {
  text: string
  link: string
}

const breadcrumbs: Breadcrumbs[] = [
  {
    text: 'COMPANY',
    link: '',
  },
]

const Recruit = () => {
  return (
    <Layout>
      <SEO title="COMPANY" />
      <Headding title={'COMPANY'} />
      <Breadcrumbs dataList={breadcrumbs} />
      <div className={styles.contents}>
        <div className={styles.left}>
          <img src={companny} alt="COMPANY" />
          <ul className={styles.companyList}>
            <li className={styles.companyList__item}>
              <a href="https://www.sompo-hd.com/company/summary/" target="_brank">
                企業概要
                <img src={icon} />
              </a>
            </li>
            <li className={styles.companyList__item}>
              <a href="https://www.sompo-hd.com/group/" target="_brank">
                グループ事業
                <img src={icon} />
              </a>
            </li>
            <li className={styles.companyList__item}>
              <a href="https://www.sompo-hd.com/company/summary/history/" target="_brank">
                沿革
                <img src={icon} />
              </a>
            </li>
            <li className={styles.companyList__item}>
              <a href="https://www.sompo-hd.com/ir/" target="_brank">
                IR情報
                <img src={icon} />
              </a>
            </li>
            <li className={styles.companyList__item}>
              <a href="https://www.sompo-hd.com/csr/" target="_brank">
                CSR情報
                <img src={icon} />
              </a>
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
export default Recruit
