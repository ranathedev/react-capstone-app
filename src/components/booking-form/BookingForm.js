import React from 'react'

import ReservationDetails from './ReservationDetails'

import stl from './BookingForm.module.scss'

const BookingForm = () => {
  return (
    <div className={stl.bookingForm}>
      <div className={stl.wrapper}>
        <form>
          <ReservationDetails />
        </form>
      </div>
    </div>
  )
}

export default BookingForm
