import React from 'react'

import stl from './BookingDetails.module.scss'

const BookingDetails = ({ data }) => {
  return (
    <table data-testid="booking-details-table" className={stl.bookingDetails}>
      <caption>Your Booking Details</caption>
      <thead>
        <tr data-testid="booking-details-date">
          <th>Date</th>
          <td>{data.date}</td>
        </tr>
        <tr data-testid="booking-details-branch">
          <th>Branch</th>
          <td>{data.branch}</td>
        </tr>
        <tr data-testid="booking-details-time">
          <th>Time</th>
          <td>{data.time}</td>
        </tr>
        <tr data-testid="booking-details-preference">
          <th>Preference</th>
          <td>{data.seatingPreference}</td>
        </tr>
        <tr data-testid="booking-details-no-of-guests">
          <th>No. of Guests</th>
          <td>{data.noOfGuests}</td>
        </tr>
        <tr data-testid="booking-details-full-name">
          <th>Full Name</th>
          <td>{data.fullName}</td>
        </tr>
        <tr data-testid="booking-details-occasion">
          <th>Occasion</th>
          <td>{data.occasion}</td>
        </tr>
        <tr data-testid="booking-details-booking-id">
          <th>Booking Id</th>
          <td>{data.bookingId}</td>
        </tr>
      </thead>
    </table>
  )
}

export default BookingDetails
