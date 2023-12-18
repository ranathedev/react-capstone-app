import React from 'react'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({
  dataTestId,
  variant,
  label = 'Button',
  iconLeft,
  iconRight,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      data-testid={dataTestId}
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
