// The pipe character (|) denotes a choice between the pattern to its left and the pattern to its right. So I can say this:

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(animalCount.test('15 pigs'))
// → true
console.log(animalCount.test('15 pigchickens'))
// → false

// Parentheses can be used to limit the part of the pattern that the pipe operator applies to, and you can put multiple such operators next to each other to express a choice between more than two alternatives.
