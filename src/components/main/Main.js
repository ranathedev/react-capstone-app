import React, { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from 'components/homepage'
import BookingPage from 'components/booking-page'

// const timesReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_TIMES':
//       return action.payload
//     default:
//       return state
//   }
// }

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}
const updateTimes = (state, date) => {
  console.log('List updated with Date:', date)
  return state
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  )

  return (
    <main data-testid="main" role="main">
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={dispatch}
            />
          }
        />
      </Routes>
    </main>
  )
}

export default Main
export { updateTimes, initializeTimes }
