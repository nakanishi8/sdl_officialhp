import React from 'react'
import SEO from 'components/seo'
import { Link } from 'gatsby'
import clsx from 'clsx'
import styles from './styles.module.scss'

import { Frontmatter, Node } from 'templates/Type'

interface Props {
  frontmatter: Frontmatter
  html: string
  queryData: Node[]
}

const ProductTemplate = ({ frontmatter, html, queryData }: Props) => {
  const tagFlag = (data: Node) =>
    frontmatter.tags &&
    frontmatter.tags
      .map(e => data.node.frontmatter.tags && data.node.frontmatter.tags.some(s => s === e))
      .filter(s => s)
      .indexOf(true) !== -1

  return (
    <>
      <div className={styles.root}>
        <SEO title={frontmatter.title} />
        <p className={styles.image}>
          <img src={frontmatter.image.childImageSharp.fluid.src} alt={frontmatter.title} />
        </p>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <p className={styles.date}>{frontmatter.date}</p>
        <ul className={styles.tagList}>
          {frontmatter.tags && frontmatter.tags.map((tags, index) => <li key={index}>{tags}</li>)}
        </ul>
        <div className={styles.contents} dangerouslySetInnerHTML={{ __html: html }} />
        <h2 className={styles.productTitle}>類似するプロダクト</h2>
        <ul className={styles.list}>
          {queryData.map((data, index) => {
            return tagFlag(data) && index < 4 ? (
              <li key={index}>
                <Link to={data.node.frontmatter.path}>
                  <p className={styles.image}>
                    <img
                      src={data.node.frontmatter.thumbnail.childImageSharp.original.src}
                      alt={data.node.frontmatter.title}
                    />
                  </p>
                  <div className={clsx(styles.text, styles.pc)}>
                    <p>{data.node.frontmatter.title}</p>
                    <p>
                      {data.node.frontmatter.tags &&
                        data.node.frontmatter.tags.map(data => <span>{data}</span>)}
                    </p>
                  </div>
                </Link>
                <div className={clsx(styles.text, styles.sp)}>
                  <p>{data.node.frontmatter.title}</p>
                  <p>
                    {data.node.frontmatter.tags &&
                      data.node.frontmatter.tags.map(data => <span>{data}</span>)}
                  </p>
                </div>
              </li>
            ) : (
              ''
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default ProductTemplate
