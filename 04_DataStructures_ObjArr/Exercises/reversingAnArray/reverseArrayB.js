const reverseArray = arr => {
  let result = []

  for (let i = arr.length - 1; i > 0; i--) {
    result.push(arr[i])
  }

  return result
}

module.exports = reverseArray

/* const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const result = reverseArray(array1)
console.log(result)
 */
