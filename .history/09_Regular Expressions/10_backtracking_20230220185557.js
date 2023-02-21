// The regular expression /\b([01]+b|[\da-f]+h|\d+)\b/ matches either a binary number followed by a b, a hexadecimal number (that is, base 16, with the letters a to f standing for the digits 10 to 15) followed by an h, or a regular decimal number with no suffix character.

const str = '103'
const regex = /\b([01]+b|[\da-f]+h|\d+)\b/
const result = regex.test(str)
console.log(result)
