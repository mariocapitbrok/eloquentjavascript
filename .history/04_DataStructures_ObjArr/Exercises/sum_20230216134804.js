function sum(numArr) {
  let result = null

  for (let num of numArr) {
    result = result + num
  }

  return result
}

module.exports = sum()
