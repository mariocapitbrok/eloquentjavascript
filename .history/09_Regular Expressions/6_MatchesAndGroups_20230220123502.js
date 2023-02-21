// exec (execute) method that will return null if no match was found and return an object with information about the match otherwise.

let match = /\d+/.exec('one two 100')
console.log(match)
// → ["100"]
console.log(match.index)
// → 8

// An object returned from exec has an index property that tells us where in the string the successful match begins.

// String values have a match method that behaves similarly.
const result = 'one two 100'.match(/\d+/)
console.log(result)
// → ["100"]
console.log(result.index)
// → 8

// When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups will also show up in the array.

// The whole match is always the first element. The next element is the part matched by the first group (the one whose opening parenthesis comes first in the expression), then the second group, and so on.

const regex = /(\w+)\s(\w+)/
const str = 'John Doe'
const match3 = regex.exec(str)
console.log(match3)

/*
In this example, the regular expression (\w+)\s(\w+) matches a string that contains two words separated by a space. The regular expression contains two groups, each surrounded by parentheses: (\w+) matches one or more word characters, and \s matches a single space character. The second group (\w+) again matches one or more word characters.

When the regular expression is matched against the string "John Doe", the entire matched string ("John Doe") is returned as the first element of the resulting array. The next two elements of the array are the parts of the string that matched the two groups of the regular expression: "John" (matched by the first group) and "Doe" (matched by the second group).

So the resulting array will be: ["John Doe", "John", "Doe"].

You can use the captured groups in various ways, such as extracting specific parts of the matched text or replacing parts of the string with modified versions of the captured groups.
*/
