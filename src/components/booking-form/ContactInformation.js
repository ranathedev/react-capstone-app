import React from 'react'

import Dropdown from 'components/dropdown'
import Button from 'components/button'

import { ReactComponent as OccassionIcon } from 'assets/occasion.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/arrow-right.svg'
import { ReactComponent as ArrowLeftIcon } from 'assets/arrow-left.svg'

import stl from './BookingForm.module.scss'

const ContactInformation = () => {
  const list = ['Birthday', 'Anniversary', 'Engagement']

  return (
    <div className={stl.contactInfo}>
      <h3 className={stl.title}>Contact Information</h3>
      <div className={stl.container}>
        <div className={stl.field}>
          <label>Full Name *</label>
          <input placeholder="Enter you full name" className={stl.input} />
        </div>

        <div className={stl.field}>
          <label>Email *</label>
          <input placeholder="Enter your email" className={stl.input} />
        </div>

        <div className={stl.field}>
          <label>Select Branch *</label>
          <div className={stl.input}>
            <Dropdown title="Occassion" icon={<OccassionIcon />} list={list} />
          </div>
        </div>

        <div className={stl.field}>
          <label>Special Instructions *</label>
          <textarea
            placeholder="Enter any special instructions or requests here..."
            className={stl.input}
          />
        </div>

        <div className={stl.btnContainer}>
          <Button
            variant="secondary"
            label="Back"
            iconLeft={<ArrowLeftIcon />}
            onClick={e => e.preventDefault()}
          />
          <Button
            label="Next"
            iconRight={<ArrowRightIcon />}
            onClick={e => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
