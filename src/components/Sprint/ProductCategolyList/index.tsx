import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import { Node } from 'templates/Type'
import styles from './styles.module.scss'

interface ProductCategolyListProps {
  compare: Node
}

export const ProductCategolyList = ({ compare }: ProductCategolyListProps) => {
  return (
    <>
      <li className={styles.galleryItem}>
        <div>
          <Link to={compare.node.frontmatter.path}>
            <p className={styles.image}>
              <img
                src={compare.node.frontmatter.thumbnail.childImageSharp.original.src}
                alt={compare.node.frontmatter.title}
              />
            </p>
            <div className={clsx(styles.text, styles.pc)}>
              <p>{compare.node.frontmatter.title}</p>
            </div>
          </Link>
        </div>
      </li>
    </>
  )
}

interface ProductCategolyListOneQuarterProps {
  compare1: Node
  compare2: Node
  compare3: Node
  compare4: Node
}

export const ProductCategolyListOneQuarter = ({
  compare1,
  compare2,
  compare3,
  compare4,
}: ProductCategolyListOneQuarterProps) => {
  return (
    <>
      <li className={clsx(styles.splitItem, styles.galleryItem)}>
        <div>
          <Link to={compare1.node.frontmatter.path}>
            <p className={styles.image}>
              <img
                src={compare1.node.frontmatter.thumbnail.childImageSharp.original.src}
                alt={compare1.node.frontmatter.title}
              />
            </p>
            <div className={clsx(styles.text, styles.pc)}>
              <p>{compare1.node.frontmatter.title}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={compare2.node.frontmatter.path}>
            <p className={styles.image}>
              <img
                src={compare2.node.frontmatter.thumbnail.childImageSharp.original.src}
                alt={compare2.node.frontmatter.title}
              />
            </p>
            <div className={clsx(styles.text, styles.pc)}>
              <p>{compare2.node.frontmatter.title}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={compare3.node.frontmatter.path}>
            <p className={styles.image}>
              <img
                src={compare3.node.frontmatter.thumbnail.childImageSharp.original.src}
                alt={compare3.node.frontmatter.title}
              />
            </p>
            <div className={clsx(styles.text, styles.pc)}>
              <p>{compare3.node.frontmatter.title}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={compare4.node.frontmatter.path}>
            <p className={styles.image}>
              <img
                src={compare4.node.frontmatter.thumbnail.childImageSharp.original.src}
                alt={compare4.node.frontmatter.title}
              />
            </p>
            <div className={clsx(styles.text, styles.pc)}>
              <p>{compare4.node.frontmatter.title}</p>
            </div>
          </Link>
        </div>
      </li>
    </>
  )
}
