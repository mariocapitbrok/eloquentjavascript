const sum = numArr => {
  let result = 0

  for (const num of numArr.values()) {
    result += num
  }

  return result
}

const a = [1, 2, 3, 4, 5]
const result = sum(a)
console.log(result)
