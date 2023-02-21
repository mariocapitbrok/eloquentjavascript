/*
There are several ways to take data (a string of code) and run it as part of the current program.

The most obvious way is the special operator eval, which will execute a string in the current scope. This is usually a bad idea because it breaks some of the properties that scopes normally have, such as it being easily predictable which binding a given name refers to.
*/

const x = 1
function evalAndReturnX(code) {
  eval(code)
  return x
}

console.log(evalAndReturnX('var x = 2'))
// → 2
console.log(x)
// → 1
