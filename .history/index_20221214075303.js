function min(a, b) {
  if (a < b) return a
  if (b < a) return b
  return Infinity
}

result = min(2, 3)
console.log(result)
