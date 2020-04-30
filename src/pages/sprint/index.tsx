import React from 'react'
import SprintLayout from 'components/Sprint/SprintLayout'
import SEO from 'components/seo'
import ProductCategoly from 'templates/Categoly/ProductCategoly'
import styles from './styles.module.scss'
import lab from 'images/1100x620.png'

const IndexPage = () => {
  return (
    <>
      <SprintLayout>
        <SEO title="Sprint" />
        <div className={styles.root}>
          <div className={styles.mainVisual}>
            <img src={lab} alt="SOMPO" />
          </div>
          <h1 className={styles.title}>XXXXXXXXXXXXX</h1>
          <div className={styles.read}>
            We are Takram, a global design innovation studio.
            <br />
            We partner with forward-thinking people and organisations
            <br /> to create transformative products, services, brands and ideas.
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
