import React from 'react'
import clsx from 'clsx'

import Button from 'components/button'
import Dropdown from 'components/dropdown'

import { ReactComponent as BranchIcon } from 'assets/branch.svg'
import { ReactComponent as LunchIcon } from 'assets/lunch.svg'
import { ReactComponent as DinnerIcon } from 'assets/dinner.svg'
import { ReactComponent as IndoorIcon } from 'assets/indoor.svg'
import { ReactComponent as OutdoorIcon } from 'assets/outdoor.svg'
import { ReactComponent as ArrowIcon } from 'assets/arrow-right.svg'

import stl from './BookingForm.module.scss'

const ReservationDetails = () => {
  const list = [
    'Crunchville Plaza 1',
    'Crunchville Plaza 2',
    'Crunchville Plaza 3',
    'Crunchville Plaza 4',
    'Crunchville Plaza 5',
  ]

  return (
    <div className={stl.reservationDetails}>
      <h3 className={stl.title}>Reservation Details</h3>
      <div className={stl.container}>
        <div className={stl.field}>
          <label>Select Date *</label>
          <input
            type="date"
            value="2023-12-16"
            onChange={e => console.log(e.target.value)}
            className={stl.input}
          />
        </div>

        <div className={stl.field}>
          <label>Select Branch *</label>
          <div className={stl.input}>
            <Dropdown title="Branch" icon={<BranchIcon />} list={list} />
          </div>
        </div>

        <div className={stl.field}>
          <label>Select Time *</label>
          <div className={clsx(stl.radioContainer, stl.input)}>
            <span>
              <input type="radio" />
              <label>
                <LunchIcon /> Lunch
              </label>
            </span>
            <span>
              <input type="radio" />
              <label>
                <DinnerIcon /> Dinner
              </label>
            </span>
          </div>
        </div>

        <div className={stl.field}>
          <label>Seating Preference *</label>
          <div className={clsx(stl.radioContainer, stl.input)}>
            <span>
              <input type="radio" />
              <label>
                <IndoorIcon /> Indoor
              </label>
            </span>
            <span>
              <input type="radio" />
              <label>
                <OutdoorIcon /> Outdoor
              </label>
            </span>
          </div>
        </div>

        <div className={clsx(stl.field, stl.numOfGuests)}>
          <label>No. of Guests *</label>
          <div className={stl.counter}>
            <span className={stl.btn}>-</span>
            <span className={stl.num}>1</span>
            <span className={stl.btn}>+</span>
          </div>
        </div>

        <div className={stl.btnContainer}>
          <Button
            variant="secondary"
            label="Cancel"
            onClick={e => e.preventDefault()}
          />
          <Button label="Next" icon={<ArrowIcon />} />
        </div>
      </div>
    </div>
  )
}

export default ReservationDetails
