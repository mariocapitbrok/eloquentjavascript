const SCRIPTS = require('./data/scripts')

function charaterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from)
  }, 0)
}

console.log(SCRIPTS.reduce((a, b) = > {
  return charaterCount(a)  < charaterCount(b) ? b : a
}))