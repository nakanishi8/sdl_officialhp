import React from 'react'
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
    text: '採用に関するお問い合わせ',
    link: '',
  },
]

const Contact = () => {
  return (
    <Layout>
      <SEO title="採用に関するお問い合わせ" />
      <Headding title={'採用に関するお問い合わせ'} />
      <Breadcrumbs dataList={breadcrumbs} />
      <div className={styles.contents}>
        <div className={styles.left}>
          <h2 className={styles.contactTitle}>
            {/* eslint-disable-next-line no-irregular-whitespace */}
            SOMPO Digital Lab（SOMPOホールディングス　デジタル戦略部）への応募は、
            <span>下記エージェントにご相談ください。</span>
          </h2>
          <ul className={styles.contactList}>
            <li>
              <a href="https://www.r-agent.com/">・リクルートキャリア（リクルートエージェント）</a>
            </li>
            <li>
              <a href="https://doda.jp/consultant/">・パーソルキャリア（doda）</a>
            </li>
            <li>
              <a href="https://www.bizreach.jp/">・ビズリーチ</a>
            </li>
            <li>
              <a href="https://www.procommit.co.jp/">・プロコミット</a>
            </li>
            <li>
              <a href="https://www.kotora.jp/">・コトラ</a>
            </li>
            <li>
              <a href="https://www.interworksagent.com/">・インターワークス</a>
            </li>
            <li>
              <a href="http://www.jac-recruitment.jp/">・ジェイ エイ シー リクルートメント</a>
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
export default Contact
