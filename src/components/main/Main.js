import React, { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from 'components/homepage'
import BookingPage from 'components/booking-page'
import { fetchAPI } from 'utils/fetchData'

// const timesReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_TIMES':
//       return action.payload
//     default:
//       return state
//   }
// }

const initializeTimes = () => {
  const res = fetchAPI(new Date())
  return res
}
const updateTimes = (state, date) => {
  const res = fetchAPI(date)
  return res
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
