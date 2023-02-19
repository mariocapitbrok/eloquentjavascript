class group {
  constructor() {
    this.members = []
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value)
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.members = this.members.filter(v => v !== value)
    }
  }

  has(value) {
    return this.members.includes(value)
  }

  static from(iterator) {
    const group = new Group()
    for (let value of iterator) {
      group.add(value)
    }
    return group
  }

  [Symbol.iterator]() {
    let index = 0
    let members = this.members
    return {
      next() {
        if (index >= members.length) {
          return { value: undefined, done: true }
        } else {
          return { value: members[index++], done: false }
        }
      },
    }
  }
}

for (let value of new Group([a, b, c])) {
  console.log(value)
}
