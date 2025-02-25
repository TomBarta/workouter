'use server'

import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES } from "react"
import { WorkoutGoalTypes, workoutType } from "../utils/workouts"

export function setWorkoutType(goalSelectMenu: string | undefined) {
  switch (goalSelectMenu) {
    case 'distance':
    case 'time':
    case 'calories':
    case 'open':
      return workoutType.singleGoalWorkout
    case 'pacer':
      return workoutType.pacerWorkout
    case 'custom':
      return workoutType.customWorkout
  }
  return workoutType.singleGoalWorkout
}

export function setGoal(goalSelectMenu: string | undefined) {
  switch (goalSelectMenu) {
    // case 'distance':
    // case 'time':
    // case 'calories':
    case 'open':
      return WorkoutGoalTypes.open
    // case 'pacer':
    //   payload.workoutType = workoutType.pacerWorkout
    //   break
    // case 'custom':
    //   payload.workoutType = workoutType.customWorkout
    //   break
  }
  return WorkoutGoalTypes.open
}

export function cleanUpPayload(payload) {
  delete payload.goalSelectMenu
  return payload
}

export async function createWorkout(formData: FormData) {
  let payload = Object.fromEntries(formData.entries())
  const goalSelectMenu = formData.get("goalSelectMenu")?.toString()

  // Set workout type
  payload.workoutType = setWorkoutType(goalSelectMenu)

  // Set workout goal
  payload.goal = setGoal(goalSelectMenu)

  payload = cleanUpPayload(payload)


  console.log('payload: ', payload)
}

