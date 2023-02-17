function sum(...numArr) {
  let result = 0

  for (let num of numArr) {
    result += num
  }

  return result
}

module.exports = sum()

const a = [1, 2, 3, 4, 5]
const result = sum(...a)
console.log(result)
