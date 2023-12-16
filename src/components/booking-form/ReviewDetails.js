import React from 'react'

import Button from 'components/button'

import { ReactComponent as EditIcon } from 'assets/edit.svg'

import stl from './BookingForm.module.scss'

const ReviewDetails = () => {
  return (
    <div className={stl.reviewDetails}>
      <h3 className={stl.title}>Review Reservation Details</h3>
      <div className={stl.detailsContainer}>
        <div className={stl.item}>
          <span className={stl.label}>Date:</span>
          <span className={stl.value}>16-12-2023</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Branch:</span>
          <span className={stl.value}>Crunchville Plaza</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Time :</span>
          <span className={stl.value}>Lunch</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Seating Preference:</span>
          <span className={stl.value}>Indoor</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>No. of Guests:</span>
          <span className={stl.value}>4</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Full Name:</span>
          <span className={stl.value}>Rana Intizar</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Email:</span>
          <span className={stl.value}>myemail@domain.com</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Ocassion:</span>
          <span className={stl.value}>Birthday</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Special Instructions:</span>
          <span className={stl.value}>
            Quite corner preferred for Business meeting. Quite corner preferred
            for Business meeting.
          </span>
        </div>
        <div className={stl.btnContainer}>
          <Button
            variant="secondary"
            label="Edit"
            iconLeft={<EditIcon />}
            onClick={e => e.preventDefault()}
          />
          <Button label="Poceed to Payment" onClick={e => e.preventDefault()} />
        </div>
      </div>
    </div>
  )
}

export default ReviewDetails
