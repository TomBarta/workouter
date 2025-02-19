export enum HKWorkoutActivityType {
  swimming = 'Swimming',
  cycling = 'Cycling',
  running = 'Running',
  swimBikeRun = 'Swim Bike Run',
  transition = 'Multisport Transition',
  preparationAndRecovery = 'Preparation and Recovery',
  cooldown = 'Cooldown',
  coreTraining = 'Core Training',
  functionalStrengthTraining = 'Functional Strength Training',
  traditionalStrengthTrainin = 'Traditional Strength Training'
}

export enum WorkoutGoalTypes {
  open = 'Open',
  distance = 'Distance',
  energy = 'Energy',
  time = 'Time'
}

export enum WorkoutGoalUnits {
  minutes = 'Minutes'
}

export interface WorkoutGoal {
  type: WorkoutGoalTypes,
  targetDuration: number,
  unit: WorkoutGoalUnits
}

export enum workoutType {
  singleGoalWorkout = 'Single Goal',
  pacerWorkout = 'Pacer',
  swimBikeRunWorkout = 'Swim-Bike-Run / Multisport',
  customWorkout = 'Custom',
}

export enum WorkoutAlert {
  heartRateZone = 'Heartrate Zone'
}

export interface IntervalStep {
  purpose: 'work'
  alert: WorkoutAlert
  goal: WorkoutGoal
}

export interface Interval {
  type: 'work' | 'workRecovery'
  iterations: number
  steps: IntervalStep[]
}

export function activities() {
  return Object.entries(HKWorkoutActivityType)
}

export function workoutTypes() {
  return Object.entries(workoutType)
}

export function workoutGoals() {
  return Object.entries(WorkoutGoalTypes)
}

export interface WorkoutPlan {
  workoutType: workoutType
  activityType: HKWorkoutActivityType
  location: 'indoor' | 'outdoor'
  displayName: string
  warmup?: {
    alert: {
      type: WorkoutAlert
      zone: 1 | 2 | 3 | 4 | 5
    },
    goal: {
      type: 'time'
    }
  },
  blocks: Interval[],
  cooldown?: {
    alert: WorkoutAlert
    goal: WorkoutGoal
  }
}

