const countBs = str => {
  const find = (start, target, history) => {
    if (str[start] > str.length - 1) return history
    if (str[start] === target) {
      history = history + target
      return find(start + 1, target, history)
    }
    return find(start + 1, target, history)
  }

  return find(0, 'B', '').length
}

const str = `Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase âBâ characters
there are in the string`

const result = countBs(str)
console.log(result)
