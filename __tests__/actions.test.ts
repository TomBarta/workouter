import { cleanUpPayload, Payload, setGoal, setWorkoutType } from '@/app/lib/pageActionUtils'
import { HKWorkoutActivityType, WorkoutGoalTypes, workoutType } from '@/app/utils/workouts'
import { beforeEach, describe, expect, test } from 'vitest'

describe('page action helper functions', () => {
  let testPayload: Payload;

  beforeEach(() => {
    // Reset test payload before each test
    testPayload = {
      workoutType: workoutType.singleGoalWorkout,
      activity: HKWorkoutActivityType.running,
      location: "indoor",
      displayName: 'test display name',
      goalSelectMenu: 'running',
      swimmingLocation: 'indoors'
    };
  });

  describe('setWorkoutType', () => {
    test.each([
      ['distance', workoutType.singleGoalWorkout],
      ['time', workoutType.singleGoalWorkout],
      ['calories', workoutType.singleGoalWorkout],
      ['open', workoutType.singleGoalWorkout],
      ['pacer', workoutType.pacerWorkout],
      ['custom', workoutType.customWorkout],
      [undefined, workoutType.singleGoalWorkout],
      [null, workoutType.singleGoalWorkout],
      ['', workoutType.singleGoalWorkout],
    ])('setWorkoutType(%s) should return %s', (arg, expected) => {
      expect(setWorkoutType(arg as string | undefined)).toBe(expected);
    });
  });

  describe('setGoal', () => {
    test.each([
      ['open', { type: WorkoutGoalTypes.open }],
      [undefined, { type: WorkoutGoalTypes.open }],
      [null, { type: WorkoutGoalTypes.open }],
      ['', { type: WorkoutGoalTypes.open }],
    ])('setGoal(%s) should return goal with type %s', (arg, expected) => {
      expect(setGoal(arg as string | undefined)).toMatchObject(expected);
    });
    
    test('returns correct goal type based on input', () => {
      expect(setGoal('open')).toMatchObject({ type: WorkoutGoalTypes.open });
      expect(setGoal('distance')).toMatchObject({ type: WorkoutGoalTypes.distance });
      expect(setGoal('time')).toMatchObject({ type: WorkoutGoalTypes.time });
      expect(setGoal('calories')).toMatchObject({ type: WorkoutGoalTypes.energy });
      expect(setGoal('energy')).toMatchObject({ type: WorkoutGoalTypes.energy });
    });
  });

  describe('cleanUpPayload', () => {
    test('should remove goalSelectMenu property', () => {
      const input = { ...testPayload };
      const result = cleanUpPayload(input);
      
      expect(result).not.toHaveProperty('goalSelectMenu');
      // Original input should be unchanged
      expect(input).toHaveProperty('goalSelectMenu');
    });

    test('should return a new object', () => {
      const input = { ...testPayload };
      const result = cleanUpPayload(input);
      
      // Should be a different object reference
      expect(result).not.toBe(input);
      
      // Should contain all the expected properties
      expect(result).toEqual(expect.objectContaining({
        workoutType: input.workoutType,
        activity: input.activity,
        location: input.location,
        displayName: input.displayName,
        swimmingLocation: 'indoors'
      }));
    });

    test('should handle payload without goalSelectMenu', () => {
      const input = { ...testPayload };
      delete input.goalSelectMenu;
      
      const result = cleanUpPayload(input);
      
      // Should be a different object reference
      expect(result).not.toBe(input);
      
      // Should contain all the expected properties
      expect(result).toEqual(expect.objectContaining({
        workoutType: input.workoutType,
        activity: input.activity,
        location: input.location,
        displayName: input.displayName,
        swimmingLocation: 'indoors'
      }));
    });
  });
});

