import { updateTimes, initializeTimes } from './Main'

test('initializeTimes return the correct expected value', () => {
  const expected = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  const actual = initializeTimes()

  expect(actual).toStrictEqual(expected)
})

test('updateTimes return the correct expected value', () => {
  // value provided in state
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  const actual = updateTimes(state, new Date())

  expect(actual).toStrictEqual(state)
})
