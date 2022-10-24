const drawChessboard = (size = 8) => {
  const stringLength = size * size
  let array = []
  for (let i = 0; i <= stringLength; i++) {
    i % 2 === 0 ? array.push('#') : array.push(' ')
  }
  let string = array.join(' ')
  return string
}

const result = drawChessboard()
console.log(result)
