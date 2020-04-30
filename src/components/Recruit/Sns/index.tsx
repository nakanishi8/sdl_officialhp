import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { globalHistory } from '@reach/router'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share'

const Sns = () => {
  return (
    <div className={styles.commonBox}>
      <ul className={styles.snsList}>
        <li className={clsx(styles.snsList__item, styles.fs)}>
          <FacebookShareButton
            url={`${globalHistory.location.origin}/recruit/`}
            title={'ＳＯＭＰＯホールディングス株式会社　デジタル部門　採用情報'}
          >
            <FacebookIcon size={35} round />
          </FacebookShareButton>
        </li>
        <li className={clsx(styles.snsList__item, styles.tw)}>
          <TwitterShareButton
            url={`${globalHistory.location.origin}/recruit/`}
            title={'ＳＯＭＰＯホールディングス株式会社　デジタル部門　採用情報'}
          >
            <TwitterIcon size={35} round />
          </TwitterShareButton>
        </li>
        <li className={clsx(styles.snsList__item, styles.line)}>
          <LineShareButton
            url={`${globalHistory.location.origin}/recruit/`}
            title={'ＳＯＭＰＯホールディングス株式会社　デジタル部門　採用情報'}
          >
            <LineIcon size={35} round />
          </LineShareButton>
        </li>
        <li className={clsx(styles.snsList__item, styles.linkedin)}>
          <LinkedinShareButton
            url={`${globalHistory.location.origin}/recruit/`}
            title={'ＳＯＭＰＯホールディングス株式会社　デジタル部門　採用情報'}
          >
            <LinkedinIcon size={35} round />
          </LinkedinShareButton>
        </li>
      </ul>
    </div>
  )
}

export default Sns
