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
  const contentType = response.headers.get('Content-Type');
  
  if (contentType && contentType.includes('application/json')) {
    const result = await response.json();
    return result;
  } else if (contentType && contentType.includes('application/octet-stream')) {
    // Handle binary file response
    const blob = await response.blob();
    return { success: true, blob };
  } else {
    // Handle other response types or fallback
    const text = await response.text();
    return { success: response.ok, data: text };
  }
}

