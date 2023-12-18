import { submitAPI } from './fetchData'

test('submitAPI', () => {
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

  const res = submitAPI(mockData)

  expect(typeof res).toBe('string')
})
