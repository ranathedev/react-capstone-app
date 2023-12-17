import React from 'react'

import HeroSection from 'components/hero-section'
import BookingForm from 'components/booking-form'

import RestaurantImage from 'assets/restaurant.jpg'

import stl from './BookingPage.module.scss'

const BookingPage = ({ availableTimes, updateTimes }) => {
  return (
    <div className={stl.booking} role="region" aria-labelledby="reserve-table">
      <HeroSection
        id="reserve-table"
        heading="Reserve Now"
        desc="Reserve your table for a delightful dining experience, whether it's a casual lunch or an intimate dinner. Book now to savor exquisite flavors in a welcoming atmosphere, perfect for both casual get-togethers and special celebrations. Your memorable culinary journey awaits!"
        showBtn={false}
        imgSrc={RestaurantImage}
        imgAlt="restaurant"
        imgRelative
        customClass={stl.heroSection}
      />
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  )
}

export default BookingPage
