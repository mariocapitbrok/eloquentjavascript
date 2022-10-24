const drawChessboard = (size = 8) => {
  stringLength = size * size
  string = ''
  for (let i = 0; i <= stringLength; i++) {
    if (i % size) string.push('\n')
    i % 2 === 0 ? string.push('#') : string.push(' ')
  }
  return string
}

const result = drawChessboard()
console.log(result)
