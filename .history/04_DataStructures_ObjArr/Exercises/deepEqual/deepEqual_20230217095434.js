function deepEqual(a, b) {
  if (a === b) {
    return true
  }

  if (a == null || typeof a != 'object' || b == null || typeof b != 'object') {
    return false
  }

  let keysA = Object.keys(a)
  let keysB = Object.keys(b)

  if (keysA.length != keysB.length) {
    return false
  }

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false
    }
  }

  return true
}

let obj = { here: { is: 'an' }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))
// → true

console.log(deepEqual(1, 1)) // true
console.log(deepEqual(1, 2)) // false
console.log(deepEqual('hello', 'hello')) // true
console.log(deepEqual('hello', 'world')) // false
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })) // true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })) // false
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) // false
console.log(deepEqual(null, null)) // true
console.log(deepEqual(null, { a: 1 })) // false
console.log(deepEqual({ a: 1 }, null)) // false
