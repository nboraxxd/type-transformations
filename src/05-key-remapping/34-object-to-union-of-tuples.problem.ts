import { Equal, Expect } from '../helpers/type-utils'

interface Values {
  email: string
  firstName: string
  lastName: string
}

/**
 * Định nghĩa kiểu ValuesAsUnionOfTuples sao cho nó là một union type của các tuple
 * mỗi tuple bao gồm key của một thuộc tính trong Values và value tương ứng của thuộc tính đó.
 */
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]]
}[keyof Values]

// type UnionFromObj = ValuesAsUnionOfTuples[keyof ValuesAsUnionOfTuples]

type tests = [Expect<Equal<ValuesAsUnionOfTuples, ['email', string] | ['firstName', string] | ['lastName', string]>>]
