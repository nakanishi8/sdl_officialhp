import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

const SideMenu = () => {
  return (
    <ul className={styles.sideMenu}>
      <li className={styles.sideMenu__item}>
        <Link to="/message/">MESSAGE</Link>
      </li>
      <li className={styles.sideMenu__item}>
        <Link to="/recruit/people/">PEOPLE</Link>
      </li>
      <li className={styles.sideMenu__item}>
        <Link to="/recruit/environment/">ENVIRONMENT</Link>
      </li>
      <li className={styles.sideMenu__item}>
        <Link to="/recruit/job/">JOB DESCREPTION</Link>
      </li>
      <li className={styles.sideMenu__item}>
        <Link to="/recruit/company/">COMPANY</Link>
      </li>
    </ul>
  )
}
export default SideMenu
