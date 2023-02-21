// The configuration file looks like this:
/*
searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn
*/

/*
The exact rules for this format (which is a widely used format, usually called an INI file) are as follows:

Blank lines and lines starting with semicolons are ignored.

Lines wrapped in [ and ] start a new section.

Lines containing an alphanumeric identifier followed by an = character add a setting to the current section.

Anything else is invalid.

Our task is to convert a string like this into an object whose properties hold strings for settings written before the first section header and subobjects for sections, with those subobjects holding the section’s settings.
*/
function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {}
  let section = result
  string.split(/\r?\n/).forEach(line => {
    let match
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2]
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {}
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.")
    }
  })
  return result
}

console.log(
  parseINI(`
name=Vasilis
[address]
city=Tessaloniki`)
)
// → {name: "Vasilis", address: {city: "Tessaloniki"}}

// If a line is not a section header or a property, the function checks whether it is a comment or an empty line using the expression /^\s*(;.*)?$/. Do you see how it works? The part between the parentheses will match comments, and the ? makes sure it also matches lines containing only whitespace. When a line doesn’t match any of the expected forms, the function throws an exception.
