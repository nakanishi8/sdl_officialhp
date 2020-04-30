import React, { ReactChild, useState } from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

interface Props {
  title: string
  children?: ReactChild
}
const Accordion: React.FC<Props> = ({ title, children }) => {
  const [accordion, setAccordion] = useState(false)

  const onClick = () => (accordion ? setAccordion(false) : setAccordion(true))
  return (
    <>
      <p onClick={onClick} className={styles.accordion__title}>
        {title}
        <span className={accordion && styles.active}></span>
      </p>
      <div>
        <div className={clsx(styles.accordion__detail, accordion && styles.accordion__active)}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Accordion
