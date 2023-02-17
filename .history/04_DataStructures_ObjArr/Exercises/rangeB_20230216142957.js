function range(start, end, step) {
  let result = []

  for (let i = start; i <= end; i++) {
    result.push(i)
  }

  return result
}

module.exports = range

const result = range(1, 10, 2)
console.log(result)
