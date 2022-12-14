function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return hisotry
    } else if (current > target) {
      return null
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      )
    }
  }
}
