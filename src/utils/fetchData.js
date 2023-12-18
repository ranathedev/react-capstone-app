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

const generateBookingId = () => Math.random().toString(36).slice(2, 14)

function submitAPI(formData) {
  if (formData) {
    try {
      localStorage.setItem('booking', JSON.stringify(formData))
    } catch (err) {
      if (err) {
        return null
      }
    }

    const data = localStorage.getItem('booking')
    if (data) {
      const id = generateBookingId()
      return id
    } else return null
  }
  return null
}

export { fetchAPI, submitAPI, generateBookingId }
