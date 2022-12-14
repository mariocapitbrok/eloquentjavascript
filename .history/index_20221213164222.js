function zeroPad(number, width) {
  let string = String(number)
  while (string.length < width) {
    string = '0' + string
  }
  return string
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`)
}
