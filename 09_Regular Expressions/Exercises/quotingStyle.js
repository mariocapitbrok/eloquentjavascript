/*
Quoting style
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.
*/
let text = "'I'm the cook,' he said, 'it's my job.'"
// Change this call.
console.log(text.replace(/A/g, 'B'))
// → "I'm the cook," he said, "it's my job."

// Answer:
console.log(
  text.replace(/(\B')|('\B)/g, (match, p1, p2) => {
    if (p1) {
      return '"'
    } else {
      return '"'
    }
  })
)

/*
In this regular expression, we use the alternation operator (|) to match either a single quote preceded by a non-word boundary (\B'), or a single quote followed by a non-word boundary ('\B).

In the replace function, we use two parameters, p1 and p2, to represent the two possible matches. If p1 is not undefined, we return a double quote to replace the opening single quote, otherwise we return a double quote to replace the closing single quote.

This allows us to replace all single quotes used for dialogue with double quotes in a single call, while preserving single quotes used in contractions like "aren't."
*/
