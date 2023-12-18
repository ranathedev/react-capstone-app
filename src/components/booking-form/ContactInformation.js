import React from 'react'

import Dropdown from 'components/dropdown'
import ErrorMessage from 'components/error-message'

import { ReactComponent as OccasionIcon } from 'assets/occasion.svg'

import stl from './BookingForm.module.scss'

const ContactInformation = ({ formik }) => {
  const occasionList = ['Birthday', 'Anniversary', 'Engagement']

  return (
    <div
      className={stl.contactInfo}
      role="group"
      aria-labelledby="contact-information"
    >
      <div className={stl.container}>
        <div className={stl.field}>
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            placeholder="Enter you full name"
            {...formik.getFieldProps('fullName')}
            className={stl.input}
            aria-required="true"
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
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            placeholder="Enter your email"
            {...formik.getFieldProps('email')}
            className={stl.input}
            aria-required="true"
            aria-invalid={formik.touched.email && Boolean(formik.errors.email)}
          />
          <ErrorMessage
            msg={
              formik.touched.email && formik.errors.email && formik.errors.email
            }
          />
        </div>

        <div className={stl.field}>
          <label htmlFor="occasion">Select Occasion *</label>
          <div className={stl.input}>
            <Dropdown
              icon={<OccasionIcon />}
              list={occasionList}
              formikProps={formik.getFieldProps('occasion')}
            />
          </div>
          <ErrorMessage
            msg={
              formik.touched.occasion &&
              formik.errors.occasion &&
              formik.errors.occasion
            }
            customClass={stl.dropdownErr}
          />
        </div>

        <div className={stl.field}>
          <label htmlFor="specialInstructions">Special Instructions</label>
          <textarea
            id="specialInstructions"
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
