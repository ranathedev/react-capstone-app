import React from 'react'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({
  variant,
  label = 'Button',
  iconLeft,
  iconRight,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      className={clsx(stl.btn, stl[variant])}
      aria-label={ariaLabel}
      aria-live="polite"
      onClick={onClick}
    >
      {iconLeft}
      {label}
      {iconRight}
    </button>
  )
}

export default Button
