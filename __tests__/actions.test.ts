
import { setGoal, setWorkoutType } from '@/app/lib/actions'
import { WorkoutGoalTypes, workoutType } from '@/app/utils/workouts'
import { describe, expect, test } from 'vitest'


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
    ['open', WorkoutGoalTypes.open],
  ])('setGoal(%s)', (arg, expected) => {
    expect(setGoal(arg)).toBe(expected)
  })
})

