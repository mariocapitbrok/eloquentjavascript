const countBs = str => {
  function find(start, target, history) {
    console.log(start, target)
    if (str[start] === target) {
      history = history + target
    } else if (start > str.length - 1) {
      return null
    } else {
      return find(start + 1, target, history)
    }
  }

  return find(0, 'B', '')
}

const str = `Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters
there are in the string`

const result = countBs(str)
console.log(result)
