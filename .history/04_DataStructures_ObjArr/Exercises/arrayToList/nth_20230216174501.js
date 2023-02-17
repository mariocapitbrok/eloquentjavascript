function nth(list, index) {
  if (!list) return undefined
  if (index === 0) return list.value

  return nth(list.rest, index - 1)
}
