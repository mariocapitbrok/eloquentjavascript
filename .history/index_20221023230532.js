const drawChessboard = (size = 8) => {
  stringLength = size * size
  let string = ''
  for (let i = 0; i <= stringLength; i++) {
    string.concat(' ', '#')
    console.log(string)
    if (i % size) string.concat('\n')

    i % 2 === 0 ? string.concat('#') : string.concat(' ')
  }
  console.log(string)
  return string
}

const result = drawChessboard()
console.log(result)
