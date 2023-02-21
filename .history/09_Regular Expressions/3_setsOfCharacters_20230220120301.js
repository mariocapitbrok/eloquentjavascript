// In a regular expression, putting a set of characters between square brackets makes that part of the expression match any of the characters between the brackets.

console.log(/[0123456789]/.test('in 1992'))
// → true
console.log(/[0-9]/.test('in 1992'))
// → true
console.log(/[\d]/.test('in 1992'))
// → true

// Within square brackets, a hyphen (-) between two characters can be used to indicate a range of characters, where the ordering is determined by the character’s Unicode number. Characters 0 to 9 sit right next to each other in this ordering (codes 48 to 57), so [0-9] covers all of them and matches any digit.
