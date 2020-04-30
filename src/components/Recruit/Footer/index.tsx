import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import Sns from 'components/Recruit/Sns'

import logo from 'images/logo.png'
import logo02 from 'images/logo_holdings.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/recruit/" className={styles.logo}>
        <img src={logo} alt="" />
      </Link>
      <ul>
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
        <li>
          <Link to="/recruit/contact/">お問い合わせ</Link>
        </li>
        <li>
          <Link to="/recruit/privacy/">個人情報保護方針</Link>
        </li>
        {/* <li>
            <Link to="/recruit/sitemap/">サイトマップ</Link>
          </li> */}
      </ul>
      <a href="https://www.sompo-hd.com/" target="_blank" className={styles.holdings}>
        <img src={logo02} alt="" />
      </a>

      <Sns />

      <p className={styles.copy}>Copyright @ Sompo Holdings, Inc. All Rights Reserved</p>
    </footer>
  )
}

export default Footer
