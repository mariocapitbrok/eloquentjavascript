const VillageState = require('./VillageState')

let first = new VillageState('Post Office', [
  { place: 'Post Office', address: "Alice's House" },
])
let next = first.move("Alice's House")

console.log(next.place)
// → Alice's House
console.log(next.parcels)
// → []
console.log(first.place)
// → Post Office
