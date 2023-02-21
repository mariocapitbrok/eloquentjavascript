/*
Numbers again
Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t.
*/

// Fill in this regular expression.
// let number = /^...$/
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/

// Tests:
for (let str of [
  '1',
  '-1',
  '+15',
  '1.55',
  '.5',
  '5.',
  '1.3e2',
  '1E-4',
  '1e+12',
]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`)
  }
}
for (let str of ['1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5', '.']) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`)
  }
}

/*
^[+\-]? matches an optional plus or minus sign at the start of the string.
(\d+(\.\d*)?|\.\d+) matches a number with at least one digit before or after the decimal point. The first alternative \d+(\.\d*)? matches one or more digits followed by an optional decimal point and zero or more digits. The second alternative \.\d+ matches a decimal point followed by one or more digits.
([eE][+\-]?\d+)? is an optional non-capturing group that matches an exponent notation, as in the previous regular expressions.
$ matches the end of the string.

*/
