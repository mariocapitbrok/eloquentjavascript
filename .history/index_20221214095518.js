const isEven = number => {
  if (number === 0) return true
  if (number === 1) return false

  return isEven(number - 2)
}

const result = isEven(25)
console.log(result)
