function range(start, end, step) {
  let result = []

  if (step < 0) {
    for (let i = end; i <= start; i += step) {
      result.push(i)
    }

    return result
  }

  if (!step || step === 0) step = 1

  for (let i = start; i <= end; i += step) {
    result.push(i)
  }

  return result
}

//module.exports = range

const result = range(5, 2, -1)
console.log(result)
