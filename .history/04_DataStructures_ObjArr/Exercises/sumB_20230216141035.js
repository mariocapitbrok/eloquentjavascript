function sum(numArr) {
  let result = 0

  console.log(numArr, typeof numArr)

  /* for (const num of numArr.values()) {
    console.log(typeof num, num)
    //result += num
  } */

  return result
}

module.exports = sum()

let a = [1, 2, 3, 4, 5]
const result = sum(a)
console.log(result)