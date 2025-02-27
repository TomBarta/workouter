'use server'

import { cleanUpPayload, Payload, setGoal, setWorkoutType } from "./pageActionUtils"

export async function createWorkout(formData: FormData) {
  let payload = Object.fromEntries(formData.entries()) as unknown as Payload
  const goalSelectMenu = formData.get("goalSelectMenu")?.toString()

  // Set workout type
  payload.workoutType = setWorkoutType(goalSelectMenu)

  // Set workout goal
  payload.goal = setGoal(goalSelectMenu)

  payload = cleanUpPayload(payload)


  console.log('payload: ', payload)

  const response = await fetch(`http://127.0.0.1:8080/workout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json(); // update this to handle a response that includes a binary file ai!
  return result;
}

