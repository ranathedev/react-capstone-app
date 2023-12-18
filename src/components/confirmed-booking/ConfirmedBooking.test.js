import { render, screen } from '@testing-library/react'
import {
  BrowserRouter as Router,
  MemoryRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import ConfirmedBooking from './ConfirmedBooking'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}))

test("it redirects to booking page because user hasn't reserved table", () => {
  // using with router because it was giving error for useLocation() and useNavigate()
  render(
    <Router>
      <ConfirmedBooking />
    </Router>
  )

  expect(window.location.pathname).toBe('/booking')
})

test('renders ConfirmedBooking correctly', () => {
  // create mock data
  const mockData = {
    date: '2023-12-18',
    branch: 'Crunchville Plaza 2',
    time: '20:00',
    seatingPreference: 'Outdoor',
    noOfGuests: 3,
    fullName: 'John Doe',
    occasion: 'Birthday',
    bookingId: 'edfRt6Hyu7Gte',
  }

  useLocation.mockReturnValue({ state: mockData })

  render(
    <MemoryRouter initialEntries={['/confirmed-booking']}>
      <Routes>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </MemoryRouter>
  )

  const bookingDetailsTable = screen.getByTestId('booking-details-table')

  expect(bookingDetailsTable).toBeInTheDocument()

  const dateCell = screen.getByTestId('booking-details-date')
  const branchCell = screen.getByTestId('booking-details-branch')
  const timeCell = screen.getByTestId('booking-details-time')
  const preferenceCell = screen.getByTestId('booking-details-preference')
  const noOfGuestsCell = screen.getByTestId('booking-details-no-of-guests')
  const fullNameCell = screen.getByTestId('booking-details-full-name')
  const occasionCell = screen.getByTestId('booking-details-occasion')
  const bookingIdCell = screen.getByTestId('booking-details-booking-id')

  // matching values
  expect(dateCell).toHaveTextContent(mockData.date)
  expect(branchCell).toHaveTextContent(mockData.branch)
  expect(timeCell).toHaveTextContent(mockData.time)
  expect(preferenceCell).toHaveTextContent(mockData.seatingPreference)
  expect(noOfGuestsCell).toHaveTextContent(mockData.noOfGuests)
  expect(fullNameCell).toHaveTextContent(mockData.fullName)
  expect(occasionCell).toHaveTextContent(mockData.occasion)
  expect(bookingIdCell).toHaveTextContent(mockData.bookingId)
})
