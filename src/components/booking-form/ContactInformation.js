import React from 'react'

import Dropdown from 'components/dropdown'
import ErrorMessage from 'components/error-message'

import { ReactComponent as OccassionIcon } from 'assets/occasion.svg'

import stl from './BookingForm.module.scss'

const ContactInformation = ({ handleItemClick, formik }) => {
  const list = ['Birthday', 'Anniversary', 'Engagement']

  return (
    <div className={stl.contactInfo}>
      <div className={stl.container}>
        <div className={stl.field}>
          <label>Full Name *</label>
          <input
            placeholder="Enter you full name"
            {...formik.getFieldProps('fullName')}
            className={stl.input}
          />
          <ErrorMessage
            msg={
              formik.touched.fullName &&
              formik.errors.fullName &&
              formik.errors.fullName
            }
          />
        </div>

        <div className={stl.field}>
          <label>Email *</label>
          <input
            placeholder="Enter your email"
            {...formik.getFieldProps('email')}
            className={stl.input}
          />
          <ErrorMessage
            msg={
              formik.touched.email && formik.errors.email && formik.errors.email
            }
          />
        </div>

        <div className={stl.field}>
          <label>Select Occassion</label>
          <div className={stl.input}>
            <Dropdown
              title="Occassion"
              handleItemClick={handleItemClick}
              icon={<OccassionIcon />}
              list={list}
            />
          </div>
        </div>

        <div className={stl.field}>
          <label>Special Instructions</label>
          <textarea
            placeholder="Enter any special instructions or requests here..."
            {...formik.getFieldProps('specialInstructions')}
            className={stl.input}
          />
          <ErrorMessage
            msg={
              formik.touched.specialInstructions &&
              formik.errors.specialInstructions &&
              formik.errors.specialInstructions
            }
          />
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
