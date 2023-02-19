class Group {
  constructor() {
    this.members = []
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value)
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value)
  }

  has(value) {
    return this.members.includes(value)
  }

  static from(iterable) {
    const group = new Group()
    for (let value of iterable) {
      group.add(value)
    }
    return group
  }
}
