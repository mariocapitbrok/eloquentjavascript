function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number)
  while (numberString.length < 3) {
    numberString = '0' + numberString
  }
  console.log(`${numberString} ${label}`)
}

function printFramInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, 'Cows')
  printZeroPaddedWithLabel(chickens, 'Chickens')
  printZeroPaddedWithLabel(pigs, 'Pigs')
}

printFramInventory(7, 11)
