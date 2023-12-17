import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Stepper from 'react-stepper-horizontal'

import ReservationDetails from './ReservationDetails'
import ContactInformation from './ContactInformation'
import ReviewDetails from './ReviewDetails'
import PaymentDetails from './PaymentDetails'
import Modal from 'components/modal'
import Button from 'components/button'

import { ReactComponent as ArrowRight } from 'assets/arrow-right.svg'
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg'
import { ReactComponent as EditIcon } from 'assets/edit.svg'

import stl from './BookingForm.module.scss'

const BookingForm = () => {
  const [active, setActive] = useState(0)
  const [success, setSuccess] = useState(true)
  const navigate = useNavigate()

  const getComponent = () => {
    switch (active) {
      case 0:
        return <ReservationDetails />
      case 1:
        return <ContactInformation />
      case 2:
        return <ReviewDetails />
      case 3:
        return <PaymentDetails />
      case 4:
        return <Modal success={success} />
      default:
        return <ReservationDetails />
    }
  }

  const steps = [
    { title: 'Reservation Details' },
    { title: 'Contact Information' },
    { title: 'Review Details' },
    { title: 'Payment Information' },
  ]

  const handlePrimaryClick = e => setActive(active + 1)

  const handleSecondaryClick = e => {
    if (active === 0 || active === 3) navigate('/')
    else setActive(active - 1)
  }

  return (
    <div className={stl.bookingForm}>
      <div className={stl.wrapper}>
        <Stepper
          activeStep={active}
          steps={steps}
          completeColor="#495e57"
          activeColor="#ee9972"
          activeTitleColor="#495e57"
        />
        <form>{getComponent()}</form>
        {active >= 0 && active < 4 && (
          <div className={stl.btnContainer}>
            <Button
              variant="secondary"
              label={
                (active === 0 && 'Cancel') ||
                (active === 1 && 'Back') ||
                (active === 2 && 'Edit') ||
                (active === 3 && 'Cancel')
              }
              iconLeft={
                (active === 1 && <ArrowLeft />) ||
                (active === 2 && <EditIcon />)
              }
              onClick={handleSecondaryClick}
            />
            <Button
              label={
                (active === 0 && 'Next') ||
                (active === 1 && 'Next') ||
                (active === 2 && 'Proceed to Payment') ||
                (active === 3 && 'Submit Payment')
              }
              iconRight={
                (active === 0 && <ArrowRight />) ||
                (active === 1 && <ArrowRight />)
              }
              onClick={handlePrimaryClick}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingForm
