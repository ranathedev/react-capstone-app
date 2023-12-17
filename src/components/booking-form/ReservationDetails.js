import React from 'react'
import clsx from 'clsx'

import Dropdown from 'components/dropdown'
import ErrorMessage from 'components/error-message'

import { ReactComponent as BranchIcon } from 'assets/branch.svg'
import { ReactComponent as ClockIcon } from 'assets/clock.svg'
import { ReactComponent as IndoorIcon } from 'assets/indoor.svg'
import { ReactComponent as OutdoorIcon } from 'assets/outdoor.svg'

import stl from './BookingForm.module.scss'

const ReservationDetails = ({
  noOfGuests,
  setNoOfGuests,
  noOfGuestsErr,
  setNoOfGuestsErr,
  availableTimes,
  updateTimes,
  formik,
}) => {
  const branchList = [
    'Crunchville Plaza 1',
    'Crunchville Plaza 2',
    'Crunchville Plaza 3',
    'Crunchville Plaza 4',
    'Crunchville Plaza 5',
  ]

  const handleDecrease = () => {
    if (noOfGuests > 1) {
      setNoOfGuests(noOfGuests - 1)
      setNoOfGuestsErr('')
    } else setNoOfGuestsErr('The number of guests cannot be less than 1.')
  }
  const handleIncrease = () => {
    if (noOfGuests < 10) {
      setNoOfGuests(noOfGuests + 1)
      setNoOfGuestsErr('')
    } else setNoOfGuestsErr('The number of guests cannot exceed 10.')
  }

  return (
    <div
      className={stl.reservationDetails}
      role="group"
      aria-labelledby="contact-information"
    >
      <div className={stl.container}>
        <div className={stl.field}>
          <label htmlFor="date">Select Date *</label>
          <input
            id="date"
            type="date"
            {...formik.getFieldProps('date')}
            onChange={e => {
              updateTimes(e.target.value)
              formik.handleChange(e)
            }}
            className={stl.input}
            aria-required="true"
            aria-invalid={formik.touched.date && Boolean(formik.errors.date)}
          />
          <ErrorMessage
            msg={
              formik.touched.date && formik.errors.date && formik.errors.date
            }
          />
        </div>

        <div className={stl.field}>
          <label htmlFor="branch">Select Branch *</label>
          <div className={stl.input}>
            <Dropdown
              id="branch"
              list={branchList}
              formikProps={formik.getFieldProps('branch')}
              icon={<BranchIcon />}
            />
          </div>
          <ErrorMessage
            msg={
              formik.touched.branch &&
              formik.errors.branch &&
              formik.errors.branch
            }
            customClass={stl.dropdownErr}
          />
        </div>

        <div className={stl.field}>
          <label htmlFor="time">Select Time *</label>
          <div className={stl.input}>
            <Dropdown
              id="time"
              list={availableTimes}
              formikProps={formik.getFieldProps('time')}
              icon={<ClockIcon />}
            />
          </div>
          <ErrorMessage
            msg={
              formik.touched.time && formik.errors.time && formik.errors.time
            }
            customClass={stl.dropdownErr}
          />
        </div>

        <div className={stl.field}>
          <label>Seating Preference *</label>
          <div className={clsx(stl.radioContainer, stl.input)}>
            <span>
              <input
                id="indoor"
                type="radio"
                {...formik.getFieldProps('seatingPreference')}
                value="Indoor"
              />
              <label htmlFor="indoor">
                <IndoorIcon /> Indoor
              </label>
            </span>
            <span>
              <input
                id="outdoor"
                type="radio"
                {...formik.getFieldProps('seatingPreference')}
                value="Outdoor"
              />
              <label htmlFor="outdoor">
                <OutdoorIcon /> Outdoor
              </label>
            </span>
            <ErrorMessage
              msg={
                formik.touched.seatingPreference &&
                formik.errors.seatingPreference &&
                formik.errors.seatingPreference
              }
              customClass={stl.errMsg}
            />
          </div>
        </div>

        <div className={clsx(stl.field, stl.numOfGuests)}>
          <label htmlFor="noOfGuests">No. of Guests *</label>
          <div id="noOfGuests" className={stl.counter}>
            <span className={stl.btn} onClick={handleDecrease}>
              -
            </span>
            <span className={stl.num}>{noOfGuests}</span>
            <span className={stl.btn} onClick={handleIncrease}>
              +
            </span>
          </div>
          <ErrorMessage msg={noOfGuestsErr} customClass={stl.errMsg} />
        </div>
      </div>
    </div>
  )
}

export default ReservationDetails
