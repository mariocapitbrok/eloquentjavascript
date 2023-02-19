class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(otherVec) {
    return new Vec(this.x + otherVec.x, this.y + otherVec.y)
  }

  minus(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y)
  }
}
