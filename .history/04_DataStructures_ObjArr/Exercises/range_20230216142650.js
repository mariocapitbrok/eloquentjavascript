function range(start, end) {
  let result = []

  for (let i = start; i <= end; i++) {
    result.push(i)
  }

  return result
}

module.exports = range

const result = range(1, 10)
console.log(result)
