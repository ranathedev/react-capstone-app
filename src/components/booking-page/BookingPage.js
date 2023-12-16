import React from 'react'

import HeroSection from 'components/hero-section'

import RestaurantImage from 'assets/restaurant.jpg'

import stl from './BookingPage.module.scss'

const BookingPage = () => {
  return (
    <div className={stl.booking}>
      <HeroSection
        heading="Reserve Now"
        desc="Reserve your table for a delightful dining experience, whether it's a casual lunch or an intimate dinner. Book now to savor exquisite flavors in a welcoming atmosphere, perfect for both casual get-togethers and special celebrations. Your memorable culinary journey awaits!"
        showBtn={false}
        imgSrc={RestaurantImage}
        imgAlt="restaurant"
        imgRelative
        customClass={stl.heroSection}
      />
      <h1 className={stl.heading}>This is BookingPage</h1>
    </div>
  )
}

export default BookingPage
