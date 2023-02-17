/*
Your own loop
Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/

function loop(value, testFn, updateFn, bodyFn) {
  for (let i = value; testFn(i); i = updateFn(i)) {
    bodyFn(i)
  }
}

/*
The loop function takes four arguments:

value: the initial value for the loop.
testFn: a function that takes the current value and returns a boolean value indicating whether the loop should continue.
updateFn: a function that takes the current value and returns a new value to be used in the next iteration of the loop.
bodyFn: a function that takes the current value and performs some action on it.
The function uses a regular for loop to iterate over the values, starting with the initial value and updating it with the updateFn on each iteration. It checks whether the loop should continue by calling the testFn on the current value. If the testFn returns false, the loop stops. Otherwise, it calls the bodyFn on the current value.

Here's an example usage of the loop function that prints the values from 3 to 1:
*/

loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log
)
// Output:
// 3
// 2
// 1

/*
In this example, the testFn checks whether the current value n is greater than 0, and the updateFn subtracts 1 from the current value on each iteration. The bodyFn simply logs the current value to the console.
*/
