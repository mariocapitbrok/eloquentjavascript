// When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once. Thus, /\d+/ matches one or more digit characters.

console.log(/'\d+'/.test("'123'"))
// → true
console.log(/'\d+'/.test("''"))
// → false
console.log(/'\d*'/.test("'123'"))
// → true
console.log(/'\d*'/.test("''"))
// → true

// The star (*) has a similar meaning but also allows the pattern to match zero times. Something with a star after it never prevents a pattern from matching—it’ll just match zero instances if it can’t find any suitable text to match.

// A question mark makes a part of a pattern optional, meaning it may occur zero times or one time. In the following example, the u character is allowed to occur, but the pattern also matches when it is missing.

let neighbor = /neighbou?r/
console.log(neighbor.test('neighbour'))
// → true
console.log(neighbor.test('neighbor'))
// → true

// To indicate that a pattern should occur a precise number of times, use braces.
