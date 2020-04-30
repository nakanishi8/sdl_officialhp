import React from 'react'
import { Link } from 'gatsby'
import Headding from 'components/Home/Headding'
import lab from 'videos/sompo_digital_lab.mp4'
import styles from './styles.module.scss'

interface Props {
  dataList: DataList
  data: string
  title: string
}

interface DataList {
  JP: {
    read: string
    text: string[]
    position: string[]
    button: string
  }
  EN: {
    read: string
    text: string[]
    position: string[]
    button: string
  }
}

const Recruit = ({ data, dataList, title }: Props) => {
  const { JP, EN } = dataList
  const langage = data === 'JP' ? JP : EN

  return (
    <section className={styles.section} id="Recruit">
      <div className={styles.wrap}>
        <Headding title={title} read={langage.read} />
        {langage.text.map((d: string, i: string | number | undefined) => (
          <p className={styles.sectionText} key={i} dangerouslySetInnerHTML={{ __html: d }} />
        ))}
        <div className={styles.movie}>
          <video width="100%" controls controlslist="nodownload" playsinline className="GTM-video">
            <source src={lab} type="video/mp4" />
          </video>
        </div>
        {langage.position && (
          <div className={styles.recruitPosition}>
            <h3>募集ポジション</h3>
            <ul>
              {langage.position.map((data: string, index: number) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/recruit/" className={styles.recruitButton}>
          {langage.button}
        </Link>
      </div>
    </section>
  )
}

export default Recruit
