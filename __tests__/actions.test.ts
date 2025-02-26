
import { cleanUpPayload, Payload, setGoal, setWorkoutType } from '@/app/lib/actions'
import { HKWorkoutActivityType, WorkoutGoalTypes, workoutType } from '@/app/utils/workouts'
import { describe, expect, test } from 'vitest'


const testPayload: Payload = {
  workoutType: workoutType.singleGoalWorkout,
  activity: HKWorkoutActivityType.running,
  location: "indoor",
  displayName: 'test display name',
  goalSelectMenu: 'running'
}

describe('page action helper functions', () => {

  test.each([
    ['distance', workoutType.singleGoalWorkout],
    ['time', workoutType.singleGoalWorkout],
    ['calories', workoutType.singleGoalWorkout],
    ['open', workoutType.singleGoalWorkout],
  ])('setWorkoutType(%s)', (arg, expected) => {
    expect(setWorkoutType(arg)).toBe(expected)
  })

  test.each([
    ['open', { type: WorkoutGoalTypes.open }],
    [undefined, { type: WorkoutGoalTypes.open }],
  ])('setGoal(%s)', (arg, expected) => {
    expect(setGoal(arg)).toMatchObject(expected)
  })

  test.each([
    [testPayload],
  ])('cleanUpPayload(%s)', (arg) => {
    delete testPayload.goalSelectMenu
    expect(cleanUpPayload(arg)).toBe(testPayload)
  })
})

