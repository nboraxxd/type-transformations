import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic CreateDataShape sao cho nó nhận hai kiểu tham số TData và TError và tạo ra một object với hai thuộc tính:
 *  data có kiểu TData.
 *  error có kiểu TError, khi TError generic không được truyền thì giá trị mặc định của nó sẽ là undefined.
 */
type CreateDataShape<TData, TError = undefined> = {
  data: TData
  error: TError
}

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string
        error: undefined
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
