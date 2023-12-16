import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from 'components/homepage'
import BookingPage from 'components/booking-page'

const Main = () => {
  return (
    <main>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  )
}

export default Main
