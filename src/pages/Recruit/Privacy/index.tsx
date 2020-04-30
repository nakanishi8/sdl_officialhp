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
    text: '個人情報の取扱いについて',
    link: '',
  },
]

const Privacy = () => {
  return (
    <Layout>
      <SEO title="個人情報の取扱いについて" />
      <Headding title={'個人情報の取扱いについて'} />
      <Breadcrumbs dataList={breadcrumbs} />
      <div className={styles.contents}>
        <div className={styles.left}>
          <h2 className={styles.provacyTitle}>個人情報収集の目的</h2>
          <p className={styles.provacyText}>
            当社は、採用業務等に利用する目的で、氏名・住所・電話番号・電子メールアドレス等、個人を特定し得る情報（以下「個人情報」と表記）を、指定の応募フォーム、履歴書あるいは雇入時健康診断等で収集することがあります。収集された個人情報は、当社の採用業務等に利用し、その他の目的には一切利用しません。
          </p>

          <h2 className={styles.provacyTitle}>個人情報の取扱い</h2>
          <p className={styles.provacyText}>
            当社は、収集された個人情報を漏えい・滅失・き損から守り安全に管理します。
            <br />
            また保管期間後は、当社の責任のもとで適切に廃棄・消去するものとします。
          </p>

          <h2 className={styles.provacyTitle}>個人情報の第三者への提供</h2>
          <p className={styles.provacyText}>
            当社は、業務上取り扱う個人データを第三者に提供するときは、保護法を遵守して適正に取り扱います。
            業務上の必要により第三者に提供するときは、保護法第23条第1項各号に掲げる場合を除き、本人の同意を得るものとします。
          </p>

          <h2 className={styles.provacyTitle}>個人情報の開示・訂正等</h2>
          <p className={styles.provacyText}>
            当社は、採用応募者からの個人情報保護法に基づく保有個人データの開示、訂正等をいたします。開示、訂正等のご請求につきましては、当社所定の書面にご記入いただき、ご請求者本人が確認できる書類とともに提出いただいた上で手続きをおこないます。開示、訂正等のご請求手続きや必要な書類につきましては、下記連絡先にお問い合わせください。
          </p>

          <div className={styles.address}>
            {/* eslint-disable-next-line no-irregular-whitespace */}
            <p>損害保険ジャパン株式会社　人事部　採用グループ　採用応募者個人情報窓口</p>
            <p>〒160-8338 東京都新宿区西新宿1-26-1</p>
            {/* eslint-disable-next-line no-irregular-whitespace */}
            <p>TEL 03-3349-9520　FAX 03-3349-4687</p>
            {/* eslint-disable-next-line no-irregular-whitespace */}
            <p>営業時間：午前9時から午後5時　※土日祝祭日および年末年始を除く</p>
          </div>
        </div>
        <div className={styles.right}>
          <SideMenu />
        </div>
      </div>
    </Layout>
  )
}
export default Privacy
