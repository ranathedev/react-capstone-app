import React from 'react'

import Button from 'components/button'

import { ReactComponent as SuccessIcon } from 'assets/success.svg'
import { ReactComponent as FailIcon } from 'assets/fail.svg'

import stl from './DialogBox.module.scss'

const DialogBox = ({ success = true }) => {
  const handleClick = e => {
    e.preventDefault()
    window.location.reload()
  }

  return (
    <div
      className={stl.dialogBox}
      role="alert"
      aria-live="polite"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-message"
    >
      {success ? <SuccessIcon /> : <FailIcon />}
      <h3 id="dialog-title" className={stl.title}>
        {success ? 'Table Reserved Successfully' : 'Reservation Failed'}
      </h3>
      <p id='id="dialog-message"' className={stl.msg}>
        {success
          ? 'Thank you for choosing us. Your reservation was successful!'
          : "We're sorry, but your reservation could not be processed. Please check your information and try again. If the issue persists, contact customer support for assistance."}
      </p>
      <Button
        dataTestId="dialog-btn"
        label={success ? 'Reserve another' : 'Reserver again'}
        onClick={handleClick}
      />
    </div>
  )
}

export default DialogBox
