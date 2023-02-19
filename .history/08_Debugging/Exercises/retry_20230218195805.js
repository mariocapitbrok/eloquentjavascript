function MultiplicatorUnitFailure(message) {
  this.message = message
  this.stack = new Error().stack
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype)
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure'

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b
  } else {
    throw new MultiplicatorUnitFailure('Klunk')
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b)
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log('Multiplication failed: ', e.message)
      } else {
        throw e
      }
    }
  }
}

console.log(reliableMultiply(8, 8))
// → 64
