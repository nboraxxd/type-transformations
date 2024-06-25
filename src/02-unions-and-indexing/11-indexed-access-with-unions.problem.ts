import { Equal, Expect } from '../helpers/type-utils'

export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const

/**
 * Định nghĩa kiểu IndividualProgram sao cho nó đại diện cho một trong các giá trị "1on1", "selfDirected", "planned1on1", hoặc "plannedSelfDirected" từ programModeEnumMap.
 */
// export type IndividualProgram = typeof programModeEnumMap['ONE_ON_ONE' | 'SELF_DIRECTED' | 'PLANNED_ONE_ON_ONE' | 'PLANNED_SELF_DIRECTED']
export type IndividualProgram = (typeof programModeEnumMap)[Extract<
  keyof typeof programModeEnumMap,
  'ONE_ON_ONE' | 'SELF_DIRECTED' | 'PLANNED_ONE_ON_ONE' | 'PLANNED_SELF_DIRECTED'
>]

type tests = [Expect<Equal<IndividualProgram, '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'>>]
