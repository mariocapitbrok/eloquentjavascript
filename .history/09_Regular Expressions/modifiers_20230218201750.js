/*
Modifiers: Modifiers are used to specify how the pattern should be matched. Some common modifiers include:

i: Case-insensitive matching
g: Global matching (i.e., matches all occurrences of the pattern in the string)
m: Multi-line matching

You can add these modifiers to the end of the regular expression.
/hello/i

*/

const result1 = /hello/.test('HELLO world') // false
console.log(result1)

const result2 = /hello/i.test('HELLO world') // true
console.log(result2)
