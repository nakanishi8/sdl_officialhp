import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

interface Props {
  link: string
  text: string
  flg?: string
}

const Button = ({ link, text, flg }: Props) => {
  return (
    <>
      {flg === 'outside' ? (
        <a href={link} className={styles.button} target="_brank">
          {text}
        </a>
      ) : (
        <Link to={link} className={styles.button}>
          {text}
        </Link>
      )}
    </>
  )
}

export default Button
