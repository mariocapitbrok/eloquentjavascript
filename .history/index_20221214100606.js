const isEven = number => {
  if (number < 0) number = number * -1
  if (number === 0) return true
  if (number === 1) return false

  return isEven(number - 2)
}

const result = isEven(-2)
console.log(result)
