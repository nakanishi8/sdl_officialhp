import React from 'react'
import styles from './styles.module.scss'

import { Query } from 'utils/Template/data'
import { Node } from 'templates/Type'
import {
  ProductCategolyList,
  ProductCategolyListOneQuarter,
} from 'components/Sprint/ProductCategolyList'

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
  console.log(compare)

  return (
    <>
      <ul className={styles.galleryList}>
        <ProductCategolyList compare={compare[0]} />
        <ProductCategolyList compare={compare[1]} />
        <ProductCategolyList compare={compare[2]} />
        {/* 1/4 */}
        <ProductCategolyListOneQuarter
          compare1={compare[3]}
          compare2={compare[4]}
          compare3={compare[5]}
          compare4={compare[6]}
        />
        {/* 1/4 終わり */}
        <ProductCategolyList compare={compare[7]} />
        <ProductCategolyList compare={compare[8]} />
        <ProductCategolyList compare={compare[9]} />
        <ProductCategolyList compare={compare[10]} />
      </ul>
    </>
  )
}
export default ProductCategolyTemplate
