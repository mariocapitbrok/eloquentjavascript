function noisy(f) {
  return (...args) => {
    console.log('calling with', args)
    let result = f(...args)
    console.log('called with', args, ', returned', result)
    return result
  }
}
noisy(Math.min)(3, 2, 1)
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

noisy(Math.max)(10, 3, 7)
// → calling with [ 10, 3, 7 ]
// → called with [ 10, 3, 7 ] , returned 10
