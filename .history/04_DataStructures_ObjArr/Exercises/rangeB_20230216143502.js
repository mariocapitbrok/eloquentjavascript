function range(start, end, step) {
  let result = []

  for (let i = start; i <= end; i += step) {
    result.push(i)
  }

  return result
}

//module.exports = range

const result = range(5, 2, -1)
console.log(result)
