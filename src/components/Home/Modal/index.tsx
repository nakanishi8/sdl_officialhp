import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface Props {
  flg: boolean
  onClose?: () => void
  children: React.ReactNode
}

const Modal = ({ onClose, flg, children }: Props) => {
  return (
    <div className={clsx(flg && styles.isActive, styles.root)}>
      <div className={clsx(styles.modal)}>
        <div onClick={onClose} className={styles.cloase}></div>
        {children}
      </div>
      <div onClick={onClose} className={clsx(styles.overlay)}></div>
    </div>
  )
}
export default Modal
