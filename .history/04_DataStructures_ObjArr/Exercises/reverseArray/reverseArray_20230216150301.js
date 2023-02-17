const reverseArray = arr => {
  let result = []

  for (const v of arr.values()) {
    console.log(v)
    result.shift(v)
  }

  return result
}

const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const result = reverseArray(array1)
console.log(result)
