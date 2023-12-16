import React from 'react'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ variant, label = 'Button', icon, onClick }) => {
  return (
    <button className={clsx(stl.btn, stl[variant])} onClick={onClick}>
      {label}
      {icon}
    </button>
  )
}

export default Button
