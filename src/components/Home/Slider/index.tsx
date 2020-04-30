import React from 'react'
import Slider from 'react-slick'
import clsx from 'clsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import scrollTo from 'gatsby-plugin-smoothscroll'
import styles from './styles.module.scss'

// img
import img01 from 'images/slider/01.jpg'
import img02 from 'images/slider/02.jpg'

interface Props {
  dataList: DataList
  data: string
}
interface DataList {
  JP: Langage
  EN: Langage
}

interface Langage {
  title: string
  text: string
}

const SideMenu = ({ data, dataList }: Props) => {
  const { JP, EN } = dataList
  const langage = data === 'JP' ? JP : EN

  return (
    <div className={clsx(styles.slider, 'p-index')} id="top">
      <Slider
        {...{
          autoplay: true,
          autoplaySpeed: 5000,
          infinite: true,
          speed: 2000,
          fade: true,
          cssEase: 'linear',
        }}
      >
        <div>
          <img src={img01} height="150%" alt="" />
        </div>
        <div>
          <img src={img02} height="150%" alt="" />
        </div>
      </Slider>
      <div className={clsx(styles.slider___main, data === 'EN' && styles.en)}>
        <h2 dangerouslySetInnerHTML={{ __html: langage.title }}></h2>
        <p dangerouslySetInnerHTML={{ __html: langage.text }} />
        <a className={styles.button} onClick={() => scrollTo('#Concept')} />
      </div>
    </div>
  )
}
export default SideMenu
