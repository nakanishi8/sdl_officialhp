import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import { globalHistory } from '@reach/router'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'

import logo from 'images/logo.png'
import logo02 from 'images/logo_holdings.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/sprint/" className={styles.logo}>
        <img src={logo} alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/sprint/">Top</Link>
        </li>
        <li>
          <Link to="/recruit/">Recruit</Link>
        </li>
      </ul>
      <a href="https://www.sompo-hd.com/" target="_blank" className={styles.holdings}>
        <img src={logo02} alt="" />
      </a>

      <ul className={styles.sns}>
        <li>
          <FacebookShareButton
            url={`${globalHistory.location.origin}`}
            title={
              'SOMPO Digital Labは、東京、シリコンバレーとテルアビブの3拠点をベースに、新たな「安心・安全・健康」の体験価値を創造していきます。'
            }
          >
            <FacebookIcon size={35} round />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={`${globalHistory.location.origin}`}
            title={
              'SOMPO Digital Labは、東京、シリコンバレーとテルアビブの3拠点をベースに、新たな「安心・安全・健康」の体験価値を創造していきます。'
            }
          >
            <TwitterIcon size={35} round />
          </TwitterShareButton>
        </li>
      </ul>

      <p className={styles.copy}>Copyright @ Sompo Holdings, Inc. All Rights Reserved</p>
    </footer>
  )
}

export default Footer
