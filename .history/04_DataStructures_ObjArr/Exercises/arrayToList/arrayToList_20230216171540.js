const arrayToList = arr => {
  let list = null

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list }
  }

  return list
}

const a = [1, 2, 3]
const result = arrayToList(a)
console.log(result)
