//  Characters that are composed of two code units behave strangely.
console.log(/🍎{3}/.test('🍎🍎🍎'))
// → false
console.log(/<.>/.test('<🌹>'))
// → false
console.log(/<.>/u.test('<🌹>'))
// → true

// The u flag at the end of the regular expression indicates that the regular expression should be treated as a Unicode regular expression.

// The problem is that the 🍎 in the first line is treated as two code units, and the {3} part is applied only to the second one. Similarly, the dot matches a single code unit, not the two that make up the rose emoji.

// You must add a u option (for Unicode) to your regular expression to make it treat such characters properly.

// Though this was only just standardized and is, at the time of writing, not widely supported yet, it is possible to use \p in a regular expression (that must have the Unicode option enabled) to match all characters to which the Unicode standard assigns a given property.
console.log(/\p{Script=Greek}/u.test('α'))
// → true
console.log(/\p{Script=Arabic}/u.test('α'))
// → false
console.log(/\p{Alphabetic}/u.test('α'))
// → true
console.log(/\p{Alphabetic}/u.test('!'))
// → false

// In this example, the regular expression /\p{Script=Greek}/u matches any character in the Greek script, which includes the letters α, β, and γ. The u flag at the end of the regular expression indicates that the regular expression should be treated as a Unicode regular expression.

// You can use the \p{Script} property to match any character that belongs to a specific script in the Unicode Standard. The \p{Script} property is followed by a script name enclosed in braces, such as \p{Script=Greek} to match any character in the Greek script.

// The \p{Script} property is a powerful tool for working with text that contains a mix of different scripts, such as multilingual text or historical documents. By selecting specific scripts, you can match or exclude certain characters from your regular expressions with precision. However, it's important to note that not all regular expression engines support the \p{Script} property, so be sure to check the documentation for your particular implementation.

/*
For example, you can use \p{Script} to match characters based on the script they belong to, as I mentioned in my previous answer. But there are many other Unicode properties that can be used with the \p{Property} syntax, such as:

\p{Letter} matches any letter character, including uppercase and lowercase letters.
\p{Number} matches any numeric character, including digits and special numeric symbols.
\p{Whitespace} matches any whitespace character, including spaces, tabs, and line breaks.
\p{Punctuation} matches any punctuation character, such as commas, periods, and quotation marks.
\p{Emoji} matches any emoji character.
You can also use more specific Unicode properties with the \p{Property=Value} syntax, such as \p{Script=Latin} to match any character in the Latin script, or \p{Block=Emoticons} to match any character in the Emoticons Unicode block.
*/
const regex = /\p{Block=Emoticons}/u
console.log(regex.test('😀')) // prints true
