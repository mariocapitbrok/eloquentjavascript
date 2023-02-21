//  Characters that are composed of two code units behave strangely.
console.log(/🍎{3}/.test('🍎🍎🍎'))
// → false
console.log(/<.>/.test('<🌹>'))
// → false
console.log(/<.>/u.test('<🌹>'))
// → true

// The u flag at the end of the regular expression indicates that the regular expression should be treated as a Unicode regular expression.
