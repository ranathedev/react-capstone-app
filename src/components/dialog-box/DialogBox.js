import React from 'react'

import Button from 'components/button'

import { ReactComponent as SuccessIcon } from 'assets/success.svg'
import { ReactComponent as FailIcon } from 'assets/fail.svg'

import stl from './DialogBox.module.scss'

const DialogBox = ({ success = true, setShow }) => {
  return (
    <div className={stl.dialogBox}>
      {success ? <SuccessIcon /> : <FailIcon />}
      <h3 className={stl.title}>
        {success ? 'Table Reserved Successfully' : 'Reservation Failed'}
      </h3>
      <p className={stl.msg}>
        {success
          ? 'Thank you for choosing us. Your reservation was successful!'
          : "We're sorry, but your reservation could not be processed. Please check your information and try again. If the issue persists, contact customer support for assistance."}
      </p>
      <Button
        label={success ? 'Reserve another' : 'Reserver again'}
        onClick={() => setShow(false)}
      />
    </div>
  )
}

export default DialogBox
