// The regular expression /\b([01]+b|[\da-f]+h|\d+)\b/ matches either a binary number followed by a b, a hexadecimal number (that is, base 16, with the letters a to f standing for the digits 10 to 15) followed by an h, or a regular decimal number with no suffix character.

const str = '103'
const regex = /\b([01]+b|[\da-f]+h|\d+)\b/
const result = regex.test(str)
console.log(result)

/*
In regular expressions, backtracking refers to the process by which the regex engine tries different alternatives to match a particular pattern. Regular expressions are often used to search for patterns within text, and backtracking is an important mechanism that allows regular expressions to be flexible and powerful.

When a regular expression contains alternations or optional elements, the regex engine may need to try multiple possibilities in order to find a match. For example, consider the regular expression (a|ab)c, which matches either the string "ac" or the string "abc". When the regex engine encounters this pattern, it first tries to match "ac" by matching the "a" character, then the "c" character. If this attempt fails, the engine backtracks and tries the second alternative, which involves matching "abc" by matching the "a" character, then the "b" character, and finally the "c" character.

Backtracking can be expensive, especially if the regular expression contains many alternatives or optional elements. To improve performance, regular expression engines often use optimizations such as greedy matching, which tries to match as much of the input as possible without backtracking.

However, sometimes backtracking is necessary to find the correct match, especially when the regular expression contains complex patterns such as lookarounds or recursive expressions. In these cases, the regex engine may need to try many alternatives and backtrack multiple times before finding a match.

Overall, backtracking is an important part of regular expression matching, but it can be a source of performance problems in certain cases. It's important to understand how backtracking works and to use regular expressions judiciously to avoid performance issues.
*/
