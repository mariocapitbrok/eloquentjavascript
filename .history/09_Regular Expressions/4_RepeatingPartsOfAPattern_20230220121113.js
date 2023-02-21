// When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once. Thus, /\d+/ matches one or more digit characters.

console.log(/'\d+'/.test("'123'"))
// → true
console.log(/'\d+'/.test("''"))
// → false
console.log(/'\d*'/.test("'123'"))
// → true
console.log(/'\d*'/.test("''"))
// → true
