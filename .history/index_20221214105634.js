const countBs = str => {
  const positions = []

  find(char, position) {
    if (position > str.length -1) return 
    if (str[position] === char) {
      positions.push(position)
      return
    }

    find('B', position + 1)

  }

  return positions.length

}

const result = countBs('b')
console.log(result)
