import React from 'react'
import Headding from 'components/Home/Headding'
import styles from './styles.module.scss'
import locationLab0 from 'images/location_lab0.jpg'
import locationLab1 from 'images/location_lab1.jpg'
import locationLab2 from 'images/location_lab2.jpg'

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
    }
  ]
}

const Location = ({ data, dataList, title }: Props) => {
  const { JP, EN } = dataList
  const langage = data === 'JP' ? JP : EN
  return (
    <section className={styles.section} id="Location">
      <div className={styles.wrap}>
        <Headding title={title} read={langage.read} />
        {langage.text.map((d: string, i: string | number | undefined) => (
          <p className={styles.sectionText} key={i} dangerouslySetInnerHTML={{ __html: d }} />
        ))}
        {langage &&
          langage.list.map((d, i) => (
            <div key={i} className={styles.lab}>
              <p>
                <img src={[locationLab0, locationLab1, locationLab2][i]} alt={d.title} />
              </p>
              <dl>
                <dt>{d.title}</dt>
                <dd dangerouslySetInnerHTML={{ __html: d.read }} />
              </dl>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Location
