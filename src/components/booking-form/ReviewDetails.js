import React from 'react'

import stl from './BookingForm.module.scss'

const ReviewDetails = ({ formikValues, branch, noOfGuests, occassion }) => {
  return (
    <div className={stl.reviewDetails}>
      <div className={stl.detailsContainer}>
        <div className={stl.item}>
          <span className={stl.label}>Date:</span>
          <span className={stl.value}>{formikValues.date}</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Branch:</span>
          <span className={stl.value}>{branch}</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Time :</span>
          <span className={stl.value}>{formikValues.time}</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Seating Preference:</span>
          <span className={stl.value}>{formikValues.seatingPreference}</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>No. of Guests:</span>
          <span className={stl.value}>{noOfGuests}</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Full Name:</span>
          <span className={stl.value}>{formikValues.fullName}</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Email:</span>
          <span className={stl.value}>{formikValues.email}</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Ocassion:</span>
          <span className={stl.value}>{occassion}</span>
        </div>
        <div className={stl.item}>
          <span className={stl.label}>Special Instructions:</span>
          <span className={stl.value}>{formikValues.specialInstructions}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewDetails
