import { fetchAPI } from 'utils/fetchData'
import { updateTimes, initializeTimes } from './Main'

const dateNow = new Date()
test('initializeTimes return the correct expected value', () => {
  const expected = fetchAPI(dateNow)

  const actual = initializeTimes()

  expect(actual).toStrictEqual(expected)
})

test('updateTimes return the correct expected value', () => {
  // value provided in state
  const state = fetchAPI(dateNow)

  const actual = updateTimes(state, dateNow)

  expect(actual).toStrictEqual(state)
})
