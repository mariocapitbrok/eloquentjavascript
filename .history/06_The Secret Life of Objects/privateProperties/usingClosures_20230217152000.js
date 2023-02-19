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
