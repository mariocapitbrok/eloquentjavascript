const reverseArrayInPlace = arr => {
  for (const v of arr.values()) {
    arr.unshift(arr.pop(v))
  }

  return arr
}

const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const result = reverseArrayInPlace(array1)
console.log(result)
