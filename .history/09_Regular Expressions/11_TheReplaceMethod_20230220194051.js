// String values have a replace method that can be used to replace part of the string with another string.
console.log('papa'.replace('p', 'm'))
// → mapa

// The first argument can also be a regular expression, in which case the first match of the regular expression is replaced. When a g option (for global) is added to the regular expression, all matches in the string will be replaced, not just the first.

console.log('Borobudur'.replace(/[ou]/, 'a'))
// → Barobudur
console.log('Borobudur'.replace(/[ou]/g, 'a'))
// → Barabadar

// It would have been sensible if the choice between replacing one match or all matches was made through an additional argument to replace or by providing a different method, replaceAll. But for some unfortunate reason, the choice relies on a property of the regular expression instead.

// The real power of using regular expressions with replace comes from the fact that we can refer to matched groups in the replacement string. For example, say we have a big string containing the names of people, one name per line, in the format Lastname, Firstname. If we want to swap these names and remove the comma to get a Firstname Lastname format, we can use the following code:
console.log(
  'Liskov, Barbara\nMcCarthy, John\nWadler, Philip'.replace(
    /(\w+), (\w+)/g,
    '$2 $1'
  )
)
// → Barbara Liskov
//   John McCarthy
//   Philip Wadler
