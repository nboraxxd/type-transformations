import { Equal, Expect } from '../helpers/type-utils'

const parser1 = {
  parse: () => 1,
}

const parser2 = () => '123'

const parser3 = {
  extract: () => true,
}

/**
 * Định nghĩa kiểu GetParserResult<T> sao cho:
 *  Nếu T là một object có method parse và parse return về Whatever, thì GetParserResult<T> sẽ là Whatever.
 *  Nếu T là một function không có parameter và return về Whatever, thì GetParserResult<T> sẽ là Whatever.
 *  Nếu T là một object có method extract và extract return về Whatever, thì GetParserResult<T> sẽ là Whatever.
 *  Nếu không phù hợp với các điều kiện trên, kiểu trả về là never.
 */
type GetParserResult<T> = T extends { parse: () => infer R } | { extract: () => infer R } | (() => infer R) ? R : never

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
]
