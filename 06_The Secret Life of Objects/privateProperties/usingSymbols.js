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

/*
Pros:
  Symbols are guaranteed to be unique, which reduces the risk of naming collisions.
  Private properties defined with Symbols are not enumerable, which means they are not returned by methods like Object.keys() or JSON.stringify().
  Symbols can be used to define multiple private properties in the same object.

Cons:
  Symbols are not completely private, as they can be accessed by methods defined within the same object.
  Using Symbols can make the code less readable, as the meaning of the Symbol is not immediately clear without additional comments.
*/

// If uniqueness and flexibility are important, Symbols may be the best option.
