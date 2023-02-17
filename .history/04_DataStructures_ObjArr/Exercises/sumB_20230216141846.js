const sum = numArr => {
  let result = 0

  for (let i = 0; i < numArr.length; i++) {
    result += numArr[i]
  }

  return result
}

const a = [1, 2, 3, 4, 5]
const result = sum(a)
console.log(result)
