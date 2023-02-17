function sum(numArr) {
  let result = 0
  const numbers = numArr?.values()

  for (const num of numbers) {
    console.log(typeof num, num)
    //result += num
  }

  return result
}

module.exports = sum()

const a = [1, 2, 3, 4, 5]
const result = sum(a)
console.log(result)
