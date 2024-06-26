import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic CreateDataShape sao cho nó nhận hai kiểu tham số TData và TError và tạo ra một object với hai thuộc tính:
 *  data có kiểu TData.
 *  error có kiểu TError.
 */
type CreateDataShape<D, E> = {
  data: D
  error: E
}

type tests = [
  Expect<
    Equal<
      CreateDataShape<string, TypeError>,
      {
        data: string
        error: TypeError
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<number, Error>,
      {
        data: number
        error: Error
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean
        error: SyntaxError
      }
    >
  >
]
