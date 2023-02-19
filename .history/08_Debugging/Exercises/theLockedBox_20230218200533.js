const box = {
  locked: true,
  unlock() {
    this.locked = false
  },
  lock() {
    this.locked = true
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!')
    return this._content
  },
}

function withBoxUnlocked(body) {
  const wasLocked = box.locked
  box.unlock()
  try {
    body()
  } finally {
    if (wasLocked) {
      box.lock()
    } else {
      box.unlock()
    }
  }
}

// Testing the withBoxUnlocked function
withBoxUnlocked(function () {
  box.content.push('gold piece')
})
console.log(box.content)
// → ["gold piece"]

try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!')
  })
} catch (e) {
  console.log('Error raised:', e)
}
console.log(box.locked)
// → true
