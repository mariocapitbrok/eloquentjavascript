// It is possible to use replace to write a function that removes all comments from a piece of JavaScript code. Here is a first attempt:
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, '')
}
console.log(stripComments('1 + /* 2 */3'))
// → 1 + 3
console.log(stripComments('x = 10;// ten!'))
// → x = 10;
console.log(stripComments('1 /* a */+/* b */ 1'))
// → 1  1
