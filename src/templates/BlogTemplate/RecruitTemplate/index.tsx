import React from 'react'
import SEO from 'components/seo'
import clsx from 'clsx'
import styles from './styles.module.scss'

// component
import { Headding } from 'components/Recruit/Headding'
import Breadcrumbs from 'components/Recruit/Breadcrumbs'
import SideMenu from 'components/Recruit/SideMenu'
import Pagination from 'components/Recruit/Pagination'
import { Frontmatter, Node } from 'templates/Type'

interface Breadcrumbs {
  text: string
  link: string
}

interface Props {
  frontmatter: Frontmatter
  html: string
  queryData: Node[]
}

const RecruitTemplate = ({ frontmatter, html, queryData }: Props) => {
  const breadcrumbs = [
    {
      text: frontmatter.title,
      link: '',
    },
  ]
  const blogBreadcrumbs = [
    {
      text: frontmatter.categoryslug,
      link: frontmatter.categoryslug !== 'MESSAGE' ? frontmatter.categoryslug : '',
    },
  ]

  const compare = queryData.sort(
    (a, b) =>
      Number(a.node.frontmatter.path.split('/').slice(-1)[0]) -
      Number(b.node.frontmatter.path.split('/').slice(-1)[0])
  )

  return (
    <>
      <SEO title={frontmatter.title} />
      <Headding title={frontmatter.categoryslug} />
      <Breadcrumbs dataList={breadcrumbs} blog={blogBreadcrumbs} />
      <div className={styles.contents}>
        <div className={styles.left}>
          <div className={styles.article}>
            {frontmatter.categoryslug !== 'MESSAGE' && (
              <div
                className={clsx(styles.articleMainvisual, [
                  frontmatter.categoryslug === 'PEOPLE' && styles.people,
                ])}
              >
                {frontmatter.categoryslug === 'PEOPLE' && (
                  <img
                    src={frontmatter.image.childImageSharp.original.src}
                    alt={frontmatter.title}
                  />
                )}

                <h2>{frontmatter.title}</h2>
              </div>
            )}
            <div
              className={clsx(
                styles.article__content,
                frontmatter.categoryslug === 'MESSAGE' && styles.message
              )}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          {frontmatter.categoryslug !== 'MESSAGE' && (
            <Pagination data={compare} frontmat={frontmatter} />
          )}
        </div>
        <div className={styles.right}>
          <SideMenu />
        </div>
      </div>
    </>
  )
}
export default RecruitTemplate
