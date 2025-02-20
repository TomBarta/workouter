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

export type heartRateZones = 1 | 2 | 3 | 4 | 5
export enum DistanceUnits {
  yards = 'yds',
  miles = 'mi',
  meters = 'm',
  kilometers = 'km'
}
export enum EnergyUnits {
  calories = 'calories',
  kilocalories = 'kilocalories'
}
export enum TimeUnits {
  seconds = 'sec',
  minutes = 'min',
  hours = 'hrs'
}
export enum IntervalStepPurpose {
  recovery = 'recovery',
  work = 'work'
}

interface RangeBasedAlert {
  lowerBound: number
  upperBound: number
}

export enum WorkoutGoalTypes {
  open = 'Open',
  distance = 'Distance',
  energy = 'Energy',
  time = 'Time'
}

export interface OpenWorkoutGoal {
  type: WorkoutGoalTypes.open
}

export interface DistanceWorkoutGoal {
  type: WorkoutGoalTypes.distance
  distance: number
  unit: DistanceUnits
}

export interface EnergyWorkoutGoal {
  type: WorkoutGoalTypes.energy
  amount: number
  unit: EnergyUnits
}

export interface TimeWorkoutGoal {
  type: WorkoutGoalTypes.time
  duration: number
  unit: TimeUnits
}

export enum workoutType {
  singleGoalWorkout = 'Single Goal',
  pacerWorkout = 'Pacer',
  swimBikeRunWorkout = 'Swim-Bike-Run / Multisport',
  customWorkout = 'Custom',
}

export enum WorkoutAlertTypes {
  heartRateZone = 'Heart Rate Zone',
  heartRateRange = 'Heart Rate Range',
  cadenceRange = 'Cadence Range',
  cadenceThreshold = 'Cadence Threshold',
  powerRange = 'Power Range',
  powerThreshold = 'Power Threshold',
  powerZone = 'Power Zone',
  speedRange = 'Speed Range',
  speedThreshold = 'Speed Threshold'
}

export type HeartRateZoneAlert = {
  type: WorkoutAlertTypes.heartRateZone
  zone: heartRateZones
}

export interface HeartRateRangeAlert extends RangeBasedAlert {
  type: WorkoutAlertTypes.heartRateRange
}

export interface CadenceRangeAlert extends RangeBasedAlert {
  type: WorkoutAlertTypes.cadenceRange
}

export interface CadenceThresholdAlert {
  type: WorkoutAlertTypes.cadenceThreshold
  cadence: number
}

export interface SpeedRangeAlert extends RangeBasedAlert {
  type: WorkoutAlertTypes.speedRange
}

export interface SpeedThresholdAlert {
  type: WorkoutAlertTypes.cadenceThreshold
  targetSpeed: number
  targetSpeedMetric: 'mph' | 'kph'
  metric: 'current' | 'average'
}

export interface IntervalStep {
  purpose: IntervalStepPurpose,
  alert: HeartRateRangeAlert | HeartRateZoneAlert | CadenceRangeAlert
  goal: OpenWorkoutGoal | TimeWorkoutGoal | EnergyWorkoutGoal | DistanceWorkoutGoal
}

export interface IntervalBlock {
  type: 'work' | 'recovery'
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
    alert: HeartRateRangeAlert | HeartRateZoneAlert | CadenceRangeAlert,
    goal: OpenWorkoutGoal | TimeWorkoutGoal | EnergyWorkoutGoal | DistanceWorkoutGoal,
  },
  blocks: IntervalBlock[],
  cooldown?: {
    alert: HeartRateRangeAlert | HeartRateZoneAlert | CadenceRangeAlert
    goal: OpenWorkoutGoal | TimeWorkoutGoal | EnergyWorkoutGoal | DistanceWorkoutGoal
  }
}

