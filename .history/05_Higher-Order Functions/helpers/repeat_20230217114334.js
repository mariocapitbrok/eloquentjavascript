function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

module.exports = repeat
