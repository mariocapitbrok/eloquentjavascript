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

// The $1 and $2 in the replacement string refer to the parenthesized groups in the pattern. $1 is replaced by the text that matched against the first group, $2 by the second, and so on, up to $9. The whole match can be referred to with $&.

// It is possible to pass a function—rather than a string—as the second argument to replace. For each replacement, the function will be called with the matched groups (as well as the whole match) as arguments, and its return value will be inserted into the new string.

// Here’s a small example:
let s = 'the cia and fbi'
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()))
// → the CIA and FBI

// Here’s a more interesting one:
let stock = '1 lemon, 2 cabbages, and 101 eggs'
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1
  if (amount == 1) {
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1)
  } else if (amount == 0) {
    amount = 'no'
  }
  return amount + ' ' + unit
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne))
// → no lemon, 1 cabbage, and 100 eggs
