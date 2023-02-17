/*
Dominant writing direction
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/

const characterScript = require('./helpers/characterScript')
const countBy = require('./helpers/countBy')

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.direction : 'none'
  }).filter(({ name }) => name != 'none')

  if (counted.length == 0) return 'ltr'

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name
}

console.log(dominantDirection('Hello!'))
// → ltr
console.log(dominantDirection('Hey, مساء الخير'))
// → rtl

/*
This function first uses the countBy function to count the number of characters with each script direction. For each character, it uses the characterScript function to get the script object, and then returns the script direction property or "none" if no script object was found.

The countBy function returns an array of objects with a name property (the script direction) and a count property (the number of characters with that direction). The filter method removes any objects with a "none" name.

If there are no counted directions left, the function returns "ltr" as the default direction. Otherwise, it uses the reduce method to find the object with the highest count property and returns its name property (the dominant direction).
*/
