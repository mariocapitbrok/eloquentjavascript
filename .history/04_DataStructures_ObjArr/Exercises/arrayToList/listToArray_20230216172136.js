const listToArray = list => {
  let arr = []

  for (let node = list.node; node; node = node.rest) {
    arr.push(node.value)
  }

  return arr
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
}

let result = listToArray(list)
console.log(result) // [1, 2, 3]
