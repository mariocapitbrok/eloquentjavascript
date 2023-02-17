function sum(...numbers) {
  let result = 0

  for (let num of numbers) {
    result += num
  }

  return result
}

const a = [1, 2, 3, 4, 5]
const result = sum(...a)
console.log(result)
