import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

interface Props {
  dataList: DataList[]
  blog?: DataList[]
}

interface DataList {
  text: string
  link: string | null
}

const Breadcrumbs = ({ dataList, blog }: Props) => {
  return (
    <ul className={styles.breadcrumbsList}>
      <li className={styles.breadcrumbsList__item}>
        <Link to="/recruit/">採用情報</Link>
      </li>
      {blog
        ? blog.map((data: DataList, index: number) => {
            return data.link ? (
              <li className={styles.breadcrumbsList__item} key={index}>
                <Link to={`/recruit/${data.link.toLowerCase()}/`}>{data.text}</Link>
              </li>
            ) : (
              <li className={styles.breadcrumbsList__item} key={index}>
                {data.text}
              </li>
            )
          })
        : ''}
      {dataList.map((data: DataList, index: number) => {
        return (
          data.text && (
            <li className={styles.breadcrumbsList__item} key={index}>
              {data.link ? (
                <>
                  <Link to={data.link}>{data.text}</Link>
                </>
              ) : (
                <>{data.text}</>
              )}
            </li>
          )
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
