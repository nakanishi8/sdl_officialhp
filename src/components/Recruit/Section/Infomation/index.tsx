import React from 'react'
import { Link } from 'gatsby'
import { SectionHeadding } from 'components/Recruit/Headding'

import styles from './styles.module.scss'
import image01 from 'images/Recruit/top_message.jpg'
import image02 from 'images/Recruit/top_people.jpg'
import image03 from 'images/Recruit/top_environment.jpg'
import image04 from 'images/Recruit/top_recruit.jpg'
import image05 from 'images/Recruit/top_company.jpg'

const Infomation = () => {
  return (
    <section className={styles.section}>
      <SectionHeadding title={'RECRUIT'} />
      <div className={styles.wrap}>
        <ul className={styles.informationList}>
          <li>
            <Link to="/message/">
              <p>
                <img src={image01} alt="MESSAGE" />
              </p>
              <span>MESSAGE</span>
            </Link>
          </li>
          <li>
            <Link to="/recruit/people/">
              <p>
                <img src={image02} alt="PEOPLE" />
              </p>
              <span>PEOPLE</span>
            </Link>
          </li>
          <li>
            <Link to="/recruit/environment/">
              <p>
                <img src={image03} alt="ENVIRONMENT" />
              </p>
              <span>ENVIRONMENT</span>
            </Link>
          </li>
          <li>
            <Link to="/recruit/job/">
              <p>
                <img src={image04} alt="RECRUIT" />
              </p>
              <span>JOB DESCREPTION</span>
            </Link>
          </li>
          <li>
            <Link to="/recruit/company/">
              <p>
                <img src={image05} alt="COMOANY" />
              </p>
              <span>COMPANY</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Infomation
