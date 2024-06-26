import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic GetDataValue sao cho nó hoạt động như sau:
 *  Nếu generic là một object có key là data, thì kiểu trả về là value của data.
 *  Nếu generic không phải là một object có key data, thì kiểu trả về là never.
 */
// type GetDataValue<T> = T extends { data: any } ? T['data'] : never
type GetDataValue<T> = T extends { data: infer TValue } ? TValue : never

type tests = [
  Expect<Equal<GetDataValue<{ data: 'hello' }>, 'hello'>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello' } }>, { name: 'hello' }>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello'; age: 20 } }>, { name: 'hello'; age: 20 }>>,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>
]

/**
 * --Giải thích--
 * Cú pháp infer
 *  infer được sử dụng trong conditional type để trích xuất kiểu từ extends
 *  type infer định nghĩa ở extends chỉ được sử dụng trong nhánh `?`
 *  type infer không thể dùng ở nhánh `:`
 */
