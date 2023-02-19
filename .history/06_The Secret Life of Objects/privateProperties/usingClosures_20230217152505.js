/*
Using closures:
Closures can be used to create private variables and methods that are only accessible within the same function or object.
*/

class MyClass {
  constructor() {
    let privateProperty = 'secret'

    this.getSecret = function () {
      return privateProperty
    }
  }
}

/*
In this example, the MyClass constructor function creates a closure that contains a private variable privateProperty. The getSecret method is defined within the same closure and is able to access this private variable.
*/

/*
Pros:
  Closures are a well-established technique in JavaScript and are widely used.
  Closures can provide complete privacy for variables and methods within the same object.

Cons:
  Closures can be memory-intensive and can slow down performance, especially when used extensively.
  Closures can make the code more verbose and difficult to read, especially when dealing with more complex objects.
*/

// If readability and maintainability are more important, closures may be a better choice.
