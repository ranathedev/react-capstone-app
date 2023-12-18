import React from 'react'

import Button from 'components/button'

import { ReactComponent as SuccessIcon } from 'assets/success.svg'
import { ReactComponent as FailIcon } from 'assets/fail.svg'

import stl from './DialogBox.module.scss'

const DialogBox = ({ success = true, handleClick }) => {
  const onClickHandler = e => {
    e.preventDefault()
    handleClick()
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
        label={success ? 'See Details' : 'Reserve again'}
        onClick={onClickHandler}
      />
    </div>
  )
}

export default DialogBox
