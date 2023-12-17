import React from 'react'

import DialogBox from 'components/dialog-box'

import stl from './Modal.module.scss'

const Modal = ({ success }) => {
  return (
    <div className={stl.modal} role="dialog" aria-modal="true">
      <DialogBox success={success} />
    </div>
  )
}

export default Modal
