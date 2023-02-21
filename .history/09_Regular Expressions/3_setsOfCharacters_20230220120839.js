// In a regular expression, putting a set of characters between square brackets makes that part of the expression match any of the characters between the brackets.

console.log(/[0123456789]/.test('in 1992'))
// → true
console.log(/[0-9]/.test('in 1992'))
// → true

// Within square brackets, a hyphen (-) between two characters can be used to indicate a range of characters, where the ordering is determined by the character’s Unicode number. Characters 0 to 9 sit right next to each other in this ordering (codes 48 to 57), so [0-9] covers all of them and matches any digit.

console.log(/[\d]/.test('in 1992'))
// → true

/*
A number of common character groups have their own built-in shortcuts. Digits are one of them: \d means the same thing as [0-9].

\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline

*/

// So you could match a date and time format like 01-30-2003 15:20 with the following expression:

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime.test('01-30-2003 15:20'))
// → true
console.log(dateTime.test('30-jan-2003 15:20'))
// → false

// We’ll see a slightly improved version of this expression later.

let dateTime2 = /[\d]-[\d]-[\d] [\d]:[\d]/
console.log(dateTime2.test('01-30-2003 15:20'))
