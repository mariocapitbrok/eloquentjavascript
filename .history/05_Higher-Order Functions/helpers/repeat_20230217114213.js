function repeat(action, n) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

module.exports = repeat
