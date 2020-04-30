import React from 'react'
import Headding from 'components/Home/Headding'
import styles from './styles.module.scss'

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
      text: string
      link: string
    }
  ]
}

const NewsRelease = ({ data, dataList, title }: Props) => {
  const { JP, EN } = dataList
  const langage = data === 'JP' ? JP : EN
  return (
    <section className={styles.section} id="News">
      <div className={styles.wrap}>
        <Headding title={title} read={langage.read} />
        {langage.text.map((d: string, i: string | number | undefined) => (
          <p className={styles.sectionText} key={i} dangerouslySetInnerHTML={{ __html: d }} />
        ))}
        <ul className={styles.list}>
          {langage &&
            langage.list.map((d, i) => (
              <li key={i}>
                <dl>
                  <dt>{d.title}</dt>
                  <dd>
                    <a href={d.link} target="_blank">
                      {d.text}
                    </a>
                  </dd>
                </dl>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default NewsRelease
