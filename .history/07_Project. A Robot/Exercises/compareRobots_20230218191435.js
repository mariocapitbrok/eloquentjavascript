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
