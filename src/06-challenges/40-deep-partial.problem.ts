import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa type helper DeepPartial<T> để tạo ra một phiên bản của T trong đó mọi thuộc tính đều trở thành tùy chọn (optional)
 */
type DeepPartial<T> = unknown

type MyType = {
  a: string
  b: number
  c: {
    d: string
    e: {
      f: string
      g: {
        h: string
        i: string
      }[]
    }
  }
}

type Result = DeepPartial<MyType>

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string
        b?: number
        c?: {
          d?: string
          e?: {
            f?: string
            g?: {
              h?: string
              i?: string
            }[]
          }
        }
      }
    >
  >
]
