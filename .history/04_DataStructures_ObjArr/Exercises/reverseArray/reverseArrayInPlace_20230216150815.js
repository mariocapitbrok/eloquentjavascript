const reverseArrayInPlace = arr => {
  for (const v of arr.values()) {
    arr.push(arr.shift(v))
  }

  return arr
}

const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const result = reverseArrayInPlace(array1)
console.log(result)
