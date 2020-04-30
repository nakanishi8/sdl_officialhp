import React, { useState, useEffect } from 'react'
import SprintLayout from 'components/Sprint/SprintLayout'
import ContactForm from 'components/Sprint/ContactForm'
// import styles from './styles.module.scss'

const Contact = () => {
  const [name, setName] = useState<null | string>(null)
  const [subject, setSubject] = useState<null | string>(null)
  const [body, setBody] = useState<null | string>(null)
  const letterBody = `
  ${name}様
  ${body}\n
  ----------------------\n
  test
  `

  const onSubmitClick = () =>
    (location.href = `mailto:${
      process.env.REACT_APP_MAIL
    }?subject=${subject}&body=${letterBody.replace(/\n\r?/g, '%0D%0A')}`)

  return (
    <>
      <SprintLayout>
        <ContactForm
          nameChange={e => setName(e.target.value)}
          subjectChange={e => setSubject(e.target.value)}
          bodyChange={e => setBody(e.target.value)}
          onClick={() => onSubmitClick()}
          validation={{
            name: name,
            subject: subject,
            body: body,
            disabled: name && subject && body ? true : false,
          }}
        />
      </SprintLayout>
    </>
  )
}

export default Contact
