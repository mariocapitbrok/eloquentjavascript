function sum(numArr) {
  let result = null

  console.log(numArr)

  for (let num of numArr) {
    result = result + num
  }

  return result
}

module.exports = sum()

const a = [1, 2, 3, 4, 5]
const result = sum(a)
console.log(result)
