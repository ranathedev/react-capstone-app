import React from 'react'
import clsx from 'clsx'

import stl from './ErrorMessage.module.scss'

const ErrorMessage = ({ msg = '', customClass }) => {
  return (
    <div
      aria-hidden={msg === ''}
      className={clsx(stl.errMsg, customClass, msg !== '' ? stl.show : '')}
    >
      {msg}
    </div>
  )
}

export default ErrorMessage
