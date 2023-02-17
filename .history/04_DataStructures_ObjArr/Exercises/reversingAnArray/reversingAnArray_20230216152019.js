const reverseArray = require('./reverseArray')
const reverseArrayInPlace = require('./reverseArrayInPlace')

console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
