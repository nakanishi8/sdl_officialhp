import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import clsx from 'clsx'

import { Query } from 'utils/Template/data'
import { Node } from 'templates/Type'

interface Props {
  dataCategory: string
}

const ProductCategolyTemplate = ({ dataCategory }: Props) => {
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
        {compare.map((data: Node, index: number) => {
          return 3 <= index && index <= 6 ? (
            3 === index && (
              <li key={index} className={styles.splitItem}>
                {console.log(compare)}
                <div>
                  <Link to={compare[3].node.frontmatter.path}>
                    <p className={styles.image}>
                      <img
                        src={compare[3].node.frontmatter.thumbnail.childImageSharp.original.src}
                        alt={compare[3].node.frontmatter.title}
                      />
                    </p>
                    <div className={clsx(styles.text, styles.pc)}>
                      <p>{compare[3].node.frontmatter.title}</p>
                      <p>
                        {compare[3].node.frontmatter.tags &&
                          compare[3].node.frontmatter.tags.map(data => <span>{data}</span>)}
                      </p>
                    </div>
                  </Link>
                  <div className={clsx(styles.text, styles.sp)}>
                    <p>{compare[3].node.frontmatter.title}</p>
                    <p>
                      {compare[3].node.frontmatter.tags &&
                        compare[3].node.frontmatter.tags.map(data => <span>{data}</span>)}
                    </p>
                  </div>
                </div>
                <div>
                  <Link to={compare[4].node.frontmatter.path}>
                    <p className={styles.image}>
                      <img
                        src={compare[4].node.frontmatter.thumbnail.childImageSharp.original.src}
                        alt={compare[4].node.frontmatter.title}
                      />
                    </p>
                    <div className={clsx(styles.text, styles.pc)}>
                      <p>{compare[4].node.frontmatter.title}</p>
                      <p>
                        {compare[4].node.frontmatter.tags &&
                          compare[4].node.frontmatter.tags.map(data => <span>{data}</span>)}
                      </p>
                    </div>
                  </Link>
                  <div className={clsx(styles.text, styles.sp)}>
                    <p>{compare[4].node.frontmatter.title}</p>
                    <p>
                      {compare[4].node.frontmatter.tags &&
                        compare[4].node.frontmatter.tags.map(data => <span>{data}</span>)}
                    </p>
                  </div>
                </div>
                <div>
                  <Link to={compare[5].node.frontmatter.path}>
                    <p className={styles.image}>
                      <img
                        src={compare[5].node.frontmatter.thumbnail.childImageSharp.original.src}
                        alt={compare[5].node.frontmatter.title}
                      />
                    </p>
                    <div className={clsx(styles.text, styles.pc)}>
                      <p>{compare[5].node.frontmatter.title}</p>
                      <p>
                        {compare[5].node.frontmatter.tags &&
                          compare[5].node.frontmatter.tags.map(data => <span>{data}</span>)}
                      </p>
                    </div>
                  </Link>
                  <div className={clsx(styles.text, styles.sp)}>
                    <p>{compare[5].node.frontmatter.title}</p>
                    <p>
                      {compare[5].node.frontmatter.tags &&
                        compare[5].node.frontmatter.tags.map(data => <span>{data}</span>)}
                    </p>
                  </div>
                </div>
                <div>
                  <Link to={compare[6].node.frontmatter.path}>
                    <p className={styles.image}>
                      <img
                        src={compare[6].node.frontmatter.thumbnail.childImageSharp.original.src}
                        alt={compare[6].node.frontmatter.title}
                      />
                    </p>
                    <div className={clsx(styles.text, styles.pc)}>
                      <p>{compare[6].node.frontmatter.title}</p>
                      <p>
                        {compare[6].node.frontmatter.tags &&
                          compare[6].node.frontmatter.tags.map(data => <span>{data}</span>)}
                      </p>
                    </div>
                  </Link>
                  <div className={clsx(styles.text, styles.sp)}>
                    <p>{compare[6].node.frontmatter.title}</p>
                    <p>
                      {compare[6].node.frontmatter.tags &&
                        compare[6].node.frontmatter.tags.map(data => <span>{data}</span>)}
                    </p>
                  </div>
                </div>
              </li>
            )
          ) : (
            <li key={index}>
              <div>
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
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default ProductCategolyTemplate
