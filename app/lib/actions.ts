'use server'

import { WorkoutGoalTypes, workoutType } from "../utils/workouts"


export async function createWorkout(formData: FormData) {
  const payload = Object.fromEntries(formData.entries())
  const goalSelectMenu = formData.get("goalSelectMenu")

  // Set workout type
  switch (goalSelectMenu) {
    case 'distance':
    case 'time':
    case 'calories':
    case 'open':
      payload.workoutType = workoutType.singleGoalWorkout
      break
    case 'pacer':
      payload.workoutType = workoutType.pacerWorkout
      break
    case 'custom':
      payload.workoutType = workoutType.customWorkout
      break
  }

  // Set workout goal
  switch (goalSelectMenu) {
    // case 'distance':
    // case 'time':
    // case 'calories':
    case 'open':
      payload.goal = WorkoutGoalTypes.open
      break
    // case 'pacer':
    //   payload.workoutType = workoutType.pacerWorkout
    //   break
    // case 'custom':
    //   payload.workoutType = workoutType.customWorkout
    //   break
  }

  delete payload.goalSelectMenu


  console.log('payload: ', payload)
}