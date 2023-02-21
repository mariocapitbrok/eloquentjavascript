/*
Creating a regular expression: You can create a regular expression by enclosing a pattern between two forward slashes.
/hello/

Matching text: You can use the test() method to check whether a string matches a regular expression. For example, to check whether the string "hello world" matches the regular expression /hello/, you can use the following code:
*/

const result = /hello/.test('hello world') // true
console.log(result)
