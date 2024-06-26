import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic YouSayGoodbyeAndISayHello sao cho nó hoạt động như sau:
 *  Nếu giá trị đầu vào là "hello", thì giá trị trả về sẽ là "goodbye".
 *  Nếu giá trị đầu vào là "goodbye", thì giá trị trả về sẽ là "hello".
 *  Nếu giá trị đầu vào không phải là "hello" hoặc "goodbye", thì giá trị trả về sẽ là never.
 */
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : T extends 'goodbye' ? 'hello' : never

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'alright pal'>, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>
]
