import { Equal, Expect } from '../helpers/type-utils'

const frontendToBackendEnumMap = {
  singleModule: 'SINGLE_MODULE',
  multiModule: 'MULTI_MODULE',
  sharedModule: 'SHARED_MODULE',
} as const

/**
 * Định nghĩa kiểu BackendModuleEnum sao cho nó đại diện cho một trong các giá trị "SINGLE_MODULE", "MULTI_MODULE", hoặc "SHARED_MODULE" từ frontendToBackendEnumMap.
 */
type BackendModuleEnum = (typeof frontendToBackendEnumMap)[keyof typeof frontendToBackendEnumMap]

type tests = [Expect<Equal<BackendModuleEnum, 'SINGLE_MODULE' | 'MULTI_MODULE' | 'SHARED_MODULE'>>]
