const drawChessboard = (size = 8) => {
  let array = []
  for (let row = 1; row <= size; row++) {
    if (row % 2 === 0) {
      console.log(true)
      /* for (let col = 0; col < size; col++) {
        col % 2 === 0 ? array.push('#') : array.push('')
      } */
      array.push('\n')
    } else {
      console.log(false)
      /* for (let col = 0; col < size; col++) {
        col % 2 !== 0 ? array.push('#') : array.push('')
      } */
      array.push('\n')
    }
  }

  let string = array.join(' ')
  return string
}

const result = drawChessboard(8)
console.log(result)
