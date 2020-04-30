import React from 'react'
import Headding from 'components/Home/Headding'
import styles from './styles.module.scss'
import advisor from 'images/advisor.jpg'

interface Props {
  dataList: DataList
  data: string
  title: string
}
interface DataList {
  JP: Langage
  EN: Langage
}

interface Langage {
  read: string
  text: string[]
  list: [
    {
      title: string
      read: string
      text: string[]
    }
  ]
}

const AdvisoryMembers = ({ data, dataList, title }: Props) => {
  const { JP, EN } = dataList
  const langage = data === 'JP' ? JP : EN
  return (
    <section className={styles.section} id="Advisory">
      <div className={styles.wrap}>
        <Headding title={title} read={langage.read} />
        {langage.text.map((d: string, i: string | number | undefined) => {
          return (
            <p className={styles.sectionText} key={i} dangerouslySetInnerHTML={{ __html: d }} />
          )
        })}
        <div className={styles.member}>
          <h3 className={styles.member__title}>
            {langage.list[0].title}
            <span>{langage.list[0].read}</span>
          </h3>
          <p className={styles.member__img}>
            <img src={advisor} alt={langage.list[0].title} />
          </p>
          <div className={styles.member__text}>
            <p>{langage.list[0].text[0]}</p>
            <p>{langage.list[0].text[1]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvisoryMembers
