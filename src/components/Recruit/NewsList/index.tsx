import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

interface Data {
  type: string
  text: string
  link: string
}

const dataList = [
  {
    type: 'お知らせ',
    text: '2019/11/19　社員インタビューを更新しました',
    link: '/',
  },
  {
    type: 'お知らせ',
    text: '2019/09/01　採用サイトをリニューアルしました。',
    link: '',
  },
]

const News = () => {
  return (
    <>
      <ul className={styles.newsList}>
        {dataList.map((data: Data, index: number) => {
          return (
            <li key={index}>
              <span>{data.type}</span>
              {data.link ? (
                <p>
                  <Link to={data.link}>{data.text}</Link>
                </p>
              ) : (
                <p>{data.text}</p>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default News
