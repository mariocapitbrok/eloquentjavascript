// When using a shared regular expression value for multiple exec calls, these automatic updates to the lastIndex property can cause problems. Your regular expression might be accidentally starting at an index that was left over from a previous call.
let digit = /\d/g
console.log(digit.exec('here it is: 1'))
// → ["1"]
console.log(digit.exec('and now: 1'))
// → null

/*
The global (g) and sticky (y) options are regular expression flags that modify the behavior of a regular expression. Here's a brief overview of what each flag does:

The global (g) flag causes the regular expression to match all occurrences of the pattern in a string, not just the first one. When the g flag is used, the exec() method will continue to match the regular expression from the point where the previous match ended, rather than starting at the beginning of the string.
*/
const regex1 = /foo/g
const str1 = 'foo bar foo baz'
let match1
while ((match1 = regex1.exec(str1))) {
  console.log(`Matched "${match1[0]}" at index ${match1.index}`)
}
// Output:
// Matched "foo" at index 0
// Matched "foo" at index 8

/*
The sticky (y) flag causes the regular expression to match only at the beginning of the string (or at the position indicated by the lastIndex property of the regular expression object). When the y flag is used, the exec() method will only match if the regular expression starts at the indicated position in the string.
*/
const regex = /foo/y
const str = 'foo bar foo baz'
console.log(regex.exec(str)) // matches "foo" at index 0
console.log(regex.exec(str)) // no match, because "foo" doesn't start at index 1

/*
Both flags can be used together or separately, and they can be applied to any regular expression method that accepts flags as an optional second argument (such as match(), replace(), search(), etc.). The global and sticky flags can be useful for cases where you need to match specific patterns in a string that occur in multiple places, or to enforce a particular position or context for the regular expression.
*/

// The difference between the global and the sticky options is that, when sticky is enabled, the match will succeed only if it starts directly at lastIndex, whereas with global, it will search ahead for a position where a match can start.
let global = /abc/g
console.log(global.exec('xyz abc'))
// → ["abc"]
let sticky = /abc/y
console.log(sticky.exec('xyz abc'))
// → null
