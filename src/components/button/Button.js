import React from 'react'

import stl from './Button.module.scss'

const Button = ({ label = 'Button', onClick }) => {
  return (
    <button className={stl.btn} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
