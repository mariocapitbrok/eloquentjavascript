function multiplier(factor) {
  return number => number * factor
}

let twice = multiplier(2)
console.log(twice(5))

console.log(multiplier(3))
