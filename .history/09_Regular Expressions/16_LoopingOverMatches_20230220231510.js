// A common thing to do is to scan through all occurrences of a pattern in a string, in a way that gives us access to the match object in the loop body. We can do this by using lastIndex and exec.
let input = 'A string with 3 numbers in it... 42 and 88.'
let number = /\b\d+\b/g
let match
while ((match = number.exec(input))) {
  console.log('Found', match[0], 'at', match.index)
}
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40
