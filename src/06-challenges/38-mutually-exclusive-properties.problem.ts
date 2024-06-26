import { Equal, Expect } from '../helpers/type-utils'

interface Attributes {
  id: number
  email: string
  username: string
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */
type MutuallyExclusive<T> = {
  [K in keyof T]: Pick<T, K>
}[keyof T]

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
