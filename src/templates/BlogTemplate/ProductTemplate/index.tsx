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
  // Another product
  const pathID = Number(
    frontmatter.path
      .split('/')
      .slice(-2)[0]
      .split('id=')
      .slice(-1)[0]
  )
  const compare = queryData.sort(
    (a, b) =>
      Number(
        a.node.frontmatter.path
          .split('/')
          .slice(-2)[0]
          .split('id=')
          .slice(-1)[0]
      ) -
      Number(
        b.node.frontmatter.path
          .split('/')
          .slice(-2)[0]
          .split('id=')
          .slice(-1)[0]
      )
  )

  const next = compare.length === pathID ? compare[0] : compare[pathID]
  const second =
    compare.length === pathID
      ? compare[1]
      : compare.length === pathID + 1
      ? compare[0]
      : compare[pathID + 1]
  const third =
    compare.length === pathID
      ? compare[2]
      : compare.length === pathID + 1
      ? compare[1]
      : compare.length === pathID + 2
      ? compare[0]
      : compare[pathID + 2]
  const back = pathID === 1 ? compare[Number(compare.length - 1)] : compare[pathID - 2]

  return (
    <>
      <div className={styles.root}>
        <SEO title={frontmatter.title} />
        <p className={styles.image}>
          <img src={frontmatter.image.childImageSharp.original.src} alt={frontmatter.title} />
        </p>
        <h2 className={styles.subtitle}>{frontmatter.subtitle}</h2>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <p className={styles.date}>{frontmatter.date}</p>
        <div className={styles.contents} dangerouslySetInnerHTML={{ __html: html }} />
        <ul className={styles.contents}>
          {frontmatter.contents.map((content, index) => (
            <li key={index}>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
              <p className={styles.image}>
                <img src={content.image.childImageSharp.original.src} />
              </p>
            </li>
          ))}
        </ul>
        <h2 className={styles.productTitle}>別のプロダクトを見る</h2>
        <ul className={styles.list}>
          <li>
            <div>
              <Link to={back.node.frontmatter.path}>
                <p className={styles.image}>
                  <img
                    src={back.node.frontmatter.thumbnail.childImageSharp.original.src}
                    alt={back.node.frontmatter.title}
                  />
                </p>
                <div className={clsx(styles.text, styles.pc)}>
                  <p>{back.node.frontmatter.title}</p>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={next.node.frontmatter.path}>
                <p className={styles.image}>
                  <img
                    src={next.node.frontmatter.thumbnail.childImageSharp.original.src}
                    alt={next.node.frontmatter.title}
                  />
                </p>
                <div className={clsx(styles.text, styles.pc)}>
                  <p>{next.node.frontmatter.title}</p>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={second.node.frontmatter.path}>
                <p className={styles.image}>
                  <img
                    src={second.node.frontmatter.thumbnail.childImageSharp.original.src}
                    alt={second.node.frontmatter.title}
                  />
                </p>
                <div className={clsx(styles.text, styles.pc)}>
                  <p>{second.node.frontmatter.title}</p>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={third.node.frontmatter.path}>
                <p className={styles.image}>
                  <img
                    src={third.node.frontmatter.thumbnail.childImageSharp.original.src}
                    alt={third.node.frontmatter.title}
                  />
                </p>
                <div className={clsx(styles.text, styles.pc)}>
                  <p>{third.node.frontmatter.title}</p>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
export default ProductTemplate
