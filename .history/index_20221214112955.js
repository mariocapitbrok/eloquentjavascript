const countChar = (str, char) => {
  const find = (start, target, history) => {
    if (start > str.length - 1) return history

    if (str[start] === target) {
      history = history + target
      return find(start + 1, target, history)
    }

    return find(start + 1, target, history)
  }

  return find(0, char, '').length
}

const str = `Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is
to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.`

const result = countChar(str, 'R')
console.log(result)
