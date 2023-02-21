// There are cases where you might not know the exact pattern you need to match against when you are writing your code. Say you want to look for the user’s name in a piece of text and enclose it in underscore characters to make it stand out. Since you will know the name only once the program is actually running, you can’t use the slash-based notation.

// But you can build up a string and use the RegExp constructor on that. Here’s an example:
let name = 'harry'
let text = 'Harry is a suspicious character.'
let regexp = new RegExp('\\b(' + name + ')\\b', 'gi')
console.log(text.replace(regexp, '_$1_'))
// → _Harry_ is a suspicious character.

// When creating the \b boundary markers, we have to use two backslashes because we are writing them in a normal string, not a slash-enclosed regular expression.
