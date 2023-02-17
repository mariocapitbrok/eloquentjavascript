const listToArray = list => {
  let arr = []

  for (let node = list.node; node; node = node.rest) {
    arr.push(node.value)
  }

  return arr
}
