// When using a shared regular expression value for multiple exec calls, these automatic updates to the lastIndex property can cause problems. Your regular expression might be accidentally starting at an index that was left over from a previous call.
let digit = /\d/g
console.log(digit.exec('here it is: 1'))
// → ["1"]
console.log(digit.exec('and now: 1'))
// → null
