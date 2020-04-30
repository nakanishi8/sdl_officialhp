import React, { useState } from 'react'
import Headding from 'components/Home/Headding'
import Modal from 'components/Home/Modal'
import styles from './styles.module.scss'
import clsx from 'clsx'

import about01 from 'images/about_service.jpg'
import about02 from 'images/about_service2.jpg'
import about03 from 'images/about_service3.jpg'
import about04 from 'images/about_service4.jpg'

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
  about: {
    title: string
    read: string
    underText: string
    section: {
      title: string
      text: string
    }
    section02: {
      title: string
      text: string
    }
    section03: {
      title: string
      text: string
    }
    section04: {
      title: string
      text: string
    }
  }
  mission: {
    title: string
    text: string
  }
}

const Concept = ({ data, dataList, title }: Props) => {
  const { JP, EN } = dataList
  const langage = data === 'JP' ? JP : EN
  const [aboutModal, setAboutModal] = useState(false)
  const [missionModal, setMissionModal] = useState(false)

  return (
    <section className={styles.section} id="Concept">
      <div className={styles.wrap}>
        <Headding title={title} read={langage.read} />
        {langage.text.map((d: string, i: string | number | undefined) => (
          <p className={styles.sectionText} key={i} dangerouslySetInnerHTML={{ __html: d }} />
        ))}
        <ul className={styles.list}>
          <li>
            <div onClick={() => setAboutModal(true)} className={styles.inner}>
              <p>About SOMPO</p>
              <span></span>
            </div>
            <Modal flg={aboutModal} onClose={() => setAboutModal(false)}>
              <div className={clsx(styles.modalContents, styles.about)}>
                <h2>{langage.about.title}</h2>
                <p className={styles.read}>{langage.about.read}</p>
                <ul>
                  <li>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: langage.about.section.title,
                      }}
                    />
                    <div className={styles.contents}>
                      <p>{langage.about.section.text}</p>
                      <img src={about01} alt="" />
                    </div>
                  </li>
                  <li>
                    <h3>{langage.about.section02.title}</h3>
                    <div className={styles.contents}>
                      <p>{langage.about.section02.text}</p>
                      <img src={about02} alt="" />
                    </div>
                  </li>
                  <li>
                    <h3>{langage.about.section03.title}</h3>
                    <div className={styles.contents}>
                      <p>{langage.about.section03.text}</p>
                      <img src={about03} alt="" />
                    </div>
                  </li>
                  <li>
                    <h3>{langage.about.section04.title}</h3>
                    <div className={styles.contents}>
                      <p>{langage.about.section04.text}</p>
                      <img src={about04} alt="" />
                    </div>
                  </li>
                </ul>
                <p className={styles.underText}>
                  {langage.about.underText}
                  <br />
                  <a href="https://www.sompo-hd.com/group/" target="_blank">
                    https://www.sompo-hd.com/group/ >>
                  </a>
                </p>
              </div>
            </Modal>
          </li>
          <li>
            <div onClick={() => setMissionModal(true)} className={styles.inner}>
              <p>Our Mission</p>
              <span></span>
            </div>
            <Modal flg={missionModal} onClose={() => setMissionModal(false)}>
              <div className={clsx(styles.modalContents, styles.mission)}>
                <h2>{langage.mission.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: langage.mission.text }} />
              </div>
            </Modal>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Concept
