// JavaScript has a standard class for representing dates—or, rather, points in time. It is called Date. If you simply create a date object using new, you get the current date and time.
console.log(new Date())
// → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)

// You can also create an object for a specific time.
console.log(new Date(2009, 11, 9))
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999))
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)
