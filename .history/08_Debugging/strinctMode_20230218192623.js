function canYouSpotTheProblem() {
  'use strict'
  for (let counter = 0; counter < 100; counter++) {
    console.log('Happy happy')
  }
}

canYouSpotTheProblem()
// → ReferenceError: counter is not defined
