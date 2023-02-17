const prepend = (element, list) => {
  return { value: element, rest: list }
}

module.exports = prepend

/* let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
}

const result = prepend(0, list)
console.log(result)
 */
