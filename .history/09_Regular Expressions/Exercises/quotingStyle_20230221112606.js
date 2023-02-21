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
