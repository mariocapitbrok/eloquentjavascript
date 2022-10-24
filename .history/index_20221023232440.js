const drawChessboard = (size = 8) => {
  let array = []
  for (let row = 1; row <= size; row++) {
    if (row % 2 === 0) {
      for (let col = 0; col <= size; col++) {
        col % 2 === 0 ? array.push('#') : array.push(' ')
      }
    } else {
      for (let col = 0; col <= size; col++) {
        col % 2 !== 0 ? array.push(' ') : array.push('#')
      }
    }
  }

  let string = array.join(' ')
  return string
}

const result = drawChessboard()
console.log(result)
