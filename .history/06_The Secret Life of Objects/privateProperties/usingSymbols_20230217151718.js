const myPrivateProperty = Symbol('myPrivateProperty')

class MyClass {
  constructor() {
    this[myPrivateProperty] = 'secret'
  }

  getSecret() {
    return this[myPrivateProperty]
  }
}
