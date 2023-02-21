// exec (execute) method that will return null if no match was found and return an object with information about the match otherwise.

let match = /\d+/.exec('one two 100')
console.log(match)
// → ["100"]
console.log(match.index)
// → 8

// An object returned from exec has an index property that tells us where in the string the successful match begins.

// String values have a match method that behaves similarly.
const result = 'one two 100'.match(/\d+/)
console.log(result)
// → ["100"]
console.log(result.index)
console.log(result[index])
