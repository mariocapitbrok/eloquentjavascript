//  Characters that are composed of two code units behave strangely.
console.log(/🍎{3}/.test('🍎🍎🍎'))
// → false
console.log(/<.>/.test('<🌹>'))
// → false
console.log(/<.>/u.test('<🌹>'))
// → true
