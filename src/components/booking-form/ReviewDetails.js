import React from 'react'

import stl from './BookingForm.module.scss'

const ReviewDetails = ({ formikValues, noOfGuests }) => {
  return (
    <div
      data-testid="review-details"
      className={stl.reviewDetails}
      role="region"
      aria-labelledby="review-reservation-details"
    >
      <div className={stl.detailsContainer}>
        <div
          data-testid="review-details-date"
          className={stl.item}
          aria-live="polite"
          role="listitem"
          aria-labelledby="label-date"
        >
          <span className={stl.label}>Date:</span>
          <span className={stl.value}>{formikValues.date}</span>
        </div>
        <div
          data-testid="review-details-branch"
          className={stl.item}
          role="listitem"
          aria-labelledby="label-branch"
          aria-live="polite"
        >
          <span className={stl.label}>Branch:</span>
          <span className={stl.value}>{formikValues.branch}</span>
        </div>
        <div
          data-testid="review-details-time"
          className={stl.item}
          aria-live="polite"
          role="listitem"
          aria-labelledby="label-time"
        >
          <span className={stl.label}>Time :</span>
          <span className={stl.value}>{formikValues.time}</span>
        </div>
        <div
          data-testid="review-details-seating"
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
          data-testid="review-details-no-of-guests"
          aria-labelledby="label-no-of-guests"
          aria-live="polite"
          className={stl.item}
        >
          <span className={stl.label}>No. of Guests:</span>
          <span className={stl.value}>{noOfGuests}</span>
        </div>
        <div
          data-testid="review-details-full-name"
          role="listitem"
          aria-labelledby="label-full-name"
          aria-live="polite"
          className={stl.item}
        >
          <span className={stl.label}>Full Name:</span>
          <span className={stl.value}>{formikValues.fullName}</span>
        </div>
        <div
          data-testid="review-details-email"
          className={stl.item}
          aria-live="polite"
          role="listitem"
          aria-labelledby="label-email"
        >
          <span className={stl.label}>Email:</span>
          <span className={stl.value}>{formikValues.email}</span>
        </div>
        <div
          data-testid="review-details-occasion"
          role="listitem"
          aria-labelledby="label-occasion"
          aria-live="polite"
          className={stl.item}
        >
          <span className={stl.label}>Ocassion:</span>
          <span className={stl.value}>{formikValues.occasion}</span>
        </div>
        <div
          data-testid="review-details-special-instructions"
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
