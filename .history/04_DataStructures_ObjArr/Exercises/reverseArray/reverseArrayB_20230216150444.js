const reverseArray = arr => {
  let result = []

  for (const v of arr.values()) {
    result.unshift(v)
  }

  return result
}

module.exports = reverseArray

/* const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const result = reverseArray(array1)
console.log(result) */
