import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic GetParametersAndReturnType sao cho nó nhận một kiểu `hàm T` và tạo ra một object với hai thuộc tính:
 *  params có kiểu là các tham số của hàm T (sử dụng Parameters<T>).
 *  returnValue có kiểu là giá trị trả về của hàm T (sử dụng ReturnType<T>).
 */
type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>
  returnValue: ReturnType<T>
}

type tests = [
  Expect<Equal<GetParametersAndReturnType<() => string>, { params: []; returnValue: string }>>,
  Expect<Equal<GetParametersAndReturnType<(s: string) => void>, { params: [string]; returnValue: void }>>,
  Expect<
    Equal<
      GetParametersAndReturnType<(n: number, b: boolean) => number>,
      { params: [number, boolean]; returnValue: number }
    >
  >
]
