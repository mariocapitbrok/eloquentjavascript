/*
Everything
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
*/

function everyA(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false
    }
  }
  return true
}

function everyB(array, test) {
  return !array.some(element => !test(element))
}

/*
In the second implementation, the some method returns true if there is at least one element in the array that does not satisfy the predicate function. However, since we want to return true only if all the elements satisfy the predicate function, we negate the result of some using the ! operator.

Both implementations should produce the same output for the sample inputs provided in the prompt.
*/

console.log(everyA([1, 3, 5], n => n < 10))
// → true
console.log(everyA([2, 4, 16], n => n < 10))
// → false
console.log(everyA([], n => n < 10))
// → true

console.log(everyB([1, 3, 5], n => n < 10))
// → true
console.log(everyB([2, 4, 16], n => n < 10))
// → false
console.log(everyB([], n => n < 10))
// → true
