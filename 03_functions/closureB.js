function multiplier(factor) {
  console.log('factor', factor, 'number', number)
  return number => number * factor
}

let twice = multiplier(2)
console.log(twice(5))

/*
A good mental model is to think of function values as containing both the code
in their body and the environment in which they are created. When
called, the function body sees the environment in which it was created,
not the environment in which it is called.
*/
