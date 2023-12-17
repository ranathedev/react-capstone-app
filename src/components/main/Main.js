import React, { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from 'components/homepage'
import BookingPage from 'components/booking-page'

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload
    default:
      return state
  }
}

const Main = () => {
  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  }
  const updateTimes = selectedDate => {
    console.log(selectedDate)
    const updatedTimes = [...availableTimes, selectedDate]
    dispatch({ type: 'UPDATE_TIMES', payload: updatedTimes })
  }

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  )

  return (
    <main role="main">
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          }
        />
      </Routes>
    </main>
  )
}

export default Main
