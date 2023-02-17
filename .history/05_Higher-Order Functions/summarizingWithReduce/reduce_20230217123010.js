function reduce(array, combine, start) {
  let current = start
  for (let element of array) {
    current = combine(current, element)
  }
  return current
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))
// → 10

/*
The standard array method reduce, which of course corresponds to this function, has an added convenience. If your array contains at least one element, you are allowed to leave off the start argument. The method will take the first element of the array as its start value and start reducing at the second element.
*/

console.log([1, 2, 3, 4].reduce((a, b) => a + b))
// → 10
