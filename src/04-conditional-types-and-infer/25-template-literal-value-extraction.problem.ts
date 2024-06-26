import { Equal, Expect } from '../helpers/type-utils'

type Names = ['Matt Pocock', 'Jimi Hendrix', 'Eric Clapton', 'John Mayer', 'BB King']

/**
 * Định nghĩa một kiểu generic GetSurname<T> sao cho nó hoạt động như sau:
 *  Nếu T là một chuỗi có định dạng "First Last", thì kiểu trả về là phần Last.
 *  Nếu T không có định dạng trên, thì kiểu trả về là never.
 */
type GetSurname<T> = T extends `${string} ${infer LastT}` ? LastT : never

type tests = [
  Expect<Equal<GetSurname<Names[0]>, 'Pocock'>>,
  Expect<Equal<GetSurname<Names[1]>, 'Hendrix'>>,
  Expect<Equal<GetSurname<Names[2]>, 'Clapton'>>,
  Expect<Equal<GetSurname<Names[3]>, 'Mayer'>>,
  Expect<Equal<GetSurname<Names[4]>, 'King'>>
]
