const countBs = str => {
  const positions = []

  function find(char, position) {
    if (position > str.length - 1) return
    if (str[position] === char) {
      positions.push(position)
      return
    }

    find('B', position + 1)
  }

  return positions.length
}

const str = `Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters
there are in the string`

const result = countBs(str)
console.log(result)
