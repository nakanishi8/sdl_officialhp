import React from 'react'
import SprintLayout from 'components/Sprint/SprintLayout'
import SEO from 'components/seo'
import ProductCategoly from 'templates/Categoly/ProductCategoly'
import styles from './styles.module.scss'
import portal from 'videos/SprintPortal.mp4'

const IndexPage = () => {
  return (
    <>
      <SprintLayout>
        <SEO title="Sprint" />
        <div className={styles.root}>
          <div className={styles.mainVisual}>
            <video
              width="100%"
              muted
              loop
              autoPlay
              playsInline
              controlsList="nodownload"
              className="GTM-video"
            >
              <source src={portal} type="video/mp4" />
            </video>
          </div>
          <h1 className={styles.title}>「自らの手によるDXの実現」が叶えること</h1>
          <div className={styles.read}>
            デジタライズできない企業は、淘汰されます。
            <br />
            <br />
            目まぐるしくビジネス環境・顧客価値が変わる現代において、外部組織に依存するような旧態依然の開発スタイルでは、事業会社が追求すべき“顧客価値の最大化”を叶えることはできません。北米企業やスタートアップの例を出すまでもなく、開発組織とビジネス部門の融合は、事業成立の必須条件になりつつあります。
            <br />
            <br />
            SOMPOホールディングス&nbsp;デジタル戦略部は、2018年7月に&nbsp;SOMPO&nbsp;Sprint&nbsp;Team&nbsp;を発足。「グループのDX実現に向け、自らデジタル・プロダクトを開発する」という道へ踏み出しました。
            <br />
            <br />
            SOMPO&nbsp;Sprint&nbsp;Teamは、UI/UXを追求したPoC（Proof&nbsp;of&nbsp;Concept:概念実証）の実施から、その後の本番開発を含めシームレスに行う組織として活動しています。ビジネス・デザイナー・エンジニアが一体となるアジャイルソフトウェア開発手法を用いることにより、新たなサービス・プロダクトを高速で生み出し続けています。
            <br />
            <br />
            このページには、いくつもあるアウトプットの中から、その一部を掲載いたしました。我々が追求する"顧客価値の最大化"、その一端をご覧ください。
          </div>
          <section className={styles.product}>
            <ProductCategoly dataCategory="PRODUCTS" />
          </section>
        </div>
      </SprintLayout>
    </>
  )
}
export default IndexPage
