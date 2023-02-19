/*
Using WeakMap:
WeakMap is a built-in JavaScript data structure that allows you to create key-value pairs where the keys are objects and the values can be any type of value. In this technique, a WeakMap is used to store private properties.
*/

const privateMap = new WeakMap()

class MyClass {
  constructor() {
    privateMap.set(this, { privateProperty: 'secret' })
  }

  getSecret() {
    return privateMap.get(this).privateProperty
  }
}

/*
In this example, privateMap is a WeakMap that is used to store private properties associated with each instance of the MyClass class. The getSecret method is able to access the private property associated with the current instance of the class by retrieving the value from the privateMap.
*/
