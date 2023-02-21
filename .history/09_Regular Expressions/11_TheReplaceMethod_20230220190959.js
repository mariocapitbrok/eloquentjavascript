// String values have a replace method that can be used to replace part of the string with another string.
console.log('papa'.replace('p', 'm'))
// → mapa

// The first argument can also be a regular expression, in which case the first match of the regular expression is replaced. When a g option (for global) is added to the regular expression, all matches in the string will be replaced, not just the first.

console.log('Borobudur'.replace(/[ou]/, 'a'))
