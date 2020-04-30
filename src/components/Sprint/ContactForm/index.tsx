import React from 'react'
import styles from './styles.module.scss'

interface Props {
  nameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  subjectChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  bodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onClick: () => void
  validation: Validation
}

interface Validation {
  name: null | string
  subject: null | string
  body: null | string
  disabled: boolean
}

const ContactForm = ({ nameChange, subjectChange, bodyChange, onClick, validation }: Props) => {
  const { name, subject, body, disabled } = validation
  return (
    <>
      <form name="contact" method="POST" action="">
        <div>
          <label>
            氏名
            {!name && <p>name is required</p>}
            <input type="text" name="name" onChange={nameChange} />
          </label>
        </div>
        <div>
          <label>
            件名
            {!subject && <p>subject is required</p>}
            <input type="text" name="subject" onChange={subjectChange} />
          </label>
        </div>
        <div>
          <label>
            お問い合わせ内容
            {!body && <p>body is required</p>}
            <textarea name="body" onChange={bodyChange}></textarea>
          </label>
        </div>
        <p onClick={onClick} className="GTM-contactForm">
          送信
        </p>
      </form>
    </>
  )
}

export default ContactForm
