const seededRandom = function (seed) {
  var m = 2 ** 35 - 31
  var a = 185852
  var s = seed % m
  return function () {
    return (s = (s * a) % m) / m
  }
}

function fetchAPI(date) {
  let result = []
  let dt = new Date(date)
  let seed = dt.getDate()

  let random = seededRandom(seed)
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00')
    }
    if (random() < 0.5) {
      result.push(i + ':30')
    }
  }
  return result
}

function submitAPI(formData) {
  console.log(formData)
  const id = generateBookingId()
  return id
}

const generateBookingId = () => Math.random().toString(36).slice(2, 14)

export { fetchAPI, submitAPI, generateBookingId }
