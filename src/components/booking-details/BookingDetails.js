import React from 'react'

import stl from './BookingDetails.module.scss'

const BookingDetails = ({ data }) => {
  return (
    <table className={stl.bookingDetails}>
      <caption>Your Booking Details</caption>
      <thead>
        <tr>
          <th>Date</th>
          <td>{data.date}</td>
        </tr>
        <tr>
          <th>Branch</th>
          <td>{data.branch}</td>
        </tr>
        <tr>
          <th>Time</th>
          <td>{data.time}</td>
        </tr>
        <tr>
          <th>Preference</th>
          <td>{data.seatingPreference}</td>
        </tr>
        <tr>
          <th>Full Name</th>
          <td>{data.fullName}</td>
        </tr>
        <tr>
          <th>Occasion</th>
          <td>{data.occasion}</td>
        </tr>
        <tr>
          <th>Booking Id</th>
          <td>{data.bookingId}</td>
        </tr>
      </thead>
    </table>
  )
}

export default BookingDetails
