/*
Groups and capturing: Groups are used to match multiple characters as a single unit, and capturing allows you to extract the matched groups from the string. You can use parentheses to create groups and reference them using backreferences (e.g., \1, \2, etc.). For example, to create a regular expression that matches a date in the format "YYYY-MM-DD" and captures the year, month, and day separately, you can use the following syntax:

/(\d{4})-(\d{2})-(\d{2})/

You can then use the match() method to extract the captured groups from the string:
*/

const dateString = '2023-02-19'
const [fullMatch, year, month, day] = dateString.match(
  /(\d{4})-(\d{2})-(\d{2})/
)
console.log(year, month, day) // prints "2023 02 19"
