import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingPage from 'components/booking-page'
import { act } from 'react-dom/test-utils'

// mock-values
const dateVal = '2023-12-17'
const branchVal = 'Crunchville Plaza 3'
const timeVal = '19:00'
const seatingVal = 'Outdoor'
const fullNameVal = 'Aftab Rehan'
const emailVal = 'johndoe@domain.com'
const occasioVal = 'Birthday'
const specialInstVal = 'This is my Birthday...'
const cardNumVal = '4111111111111111'
const expiryDateVal = '12/25'
const cvvVal = '123'
const cardHolderNameVal = 'John Doe'

test('BookingForm flow works correctly', async () => {
  // mock data for availableTimes
  const availableTimes = ['17:00', '18:00', '19:00', '20:00']

  // mock function for updateTimes
  const updateTimes = date => {
    console.log('Selected Date:', date)
    return availableTimes
  }

  render(
    <BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />
  )

  // Step: 1 - Reservation Details
  const primaryBtn = screen.getByTestId('primary-btn')
  const dateInput = screen.getByTestId('date')
  const selectBranch = screen.getByTestId('branch')
  const selectTime = screen.getByTestId('time')
  const seatingId = seatingVal.charAt(0).toLowerCase() + seatingVal.slice(1)
  const seatingInput = screen.getByTestId(seatingId)
  const noOfGuestsField = screen.getByTestId('no-of-guests')
  const addBtn = screen.getByTestId('add-btn')
  const minusBtn = screen.getByTestId('minus-btn')

  await act(() => {
    userEvent.type(dateInput, dateVal)
    userEvent.selectOptions(selectBranch, branchVal)
    userEvent.selectOptions(selectTime, timeVal)
    userEvent.click(seatingInput)
  })

  expect(noOfGuestsField).toBeInTheDocument()

  // no of guests will be 9 after this since the default is 1
  for (let i = 0; i < 8; i++) {
    await act(async () => {
      userEvent.click(addBtn)
    })
  }

  // no of guests will be 6 after this
  for (let i = 0; i < 3; i++) {
    await act(() => {
      userEvent.click(minusBtn)
    })
  }

  await act(() => {
    // press the next-btn
    userEvent.click(primaryBtn)
  })

  // Step: 2 - Contact Information
  const fullNameInput = screen.getByTestId('fullName')
  const emailInput = screen.getByTestId('email')
  const selectOccasion = screen.getByTestId('occasion')
  const specialInstructionsInput = screen.getByTestId('specialInstructions')

  expect(fullNameInput).toBeInTheDocument()

  await act(() => {
    userEvent.type(fullNameInput, fullNameVal)
    userEvent.type(emailInput, emailVal)
    userEvent.selectOptions(selectOccasion, occasioVal)
    userEvent.type(specialInstructionsInput, specialInstVal)
    // press the next btn
    userEvent.click(primaryBtn)
  })

  // Step: 3 - Review Details
  const dateElement = screen.getByTestId('review-details-date')
  const branchElement = screen.getByTestId('review-details-branch')
  const timeElement = screen.getByTestId('review-details-time')
  const seatingElement = screen.getByTestId('review-details-seating')
  const noOfGuestsElement = screen.getByTestId('review-details-no-of-guests')
  const fullNameElement = screen.getByTestId('review-details-full-name')
  const emailElement = screen.getByTestId('review-details-email')
  const occasionElement = screen.getByTestId('review-details-occasion')
  const specialInstrElement = screen.getByTestId(
    'review-details-special-instructions'
  )

  expect(dateElement).toHaveTextContent(dateVal)
  expect(branchElement).toHaveTextContent(branchVal)
  expect(timeElement).toHaveTextContent(timeVal)
  expect(seatingElement).toHaveTextContent(seatingVal)
  expect(noOfGuestsElement).toHaveTextContent(6)
  expect(fullNameElement).toHaveTextContent(fullNameVal)
  expect(emailElement).toHaveTextContent(emailVal)
  expect(occasionElement).toHaveTextContent(occasioVal)
  expect(specialInstrElement).toHaveTextContent(specialInstVal)

  await act(() => {
    // press the next btn
    userEvent.click(primaryBtn)
  })

  // Step: 4 - Payment Details
  const cardNumberInput = screen.getByTestId('cardNumber')
  const expirationDateInput = screen.getByTestId('expirationDate')
  const cvvInput = screen.getByTestId('cvv')
  const cardHolderNameInput = screen.getByTestId('cardHolderName')

  await act(() => {
    userEvent.type(cardNumberInput, cardNumVal)
    userEvent.type(expirationDateInput, expiryDateVal)
    userEvent.type(cvvInput, cvvVal)
    userEvent.type(cardHolderNameInput, cardHolderNameVal)
    // press the next btn
    userEvent.click(primaryBtn)
  })

  const dialogTitle = screen.getByText('Table Reserved Successfully')

  expect(dialogTitle).toBeInTheDocument()
})
