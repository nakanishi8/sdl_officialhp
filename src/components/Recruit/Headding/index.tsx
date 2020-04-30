import React from 'react'
import styles from './styles.module.scss'

interface Props {
  title: string
}

export const SectionHeadding = ({ title }: Props) => {
  return (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </>
  )
}

export const Headding = ({ title }: Props) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
    </>
  )
}
