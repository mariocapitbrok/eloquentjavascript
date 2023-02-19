class group {
  constructor() {
    this.members = []
  }

  add(value) {
    if (!this.members.has(value)) {
      this.members.push(value)
    }
  }

  delete(value) {
    if (this.members.has(value)) {
      this.members.filter(v => v !== value)
    }
  }

  has(value) {
    return this.members.includes(value)
  }
}
