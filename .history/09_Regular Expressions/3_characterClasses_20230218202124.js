/*
Character classes: Character classes are used to match specific characters or sets of characters. Some common character classes include:

\d: Matches any digit (0-9)
\w: Matches any word character (i.e., alphanumeric characters and underscores)
\s: Matches any whitespace character (i.e., spaces, tabs, and newlines)
.: Matches any character except for a newline
You can use these character classes in your regular expressions. For example, to create a regular expression that matches a phone number in the format "(123) 456-7890," you can use the following syntax:

/\(\d{3}\) \d{3}-\d{4}/

*/
const result1 = /\(\d{3}\) \d{3}-\d{4}/.test('PhoneNumber: (123) 456-7890,') // true

console.log(result1)
