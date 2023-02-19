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

/*
In this solution, we first define the MultiplicatorUnitFailure constructor function and its prototype, which we will use later to check whether an exception is of type MultiplicatorUnitFailure. Then we define the primitiveMultiply function as provided in the exercise.

The key to solving this problem is to use a while loop to repeatedly call primitiveMultiply and handle any exceptions that it throws. In each iteration of the loop, we call primitiveMultiply and wrap it in a try block. If primitiveMultiply succeeds, we return the result. If it throws an exception, we check whether the exception is of type MultiplicatorUnitFailure. If it is, we log an error message and continue to the next iteration of the loop. If it is not, we re-throw the exception to be handled elsewhere.

Finally, we call reliableMultiply with the input values 8 and 8, and log the result to the console. The output should be 64, indicating that the function successfully multiplied the two input values.
*/
