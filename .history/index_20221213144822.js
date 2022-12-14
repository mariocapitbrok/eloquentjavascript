function multiplier(factor) {
  return number => number * factor
}

let twice = multiplier(2)
console.log(twice(5))

let byTwo = multiplier(2)
console.log(byTwo(3))
