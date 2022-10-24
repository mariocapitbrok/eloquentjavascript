const drawChessboard = (size = 8) => {
  let board = ''

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      if ((row + col) % 2 === 0) {
        board += ' '
      } else {
        board += '#'
      }
    }
    board += '\n'
  }

  return board
}

const result = drawChessboard(8)
console.log(result)
