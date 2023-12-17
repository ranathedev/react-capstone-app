import React from 'react'
import clsx from 'clsx'

import Dropdown from 'components/dropdown'
import ErrorMessage from 'components/error-message'

import { ReactComponent as BranchIcon } from 'assets/branch.svg'
import { ReactComponent as LunchIcon } from 'assets/lunch.svg'
import { ReactComponent as DinnerIcon } from 'assets/dinner.svg'
import { ReactComponent as IndoorIcon } from 'assets/indoor.svg'
import { ReactComponent as OutdoorIcon } from 'assets/outdoor.svg'

import stl from './BookingForm.module.scss'

const ReservationDetails = ({
  handleItemClick,
  noOfGuests,
  setNoOfGuests,
  branchErr,
  noOfGuestsErr,
  setNoOfGuestsErr,
  formik,
}) => {
  const list = [
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
    <div className={stl.reservationDetails}>
      <div className={stl.container}>
        <div className={stl.field}>
          <label>Select Date *</label>
          <input
            type="date"
            {...formik.getFieldProps('date')}
            className={stl.input}
          />
          <ErrorMessage
            msg={
              formik.touched.date && formik.errors.date && formik.errors.date
            }
          />
        </div>

        <div className={stl.field}>
          <label>Select Branch *</label>
          <div className={stl.input}>
            <Dropdown
              title="Branch"
              handleItemClick={handleItemClick}
              icon={<BranchIcon />}
              list={list}
            />
          </div>
          <ErrorMessage msg={branchErr} />
        </div>

        <div className={stl.field}>
          <label>Select Time *</label>
          <div className={clsx(stl.radioContainer, stl.input)}>
            <span>
              <input
                type="radio"
                {...formik.getFieldProps('time')}
                value="Lunch"
              />
              <label>
                <LunchIcon /> Lunch
              </label>
            </span>
            <span>
              <input
                type="radio"
                {...formik.getFieldProps('time')}
                value="Dinner"
              />
              <label>
                <DinnerIcon /> Dinner
              </label>
            </span>
            <ErrorMessage
              msg={
                formik.touched.time && formik.errors.time && formik.errors.time
              }
              customClass={stl.errMsg}
            />
          </div>
        </div>

        <div className={stl.field}>
          <label>Seating Preference *</label>
          <div className={clsx(stl.radioContainer, stl.input)}>
            <span>
              <input
                type="radio"
                {...formik.getFieldProps('seatingPreference')}
                value="Indoor"
              />
              <label>
                <IndoorIcon /> Indoor
              </label>
            </span>
            <span>
              <input
                type="radio"
                {...formik.getFieldProps('seatingPreference')}
                value="Outdoor"
              />
              <label>
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
          <label>No. of Guests *</label>
          <div className={stl.counter}>
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
