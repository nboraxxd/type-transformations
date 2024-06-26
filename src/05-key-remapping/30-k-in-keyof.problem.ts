import { Equal, Expect } from '../helpers/type-utils'

interface Attributes {
  firstName: string
  lastName: string
  age: number
}

/**
 * Định nghĩa type AttributeGetters sao cho nó là một object với các key giống như trong interface Attributes
 * value của mỗi key là một function return về kiểu là value của các key từ Attributes.
 */
type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K]
}

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string
        lastName: () => string
        age: () => number
      }
    >
  >
]
