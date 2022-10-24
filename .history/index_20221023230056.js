const drawChessboard = (size = 8) => {
  stringLength = size * size
  console.log(stringLength)
  let string = ''
  for (let i = 0; i <= stringLength; i++) {
    if (i % size) string.concat('\n')
    i % 2 === 0 ? string.concat('#') : string.concat(' ')
  }
  return string
}

const result = drawChessboard()
console.log(result)
