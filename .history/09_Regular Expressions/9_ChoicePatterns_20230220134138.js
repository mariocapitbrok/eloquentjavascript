// The pipe character (|) denotes a choice between the pattern to its left and the pattern to its right. So I can say this:

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(animalCount.test('15 pigs'))
// → true
console.log(animalCount.test('15 pigchickens'))
// → false
