//  Characters that are composed of two code units behave strangely.
console.log(/🍎{3}/.test('🍎🍎🍎'))
// → false
console.log(/<.>/.test('<🌹>'))
// → false
console.log(/<.>/u.test('<🌹>'))
// → true

// The u flag at the end of the regular expression indicates that the regular expression should be treated as a Unicode regular expression.

// The problem is that the 🍎 in the first line is treated as two code units, and the {3} part is applied only to the second one. Similarly, the dot matches a single code unit, not the two that make up the rose emoji.

// You must add a u option (for Unicode) to your regular expression to make it treat such characters properly.

// Though this was only just standardized and is, at the time of writing, not widely supported yet, it is possible to use \p in a regular expression (that must have the Unicode option enabled) to match all characters to which the Unicode standard assigns a given property.
console.log(/\p{Script=Greek}/u.test('α'))
// → true
console.log(/\p{Script=Arabic}/u.test('α'))
// → false
console.log(/\p{Alphabetic}/u.test('α'))
// → true
console.log(/\p{Alphabetic}/u.test('!'))
// → false
