// Fill in the regular expressions

// car and cat
verify(/ca[rt]/, ['my car', 'bad cats'], ['camper', 'high art'])
/*
Explanation:

c matches the letter "c".
a matches the letter "a".
[rt] matches either "r" or "t".

*/

// pop and prop
verify(/pr?op/, ['pop culture', 'mad props'], ['plop', 'prrrop'])
/*
Explanation:

p matches the letter "p".
r? matches zero or one occurrence of the letter "r".
op matches the letters "o" and "p" in sequence.

*/

/*verify(/.../,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/.../,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/.../,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/.../,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/.../,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]); */

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == '...') return
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`)
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`)
    }
}
