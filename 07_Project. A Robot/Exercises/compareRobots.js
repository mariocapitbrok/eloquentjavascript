/*
The URL https://eloquentjavascript.net/07_robot.html is a link to the seventh chapter of the book "Eloquent JavaScript" by Marijn Haverbeke. This chapter discusses programming concepts related to robot simulation, such as control flow, functions, and data structures.

The "Measuring a robot" exercise in this chapter asks the reader to create a function compareRobots that takes two robot constructors and an array of tasks as arguments. The function should generate 100 random instances of the tasks and run them on both robots. It should then calculate and return the average number of steps each robot took per task.
*/

function compareRobots(robot1, robot2, tasks) {
  let totalSteps1 = 0
  let totalSteps2 = 0

  for (let i = 0; i < 100; i++) {
    let state = VillageState.random(tasks.length)
    totalSteps1 += runRobot(state, robot1, tasks)
    totalSteps2 += runRobot(state, robot2, tasks)
  }

  let avgSteps1 = totalSteps1 / 100
  let avgSteps2 = totalSteps2 / 100

  console.log(`Robot 1 took an average of ${avgSteps1} steps per task`)
  console.log(`Robot 2 took an average of ${avgSteps2} steps per task`)

  if (avgSteps1 < avgSteps2) {
    console.log('Robot 1 was faster!')
  } else if (avgSteps2 < avgSteps1) {
    console.log('Robot 2 was faster!')
  } else {
    console.log('Both robots took the same amount of steps on average.')
  }
}

/*
This solution assumes that runRobot is a function that takes a state object, a robot constructor, and an array of tasks as arguments, and returns the number of steps the robot took to complete the tasks. The VillageState.random function is a helper function that generates a random starting state for the robot simulation. The compareRobots function runs each robot on 100 instances of the tasks, calculates the average number of steps each robot took per task, and logs the results to the console. It also prints a message indicating which robot was faster, or whether both robots took the same amount of steps on average.
*/
