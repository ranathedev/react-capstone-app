import { render, screen } from '@testing-library/react'
import BookingPage from './BookingPage'

test('Renders the BookingPage heading and BookingForm', () => {
  // mock-data for availableTimes
  const availableTimes = ['17:00', '18:00', '19:00', '20:00']
  render(<BookingPage availableTimes={availableTimes} />)

  const headingElement = screen.getByText('Reserve Now')
  const bookingForm = screen.getByTestId('booking-form')

  expect(headingElement).toBeInTheDocument()
  expect(bookingForm).toBeInTheDocument()
})
