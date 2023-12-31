import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Stepper from 'react-stepper-horizontal'
import { useFormik } from 'formik'

import { validationSchemas, initialValues } from 'utils/formik-helper'
import { submitAPI } from 'utils/fetchData'
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

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [active, setActive] = useState(0)
  const [noOfGuests, setNoOfGuests] = useState(1)
  const [noOfGuestsErr, setNoOfGuestsErr] = useState('')
  const [success, setSuccess] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setNoOfGuestsErr('')
  }, [active])

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema: validationSchemas[active],
    onSubmit: values => {
      formik.setTouched({})
      if (active === 0 || active === 1) setActive(active + 1)
      if (active === 3) {
        const data = { ...values, noOfGuests }
        const res = submitAPI(data)
        if (res.length > 0) {
          navigate('/confirmed-booking', { state: { ...data, bookingId: res } })
        } else setSuccess(false)
      }
    },
  })

  const getComponent = () => {
    switch (active) {
      case 0:
        return (
          <ReservationDetails
            noOfGuests={noOfGuests}
            setNoOfGuests={setNoOfGuests}
            noOfGuestsErr={noOfGuestsErr}
            setNoOfGuestsErr={setNoOfGuestsErr}
            availableTimes={availableTimes}
            updateTimes={updateTimes}
            formik={formik}
          />
        )
      case 1:
        return <ContactInformation formik={formik} />
      case 2:
        return (
          <ReviewDetails formikValues={formik.values} noOfGuests={noOfGuests} />
        )
      case 3:
        return <PaymentDetails formik={formik} />
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

  const handlePrimaryClick = () => {
    if (active === 2) setActive(3)
    else formik.submitForm()
  }

  const handleSecondaryClick = () => {
    if (active === 0 || active === 3) navigate('/')
    else setActive(active - 1)
  }

  return success ? (
    <div className={stl.bookingForm} aria-label="Reservation Form">
      <div className={stl.wrapper}>
        <Stepper
          activeStep={active}
          steps={steps}
          completeColor="#495e57"
          activeColor="#ee9972"
          completeTitleColor="#495e57"
          aria-label="Booking Progress Stepper"
        />
        <form
          data-testid="booking-form"
          onSubmit={formik.handleSubmit}
          aria-live="polite"
          role="tabpanel"
        >
          {getComponent()}
        </form>
        <div className={stl.btnContainer}>
          <Button
            dataTestId="secondary-btn"
            variant="secondary"
            label={
              (active === 0 && 'Cancel') ||
              (active === 1 && 'Back') ||
              (active === 2 && 'Edit') ||
              (active === 3 && 'Cancel')
            }
            iconLeft={
              (active === 1 && <ArrowLeft />) || (active === 2 && <EditIcon />)
            }
            ariaLabel={
              (active === 0 && 'Cancel') ||
              (active === 1 && 'Back') ||
              (active === 2 && 'Edit') ||
              (active === 3 && 'Cancel')
            }
            onClick={handleSecondaryClick}
          />
          <Button
            dataTestId="primary-btn"
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
            ariaLabel={
              (active === 0 && 'Next') ||
              (active === 1 && 'Next') ||
              (active === 2 && 'Proceed to Payment') ||
              (active === 3 && 'Submit Payment')
            }
            onClick={handlePrimaryClick}
          />
        </div>
      </div>
    </div>
  ) : (
    <Modal handleBtnClick={() => navigate(0)} />
  )
}

export default BookingForm
