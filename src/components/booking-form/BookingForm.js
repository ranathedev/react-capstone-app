import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Stepper from 'react-stepper-horizontal'
import { useFormik } from 'formik'

import { validationSchemas, initialValues } from 'utils/formik-helper'
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
  const [success, setSuccess] = useState(true)
  const [branch, setBranch] = useState('')
  const [occassion, setOccassion] = useState('')
  const [noOfGuests, setNoOfGuests] = useState(1)
  const [branchErr, setBranchErr] = useState('')
  const [noOfGuestsErr, setNoOfGuestsErr] = useState('')
  const [time, setTime] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setNoOfGuestsErr('')
    setBranchErr('')
  }, [active])

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema: validationSchemas[active],
    onSubmit: values => {
      formik.setTouched({})
      if (active === 0 || active === 1) setActive(active + 1)
      if (active === 3) {
        setActive(4)
        console.log(values)
        console.log('Branch:', branch)
        console.log('No. of Guest:', noOfGuests)
        console.log('Occassion:', occassion)
        console.log('Time:', time)
        setSuccess(true)
      }
    },
  })

  const getComponent = () => {
    switch (active) {
      case 0:
        return (
          <ReservationDetails
            branchItemClick={setBranch}
            noOfGuests={noOfGuests}
            setNoOfGuests={setNoOfGuests}
            branchErr={branchErr}
            noOfGuestsErr={noOfGuestsErr}
            setNoOfGuestsErr={setNoOfGuestsErr}
            availableTimes={availableTimes}
            timeItemClick={setTime}
            updateTimes={updateTimes}
            formik={formik}
          />
        )
      case 1:
        return (
          <ContactInformation handleItemClick={setOccassion} formik={formik} />
        )
      case 2:
        return (
          <ReviewDetails
            formikValues={formik.values}
            branch={branch}
            noOfGuests={noOfGuests}
            occassion={occassion}
            time={time}
          />
        )
      case 3:
        return <PaymentDetails formik={formik} />
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

  const handlePrimaryClick = () => {
    if (active === 0 && branch === '') setBranchErr('Branch is required')
    else if (active === 2) setActive(3)
    else {
      setBranchErr('')
      formik.submitForm()
    }
  }

  const handleSecondaryClick = () => {
    if (active === 0 || active === 3) navigate('/')
    else setActive(active - 1)
  }

  return (
    <div className={stl.bookingForm} role="form" aria-label="Reservation Form">
      <div className={stl.wrapper}>
        <Stepper
          activeStep={active}
          steps={steps}
          completeColor="#495e57"
          activeColor="#ee9972"
          completeTitleColor="#495e57"
          aria-label="Booking Progress Stepper"
        />
        <form onSubmit={formik.handleSubmit} aria-live="polite" role="tabpanel">
          {getComponent()}
        </form>
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
              ariaLabel={
                (active === 0 && 'Cancel') ||
                (active === 1 && 'Back') ||
                (active === 2 && 'Edit') ||
                (active === 3 && 'Cancel')
              }
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
              ariaLabel={
                (active === 0 && 'Next') ||
                (active === 1 && 'Next') ||
                (active === 2 && 'Proceed to Payment') ||
                (active === 3 && 'Submit Payment')
              }
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingForm
