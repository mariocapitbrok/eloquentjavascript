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

/*
Pros:
  WeakMaps provide complete privacy for properties, as they are not accessible from outside the object.
  WeakMaps are efficient and do not create memory leaks, as they only hold weak references to the object keys.

Cons:
  WeakMaps are not as widely used as other techniques and may be less familiar to other developers.
  WeakMaps can be less efficient than other techniques for very small objects, as the overhead of creating the WeakMap can outweigh the benefits of using it.
*/

// In general, if privacy is a top concern, the WeakMap approach may be the best choice.
