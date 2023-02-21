console.log(/abc/.test('abcde'))
// → true
console.log(/abc/.test('abxde'))
// → false

// A regular expression consisting of only nonspecial characters simply represents that sequence of characters. If abc occurs anywhere in the string we are testing against (not just at the start), test will return true.
