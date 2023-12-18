import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import BookingPage from './BookingPage'

test('Renders the BookingPage heading and BookingForm', () => {
  // mock-data for availableTimes
  const availableTimes = ['17:00', '18:00', '19:00', '20:00']

  // using with router becuase it was giving error for useNavigate()
  render(
    <Router>
      <BookingPage availableTimes={availableTimes} />
    </Router>
  )

  const headingElement = screen.getByText('Reserve Now')
  const bookingForm = screen.getByTestId('booking-form')

  expect(headingElement).toBeInTheDocument()
  expect(bookingForm).toBeInTheDocument()
})
