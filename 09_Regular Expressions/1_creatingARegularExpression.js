let reg1 = new RegExp('abc')
let reg2 = /abc/

// Both of those regular expression objects represent the same pattern: an a character followed by a b followed by a c.

/*
When using the RegExp constructor, the pattern is written as a normal string, so the usual rules apply for backslashes.

The second notation, where the pattern appears between slash characters, treats backslashes somewhat differently. First, since a forward slash ends the pattern, we need to put a backslash before any forward slash that we want to be part of the pattern. In addition, backslashes that aren’t part of special character codes (like \n) will be preserved, rather than ignored as they are in strings, and change the meaning of the pattern. Some characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslash if they are meant to represent the character itself.
*/

let eighteenPlus = /eighteen\+/
