import React from 'react'
import clsx from 'clsx'

import stl from './ErrorMessage.module.scss'

const ErrorMessage = ({ msg = '', customClass }) => {
  return (
    <div
      className={clsx(stl.errMsg, customClass, msg !== '' ? stl.show : '')}
      aria-hidden={msg === ''}
      aria-live="assertive"
      aria-atomic="true"
    >
      {msg}
    </div>
  )
}

export default ErrorMessage
