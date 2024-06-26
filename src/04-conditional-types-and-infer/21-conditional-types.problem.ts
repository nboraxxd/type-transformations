import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic YouSayGoodbyeAndISayHello sao cho nó hoạt động như sau:
 *  Nếu giá trị đầu vào là "hello", thì giá trị trả về sẽ là "goodbye".
 *  Nếu giá trị đầu vào là "goodbye", thì giá trị trả về sẽ là "hello".
 */
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello'

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>
]
