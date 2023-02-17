/*
You can use the reduce method in combination with the concat method to flatten the array of arrays into a single array. Here's an example of how to do it:
*/

let arrays = [[1, 2, 3], [4, 5], [6]]

let flattenedArray = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray)
}, [])

console.log(flattenedArray)
// [1, 2, 3, 4, 5, 6]

/*
In this example, the reduce method takes two arguments: a callback function and an initial value. The callback function is called for each element of the arrays array, with the first argument being the accumulator and the second argument being the current array. The callback function uses the concat method to merge the current array with the accumulator, and returns the result. The initial value is an empty array, which is the starting value of the accumulator. The result of the reduce method is the flattened array.
*/
