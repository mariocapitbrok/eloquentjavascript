function range(start, end, step = 1) {
  let result = []

  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i)
    }

    return result
  }

  if (step === 0) step = 1

  for (let i = start; i <= end; i += step) {
    result.push(i)
  }

  return result
}

module.exports = range

/* const result = range(1, 10, 2)
console.log(result) */
