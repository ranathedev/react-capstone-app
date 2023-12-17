import React from 'react'

import stl from './BookingForm.module.scss'

const ReviewDetails = ({
  formikValues,
  branch,
  noOfGuests,
  occassion,
  time,
}) => {
  return (
    <div
      className={stl.reviewDetails}
      role="region"
      aria-labelledby="review-reservation-details"
    >
      <div className={stl.detailsContainer}>
        <div
          className={stl.item}
          aria-live="polite"
          role="listitem"
          aria-labelledby="label-date"
        >
          <span className={stl.label}>Date:</span>
          <span className={stl.value}>{formikValues.date}</span>
        </div>
        <div
          className={stl.item}
          role="listitem"
          aria-labelledby="label-branch"
          aria-live="polite"
        >
          <span className={stl.label}>Branch:</span>
          <span className={stl.value}>{branch}</span>
        </div>
        <div
          className={stl.item}
          aria-live="polite"
          role="listitem"
          aria-labelledby="label-time"
        >
          <span className={stl.label}>Time :</span>
          <span className={stl.value}>{time}</span>
        </div>
        <div
          role="listitem"
          aria-labelledby="label-seating-preference"
          aria-live="polite"
          className={stl.item}
        >
          <span className={stl.label}>Seating Preference:</span>
          <span className={stl.value}>{formikValues.seatingPreference}</span>
        </div>
        <div
          role="listitem"
          aria-labelledby="label-no-of-guests"
          aria-live="polite"
          className={stl.item}
        >
          <span className={stl.label}>No. of Guests:</span>
          <span className={stl.value}>{noOfGuests}</span>
        </div>
        <div
          role="listitem"
          aria-labelledby="label-full-name"
          aria-live="polite"
          className={stl.item}
        >
          <span className={stl.label}>Full Name:</span>
          <span className={stl.value}>{formikValues.fullName}</span>
        </div>
        <div
          className={stl.item}
          aria-live="polite"
          role="listitem"
          aria-labelledby="label-email"
        >
          <span className={stl.label}>Email:</span>
          <span className={stl.value}>{formikValues.email}</span>
        </div>
        <div
          role="listitem"
          aria-labelledby="label-occassion"
          aria-live="polite"
          className={stl.item}
        >
          <span className={stl.label}>Ocassion:</span>
          <span className={stl.value}>{occassion}</span>
        </div>
        <div
          role="listitem"
          aria-labelledby="label-special-instructions"
          aria-live="polite"
          className={stl.item}
        >
          <span className={stl.label}>Special Instructions:</span>
          <span className={stl.value}>{formikValues.specialInstructions}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewDetails
