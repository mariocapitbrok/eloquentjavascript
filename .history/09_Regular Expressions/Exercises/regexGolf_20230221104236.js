// Fill in the regular expressions

// car and cat
verify(/ca[rt]/, ['my car', 'bad cats'], ['camper', 'high art'])
/*
c matches the letter "c".
a matches the letter "a".
[rt] matches either "r" or "t".

*/

// regex to match: pop and prop
verify(/pr?op/, ['pop culture', 'mad props'], ['plop', 'prrrop'])
/*
p matches the letter "p".
r? matches zero or one occurrence of the letter "r".
op matches the letters "o" and "p" in sequence.

*/

// regex to match: ferret, ferry, and ferrari
verify(
  /ferr(et|y|ari)/,
  ['ferret', 'ferry', 'ferrari'],
  ['ferrum', 'transfer A']
)
/*
ferr matches the letters "ferr" in sequence.
(et|y|ari) matches either "et", "y", or "ari". The vertical bar | acts as an "or" operator within the parentheses.

*/

// regex to match: any word ending in ious
verify(
  /\b\w+ious\b/,
  ['how delicious', 'spacious room'],
  ['ruinous', 'consciousness']
)
/*
\b matches a word boundary, which means it matches the start or end of a word.
\w+ matches one or more word characters, which are letters, digits, or underscores.
ious matches the letters "i", "o", "u", and "s" in sequence.
*/

// regex that match: a whitespace character followed by a period, comma, colon, or semicolon.
verify(/\s[.,:;]/g, ['bad punctuation .'], ['escape the period'])
/*
\s matches any whitespace character, including space, tab, and newline.
[.,:;] matches any one of the characters inside the brackets, which are period, comma, colon, or semicolon.
g is a flag that stands for "global" and makes the regular expression search for all matches in the input string.
*/

// regex that match: a word longer than six letters
verify(
  /\b\w{7,}\b/,
  ['Siebentausenddreihundertzweiundzwanzig'],
  ['no', 'three small words']
)
/*
\b matches a word boundary, which means it matches the start or end of a word.
\w matches any word character, which includes letters, digits, and underscores.
{7,} specifies that the previous character (which is \w) should appear at least 7 times (longer than six).
\b matches another word boundary.

*/

// regex that match: a word without the letter e (or E)
verify(
  /^\b[^eE]\b/,
  ['red platypus', 'wobbling nest'],
  ['earth bed', 'learning ape', 'BEET']
)
/*
UNSOLVED.
*/

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
