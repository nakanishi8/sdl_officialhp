import React from 'react'
import styles from './styles.module.scss'
import logo from 'images/logo_f.png'
import { Link } from 'gatsby'

interface Props {
  siteTitle: string
}

const Footer = ({ siteTitle }: Props) => {
  return (
    <footer className={styles.root}>
      <Link className={styles.logo} to="/">
        <img src={logo} alt={siteTitle} />
      </Link>
    </footer>
  )
}

export default Footer
