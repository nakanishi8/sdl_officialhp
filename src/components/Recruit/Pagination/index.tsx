import React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'
import { Node, Frontmatter } from 'templates/Type'

import styles from './styles.module.scss'

interface Props {
  data: Node[]
  frontmat: Frontmatter
}

const Pagination = ({ data, frontmat }: Props) => {
  const categoryQuery = data
    .map(v => (v.node.frontmatter.categoryslug === frontmat.categoryslug ? v : ''))
    .filter(v => v)

  const arry = frontmat.path.split('/')
  const arrySlug = frontmat.path.split('/')
  const pagination = (i: number) => {
    arry[arry.length - 2] = `id=${i}`
    return arry
  }
  return (
    <>
      <div className={styles.pagination}>
        {Number(
          arrySlug
            .slice(-2)[0]
            .split('id=')
            .slice(-1)[0]
        ) > 1 && (
          <Link
            className={clsx(styles.paginationLink, styles.back)}
            to={pagination(
              Number(
                arrySlug
                  .slice(-2)[0]
                  .split('id=')
                  .slice(-1)[0]
              ) - 1
            ).join('/')}
          >
            前へ
          </Link>
        )}

        <Link
          className={clsx(styles.paginationLink, styles.list)}
          to={`/recruit/${arry[arry.length - 3]}/`}
        >
          一覧
        </Link>

        {Number(
          arrySlug
            .slice(-2)[0]
            .split('id=')
            .slice(-1)[0]
        ) < categoryQuery.length && (
          <Link
            className={clsx(styles.paginationLink, styles.next)}
            to={pagination(
              Number(
                arrySlug
                  .slice(-2)[0]
                  .split('id=')
                  .slice(-1)[0]
              ) + 1
            ).join('/')}
          >
            次へ
          </Link>
        )}
      </div>
    </>
  )
}

export default Pagination
