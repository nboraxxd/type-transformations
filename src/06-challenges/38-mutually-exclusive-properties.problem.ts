import { Equal, Expect } from '../helpers/type-utils'

interface Attributes {
  id: number
  email: string
  username: string
}

/**
 * Tạo "type helper" MutuallyExclusive<T>, để biến T (1 object bất kỳ) thành một union type.
 * Các member trong union type là các object có dạng là các property { key: value } của object T.
 *
 * Ví dụ:
 * Nếu Example có type là { name: string, age: number }.
 * Thì type MutuallyExclusive<Example> sẽ có dạng { name: string } | { age: number }
 */
type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>
}[keyof T]

// type MutuallyExclusive<T> = {
//   [K in keyof T]: { [K2 in K]: T[K] }
// }[keyof T]

type ExclusiveAttributes = MutuallyExclusive<Attributes>

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: number
        }
      | {
          email: string
        }
      | {
          username: string
        }
    >
  >
]
