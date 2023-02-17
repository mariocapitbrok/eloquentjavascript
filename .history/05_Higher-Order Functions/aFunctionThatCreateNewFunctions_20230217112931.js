function greaterThan(n) {
  return m => m > n
}

console.log(greaterThan(10))

let greaterThan10 = greaterThan(10)
console.log(greaterThan10(11))
// → true
