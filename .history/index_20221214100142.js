const isEven = number => {
  if (Math.abs(number) === 0) return true
  if (Math.abs(number) === 1) return false

  return isEven(number - 2)
}

const result = isEven(-1)
console.log(result)
