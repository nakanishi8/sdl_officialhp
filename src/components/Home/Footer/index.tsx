import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { globalHistory } from '@reach/router'
import styles from './styles.module.scss'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'

import logo from 'images/logo.png'
import logo02 from 'images/logo_holdings.png'
import logo02En from 'images/logo_holdings_en.png'

interface Props {
  data: string
}

const Footer = ({ data }: Props) => {
  return (
    <footer className={styles.footer}>
      <a onClick={() => scrollTo('#top')} className={styles.logo}>
        <img src={logo} alt="" />
      </a>
      <ul>
        <li>
          <a onClick={() => scrollTo('#top')}>Top</a>
        </li>
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
      {data === 'JP' ? (
        <a href="https://www.sompo-hd.com/" target="_blank" className={styles.holdings}>
          <img src={logo02} alt="" />
        </a>
      ) : (
        <a href="https://www.sompo-hd.com/en/" target="_blank" className={styles.holdings}>
          <img src={logo02En} alt="" />
        </a>
      )}
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
      <p className={styles.copy}>Copyright©2016-2020 Sompo Holdings, Inc. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
