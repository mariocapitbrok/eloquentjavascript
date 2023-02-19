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
