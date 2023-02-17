const SCRIPTS = require('./data/scripts')

function filter(array, test) {
  let passed = []
  for (let element of array) {
    if (test(element)) {
      passed.push(element)
    }
  }
  return passed
}

//console.log(filter(SCRIPTS, script => script.living))
// → [{name: "Adlam", …}, …]

/*
The function uses the argument named test, a function value, to fill a “gap” in the computation—the process of deciding which elements to collect.

Note how the filter function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test. This function is pure. It does not modify the array it is given.
*/

//Like forEach, filter is a standard array method. The example defined the function only to show what it does internally. From now on, we’ll use it like this instead:

console.log(SCRIPTS.filter(s => s.direction == 'ttb'))
// → [{name: "Mongolian", …}, …]
