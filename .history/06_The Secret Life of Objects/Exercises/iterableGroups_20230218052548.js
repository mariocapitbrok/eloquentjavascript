class group {
  constructor() {
    this.members = []
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value)
    }
  }

  has(value) {
    return this.members.includes(value)
  }
}
