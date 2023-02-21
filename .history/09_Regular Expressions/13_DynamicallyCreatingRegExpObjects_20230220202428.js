// There are cases where you might not know the exact pattern you need to match against when you are writing your code. Say you want to look for the user’s name in a piece of text and enclose it in underscore characters to make it stand out. Since you will know the name only once the program is actually running, you can’t use the slash-based notation.

// But you can build up a string and use the RegExp constructor on that. Here’s an example:
let name1 = 'harry'
let text1 = 'Harry is a suspicious character.'
let regexp1 = new RegExp('\\b(' + name1 + ')\\b', 'gi')
console.log(text1.replace(regexp1, '_$1_'))
// → _Harry_ is a suspicious character.

// When creating the \b boundary markers, we have to use two backslashes because we are writing them in a normal string, not a slash-enclosed regular expression.

// The second argument to the RegExp constructor contains the options for the regular expression—in this case, "gi" for global and case insensitive.
let name2 = 'dea+hl[]rd'
let text2 = 'This dea+hl[]rd guy is super annoying.'
let escaped2 = name2.replace(/[\\[.+*?(){|^$]/g, '\\$&')
let regexp2 = new RegExp('\\b' + escaped2 + '\\b', 'gi')
console.log(text2.replace(regexp2, '_$&_'))
// → This _dea+hl[]rd_ guy is super annoying.
