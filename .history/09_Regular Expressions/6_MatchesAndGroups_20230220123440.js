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
// → 8

// When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups will also show up in the array.

// The whole match is always the first element. The next element is the part matched by the first group (the one whose opening parenthesis comes first in the expression), then the second group, and so on.

const regex = /(\w+)\s(\w+)/
const str = 'John Doe'
const match3 = regex.exec(str)
console.log(match3)
