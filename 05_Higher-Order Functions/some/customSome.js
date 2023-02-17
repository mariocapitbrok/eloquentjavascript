const SCRIPTS = require('./data/scripts')

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to
      })
    ) {
      return script
    }
  }
  return null
}

console.log(characterScript(121))
// → {name: "Latin", …}

/*
The some method is another higher-order function. It takes a test function and tells you whether that function returns true for any of the elements in the array.
*/
