import React from 'react'
import { SectionHeadding } from 'components/Recruit/Headding'
import NewsList from 'components/Recruit/NewsList'
import Button from 'components/Recruit/Button'

import styles from './styles.module.scss'

const News = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeadding title={'NEWS'} />
        <NewsList />
      </div>
      <p>
        <Button link="/news" text="一覧を見る" />
      </p>
    </section>
  )
}

export default News
