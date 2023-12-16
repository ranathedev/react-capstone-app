import React from 'react'

import ReservationDetails from './ReservationDetails'
import ContactInformation from './ContactInformation'
import PaymentDetails from './PaymentDetails'
import ReviewDetails from './ReviewDetails'

import stl from './BookingForm.module.scss'

const BookingForm = () => {
  return (
    <div className={stl.bookingForm}>
      <div className={stl.wrapper}>
        <form>
          <ReservationDetails />
          <div className={stl.divider} />
          <ContactInformation />
          <div className={stl.divider} />
          <ReviewDetails />
          <div className={stl.divider} />
          <PaymentDetails />
        </form>
      </div>
    </div>
  )
}

export default BookingForm
