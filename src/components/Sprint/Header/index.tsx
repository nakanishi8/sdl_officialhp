import React from 'react'
import clsx from 'clsx'
import scrollTo from 'gatsby-plugin-smoothscroll'
import styles from './styles.module.scss'
import logo from 'images/logo_h.png'
import { Link } from 'gatsby'

interface Props {
  siteTitle?: string
  onClick: () => void
  menu: boolean
}

const Header = ({ siteTitle, onClick, menu }: Props) => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <a onClick={() => scrollTo('#top')}>
          <img src={logo} alt={siteTitle} />
        </a>
      </div>
      <nav className={styles.navi}>
        <ul className={clsx(styles.menu, menu && styles.select)}>
          <li className={styles.item}>
            <Link to="/">Products</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sprint/member/">Member</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <div className={clsx(styles.menuBtn, menu && styles.select)} onClick={onClick}>
          <span></span>
        </div>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
