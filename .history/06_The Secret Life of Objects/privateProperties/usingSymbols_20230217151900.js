/*
Using Symbols:
JavaScript Symbols are a unique and immutable data type, which means that they can be used as property keys that are inaccessible from outside the object. This technique creates a private property that can only be accessed by methods within the same object.
*/

const myPrivateProperty = Symbol('myPrivateProperty')

class MyClass {
  constructor() {
    this[myPrivateProperty] = 'secret'
  }

  getSecret() {
    return this[myPrivateProperty]
  }
}

/*
In this example, myPrivateProperty is a Symbol that is used as the key to define a private property within the MyClass constructor. The getSecret method is able to access this private property because it is defined within the same object.
*/
