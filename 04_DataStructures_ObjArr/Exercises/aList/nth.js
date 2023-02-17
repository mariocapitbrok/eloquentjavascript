function nth(list, index) {
  if (!list) return undefined
  if (index === 0) return list.value

  return nth(list.rest, index - 1)
}

module.exports = nth

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

const result = nth(list, 4)
console.log(result) */
