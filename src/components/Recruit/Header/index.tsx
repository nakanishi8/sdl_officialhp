import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import logo from 'images/logo.png'
import { globalHistory } from '@reach/router'
import { Link } from 'gatsby'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'

interface Props {
  menu: boolean
  onClick: () => void
}

const Header = ({ onClick, menu }: Props) => {
  return (
    <header className={styles.root}>
      <h1 className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </h1>
      <nav className={styles.navi}>
        <ul className={clsx(styles.menu, menu && styles.select)}>
          <li>
            <Link to="/message/">MESSAGE</Link>
          </li>
          <li>
            <Link to="/recruit/people/">PEOPLE</Link>
          </li>
          <li>
            <Link to="/recruit/environment/">ENVIRONMENT</Link>
          </li>
          <li>
            <Link to="/recruit/job/">JOB DESCREPTION</Link>
          </li>
          <li>
            <Link to="/recruit/company/">COMPANY</Link>
          </li>
        </ul>

        <ul className={styles.sns}>
          <li className={styles.sns__fa}>
            <FacebookShareButton
              url={`${globalHistory.location.origin}/recruit/`}
              title={'ＳＯＭＰＯホールディングス株式会社　デジタル部門　採用情報'}
            >
              <FacebookIcon size={30} round />
            </FacebookShareButton>
          </li>
          <li className={styles.sns__tw}>
            <TwitterShareButton
              url={`${globalHistory.location.origin}/recruit/`}
              title={'ＳＯＭＰＯホールディングス株式会社　デジタル部門　採用情報'}
            >
              <TwitterIcon size={30} round />
            </TwitterShareButton>
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
