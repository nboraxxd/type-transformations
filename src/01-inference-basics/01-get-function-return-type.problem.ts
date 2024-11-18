import { Equal, Expect } from '../helpers/type-utils'

const myFunc = () => {
  return 'hello'
}

/**
 * Hãy sửa đổi sao cho MyFuncReturn sẽ nhận kiểu dữ liệu trả về của hàm myFunc.
 */
type MyFuncReturn = unknown;

type tests = [Expect<Equal<MyFuncReturn, string>>]
