import { Equal, Expect } from '../helpers/type-utils'

const makeQuery = (
  url: string,
  opts?: {
    method?: string
    headers?: {
      [key: string]: string
    }
    body?: string
  },
) => {}

/**
 * Hãy sửa đổi sao cho MakeQueryParameters sẽ nhận kiểu của các tham số truyền vào hàm makeQuery.
 */
type MakeQuery = typeof makeQuery

type MakeQueryParameters = Parameters<MakeQuery>

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string
          headers?: {
            [key: string]: string
          }
          body?: string
        },
      ]
    >
  >,
]
