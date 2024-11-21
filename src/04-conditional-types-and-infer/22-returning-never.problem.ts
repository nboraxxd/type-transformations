import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic YouSayGoodbyeAndISayHello sao cho nó hoạt động như sau:
 *  Nếu generic truyền vào là "hello", thì `YouSayGoodbyeAndISayHello` sẽ có type là "goodbye".
 *  Nếu generic truyền vào là "goodbye", thì `YouSayGoodbyeAndISayHello` sẽ có type là "hello".
 *  Otherwise, `YouSayGoodbyeAndISayHello` sẽ có type là never.
 */
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello'

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'alright pal'>, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>
]
