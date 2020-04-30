import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

import { Query } from 'utils/Template/data'
import { Node } from 'templates/Type'

interface Props {
  dataCategory: string
}

const RecruitCategolyTemplate = ({ dataCategory }: Props) => {
  const queryData: Node[] = Query(dataCategory)

  const compare = queryData.sort(
    (a, b) =>
      Number(
        a.node.frontmatter.path
          .split('id=')
          .slice(-1)[0]
          .split('/')[0]
      ) -
      Number(
        b.node.frontmatter.path
          .split('id=')
          .slice(-1)[0]
          .split('/')[0]
      )
  )

  return (
    <>
      <ul className={styles.galleryList}>
        {compare.map((data, index) => (
          <li key={index} className={styles.galleryList__item}>
            <Link to={data.node.frontmatter.path}>
              <div>
                <p className={styles.galleryList__img}>
                  <img
                    src={data.node.frontmatter.thumbnail.childImageSharp.original.src}
                    alt={data.node.frontmatter.title}
                  />
                </p>
                <p className={styles.galleryList__text}>{data.node.frontmatter.title}</p>
              </div>
              <p className={styles.galleryList__details}>詳細</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default RecruitCategolyTemplate
