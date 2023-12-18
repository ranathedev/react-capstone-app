import React from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'

import BookingDetails from 'components/booking-details'
import Button from 'components/button'

import stl from './ConfirmedBooking.module.scss'

const ConfirmedBooking = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location?.state

  if (!data) return <Navigate to="/booking" />

  return (
    <section
      className={stl.confimedBooking}
      aria-labelledby="booking-confirmation-heading"
    >
      <div className={stl.header}>
        <h2 id="booking-confirmation-heading">Table Reserved Successfully</h2>
        <p>Thank you for choosing us. Your reservation was successful!</p>
      </div>
      <BookingDetails data={data} />
      <div className={stl.btnContainer}>
        <Button
          variant="secondary"
          label="Reserve Another"
          onClick={() => navigate('/booking')}
        />
        <Button label="Back to Home" onClick={() => navigate('/')} />
      </div>
    </section>
  )
}

export default ConfirmedBooking
