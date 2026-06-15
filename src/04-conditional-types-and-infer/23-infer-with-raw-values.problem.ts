import { Equal, Expect } from '../helpers/type-utils'

type GetDataValue<T> = T extends { data: infer U } ? U : never

type tests = [
  Expect<Equal<GetDataValue<{ data: 'hello' }>, 'hello'>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello' } }>, { name: 'hello' }>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello'; age: 20 } }>, { name: 'hello'; age: 20 }>>,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>,
]

/**
 * --Giải thích--
 * Cú pháp infer
 *  infer được sử dụng trong conditional type để trích xuất kiểu từ extends
 *  type infer định nghĩa ở extends chỉ được sử dụng trong nhánh `?`
 *  type infer không thể dùng ở nhánh `:`
 */
