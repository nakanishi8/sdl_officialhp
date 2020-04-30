import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import styles from './styles.module.scss'

// component
import { Headding } from 'components/Recruit/Headding'
import Breadcrumbs from 'components/Recruit/Breadcrumbs'
import SideMenu from 'components/Recruit/SideMenu'
import Accordion from 'components/Recruit/Accordion'
import DataResources from './atom/DataResources'
import PlanningResources from './atom/PlanningResources'
import Designer from './atom/Designer'
import Engineer from './atom/Engineer'

interface Breadcrumbs {
  text: string
  link: string
}

const breadcrumbs: Breadcrumbs[] = [
  {
    text: 'JOB DESCREPTION',
    link: '',
  },
]

const Job = () => {
  return (
    <Layout>
      <SEO title="JOB DESCREPTION" />
      <Headding title={'JOB DESCREPTION'} />
      <Breadcrumbs dataList={breadcrumbs} />
      <div className={styles.contents}>
        <div className={styles.left}>
          <p className={styles.read}>
            それぞれの人材は原則、損害保険ジャパン日本興亜社で採用を行い、配属はSOMPOホールディングスのデジタル戦略部またはデジタル関連の部門へ出向となります。
          </p>
          <Accordion title="データサイエンティスト人材">
            <DataResources />
          </Accordion>
          <Accordion title="デジタル企画人材">
            <PlanningResources />
          </Accordion>
          <Accordion title="デジタル企画人材（デザイナー）">
            <Designer />
          </Accordion>
          <Accordion title="デジタル企画人材（エンジニア）">
            <Engineer />
          </Accordion>
        </div>
        <div className={styles.right}>
          <SideMenu />
        </div>
      </div>
    </Layout>
  )
}
export default Job
