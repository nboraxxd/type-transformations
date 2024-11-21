import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic YouSayGoodbyeAndISayHello sao cho nó hoạt động như sau:
 *  Nếu generic truyền vào là "hello", thì `YouSayGoodbyeAndISayHello` sẽ có type là "goodbye".
 *  Otherwise, `YouSayGoodbyeAndISayHello` sẽ có type là "hello".
 */
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello'

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>
]
