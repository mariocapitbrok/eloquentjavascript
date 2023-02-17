function repeat(action, n) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

repeat(console.log, 3)

// We don’t have to pass a predefined function to repeat. Often, it is easier to create a function value on the spot instead.

let labels = []

repeat(i => {
  labels.push(`Unit ${i + 1}`)
  console.log(labels[i])
}, 5)
