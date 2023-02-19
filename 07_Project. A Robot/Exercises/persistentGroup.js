/*
The "Persistent group" exercise in Chapter 6 of "Eloquent JavaScript" asks the reader to implement a Group class that works similarly to the built-in Set class, but allows for adding and deleting elements in an immutable way.
*/

class Group {
  constructor(members = []) {
    this.members = members
  }

  add(value) {
    if (!this.has(value)) {
      return new Group(this.members.concat([value]))
    } else {
      return this
    }
  }

  delete(value) {
    if (this.has(value)) {
      return new Group(this.members.filter(m => m !== value))
    } else {
      return this
    }
  }

  has(value) {
    return this.members.includes(value)
  }

  static from(iterable) {
    return new Group([...iterable])
  }
}

/*
This Group class has a constructor that takes an optional array of initial members, an add method that returns a new Group with the specified element added if it doesn't already exist in the group, a delete method that returns a new Group with the specified element removed if it exists in the group, a has method that returns a boolean indicating whether the specified element exists in the group, and a static from method that takes an iterable and returns a new Group containing its elements.

To ensure that the Group objects are immutable, both the add and delete methods return a new Group object with the modified state, rather than modifying the existing Group object in place.
*/

// Here is an example of how to use the Group class:

let group = Group.from([1, 2, 3])
console.log(group.has(1)) // → true
console.log(group.has(4)) // → false

let newGroup = group.add(4)
console.log(newGroup.has(4)) // → true

let finalGroup = newGroup.delete(3)
console.log(finalGroup.has(3)) // → false
console.log(group.has(3)) // → true

/*
This example creates a Group object containing the elements 1, 2, and 3, checks if it contains the elements 1 and 4, adds the element 4 to the group, removes the element 3 from the new group, and checks that the final group doesn't contain the element 3, while the original group still does.
*/
