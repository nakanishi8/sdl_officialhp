import React from 'react'
import clsx from 'clsx'
import scrollTo from 'gatsby-plugin-smoothscroll'
import styles from './styles.module.scss'
import logo from 'images/logo.png'
import { Link } from 'gatsby'
import { globalHistory } from '@reach/router'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'

interface Props {
  siteTitle?: string
  data: string
  menu: boolean
  onClick: () => void
}

const Header = ({ siteTitle, data, onClick, menu }: Props) => {
  return (
    <header className={styles.root}>
      <h1 className={styles.logo}>
        <a onClick={() => scrollTo('#top')}>
          <img src={logo} alt={siteTitle} />
        </a>
      </h1>
      <nav className={styles.navi}>
        <ul className={clsx(styles.menu, menu && styles.select)}>
          <li>
            <a onClick={() => scrollTo('#Concept')}>Concept</a>
          </li>
          <li>
            <a onClick={() => scrollTo('#News')}>News</a>
          </li>
          <li>
            <a onClick={() => scrollTo('#Location')}>Location</a>
          </li>
          <li>
            <a onClick={() => scrollTo('#Advisory')}>Advisory members</a>
          </li>
          <li>
            <a onClick={() => scrollTo('#Recruit')}>Recruit</a>
          </li>
        </ul>

        <ul className={styles.sns}>
          <li className={styles.sns__fa}>
            <FacebookShareButton
              url={`${globalHistory.location.origin}`}
              title={
                'SOMPO Digital Labは、東京、シリコンバレーとテルアビブの3拠点をベースに、新たな「安心・安全・健康」の体験価値を創造していきます。'
              }
            >
              <FacebookIcon size={28} round />
            </FacebookShareButton>
          </li>
          <li className={styles.sns__tw}>
            <TwitterShareButton
              url={`${globalHistory.location.origin}`}
              title={
                'SOMPO Digital Labは、東京、シリコンバレーとテルアビブの3拠点をベースに、新たな「安心・安全・健康」の体験価値を創造していきます。'
              }
            >
              <TwitterIcon size={28} round />
            </TwitterShareButton>
          </li>
        </ul>

        <ul className={styles.lang}>
          <li className={data === 'JP' && styles.current}>
            <Link to="/">JP</Link>
          </li>
          <li className={data === 'EN' && styles.current}>
            <Link to="/en/">EN</Link>
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
