import React, { useState } from 'react'

import HeroSection from 'components/hero-section'
import BookingForm from 'components/booking-form'
import Modal from 'components/modal'

import RestaurantImage from 'assets/restaurant.jpg'

import stl from './BookingPage.module.scss'

const BookingPage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal show={showModal} setShow={setShowModal} success={true} />
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
        <BookingForm />
        <button onClick={() => setShowModal(true)}>Show/Hide</button>
      </div>
    </>
  )
}

export default BookingPage
