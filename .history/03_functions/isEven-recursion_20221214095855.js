const isEven = number => {
  if (number === 0) return true
  if (number === 1) return false

  console.log(number)
  return isEven(number - 2)
}

const result = isEven(8)
console.log(result)
