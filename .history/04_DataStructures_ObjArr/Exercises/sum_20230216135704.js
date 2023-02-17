function sum(...numArr) {
  let result = 0

  for (let num of numArr) {
    console.log(typeof num)
    console.log(typeof result)
  }

  return result
}

module.exports = sum()

const a = [1, 2, 3, 4, 5]
const result = sum(a)
console.log(result)
