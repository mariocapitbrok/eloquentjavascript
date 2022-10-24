const drawChessboard = (size = 8) => {
  let array = []
  for (let row = 1; row <= size; row++) {
    if (row % 2 === 0) {
      for (let col = 0; col < size; col++) {
        col % 2 !== 0 ? array.push('#') : array.push('')
      }
      array.push('\n')
    } else {
      for (let col = 0; col < size; col++) {
        col % 2 === 0 ? array.push('#') : array.push('')
      }
      array.push('\n')
    }
  }

  let string = array.join(' ')
  return string
}

const result = drawChessboard(8)
console.log(result)
