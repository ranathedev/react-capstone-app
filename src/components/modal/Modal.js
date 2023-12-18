import React from 'react'

import DialogBox from 'components/dialog-box'

import stl from './Modal.module.scss'

const Modal = ({ success = true, handleBtnClick }) => {
  return (
    <div className={stl.modal} role="dialog" aria-modal="true">
      <DialogBox success={success} handleClick={handleBtnClick} />
    </div>
  )
}

export default Modal
