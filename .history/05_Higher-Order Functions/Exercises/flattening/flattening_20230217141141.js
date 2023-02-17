/*
ou can use the reduce method in combination with the concat method to flatten the array of arrays into a single array. Here's an example of how to do it:
*/

let arrays = [[1, 2, 3], [4, 5], [6]]

let flattenedArray = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray)
}, [])

console.log(flattenedArray)
// [1, 2, 3, 4, 5, 6]
