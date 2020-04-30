import React from 'react'
import SprintLayout from 'components/Sprint/SprintLayout'
import SEO from 'components/seo'
import { SprintMembers } from 'utils/SprintMember'
import styles from './styles.module.scss'

const Member = () => {
  return (
    <>
      <SprintLayout>
        <SEO title="Sprint member" />
        <div className={styles.root}>
          <div className={styles.mainVisual}></div>
          <h1 className={styles.title}>Members</h1>
          <p className={styles.read}>
            We are Takram, a global design innovation studio.
            <br />
            We partner with forward-thinking people and organisations
            <br />
            to create transformative products, services, brands and ideas.
          </p>
          <section className={styles.contents}>
            <ul>
              {SprintMembers.map(({ name, read, image, text }, index: number) => (
                <li key={index}>
                  <p className={styles.image}>
                    <img src={image} alt={name} />
                  </p>
                  <h2>{name}</h2>
                  <h3>{read}</h3>
                  <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>
          </section>
          <h2 className={styles.processTitle}>開発プロセス</h2>
          <section className={styles.process}></section>
        </div>
      </SprintLayout>
    </>
  )
}
export default Member
