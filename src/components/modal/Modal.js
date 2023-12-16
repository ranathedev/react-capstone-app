import React from 'react'
import clsx from 'clsx'

import DialogBox from 'components/dialog-box'

import stl from './Modal.module.scss'

const Modal = ({ show, setShow, success }) => {
  return (
    <div aria-hidden={!show} className={clsx(stl.modal, show ? stl.show : '')}>
      <div className={stl.overlay} />
      <DialogBox success={success} setShow={setShow} />
    </div>
  )
}

export default Modal
