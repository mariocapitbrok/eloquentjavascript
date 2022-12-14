const isEven = number => {
  if (Abs(number) === 0) return true
  if (Abs(number) === 1) return false

  return isEven(number - 2)
}

const result = isEven(-1)
console.log(result)
