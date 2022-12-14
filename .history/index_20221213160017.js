function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number)
  while (numberString.length < 3) {
    numberString = '0' + numberString
  }
  console.log(`${numberString} ${label}`)
}

function printFramInventory(cows, chickens) {
  let cowString = String(cows)
  while (cowString.length < 3) {
    cowString = '0' + cowString
  }
  console.log(`${cowString} Cows`)

  let chickenString = String(chickens)
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString
  }
  console.log(`${chickenString} Chickens`)
}

printFramInventory(7, 11)
