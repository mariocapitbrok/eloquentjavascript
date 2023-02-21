// In a regular expression, putting a set of characters between square brackets makes that part of the expression match any of the characters between the brackets.

console.log(/[0123456789]/.test('in 1992'))
// → true
console.log(/[0-9]/.test('in 1992'))
// → true
console.log(/[\d+]/.test('in 1992'))
// → true
