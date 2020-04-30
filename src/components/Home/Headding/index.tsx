import React from 'react'
import styles from './styles.module.scss'

interface Props {
  title: string
  read: string
}

const Headding = ({ title, read }: Props) => {
  return (
    <>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionRead}>{read}</p>
    </>
  )
}

export default Headding
