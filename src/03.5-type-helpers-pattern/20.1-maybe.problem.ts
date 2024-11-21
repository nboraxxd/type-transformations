import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu `generic` Maybe sao cho nó có thể chấp nhận giá trị `generic`, `null`, hoặc `undefined`.
 */
type Maybe<T> = T | null | undefined

type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>
]
