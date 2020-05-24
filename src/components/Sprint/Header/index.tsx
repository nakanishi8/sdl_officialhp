import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import logo from 'images/logo_h.png'

interface Props {
  siteTitle?: string
}

const Header = ({ siteTitle }: Props) => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <Link to="/sprint/">
          <img src={logo} alt={siteTitle} />
        </Link>
      </div>
      {/* <nav className={styles.navi}>
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
      </nav> */}
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
