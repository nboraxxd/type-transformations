import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic ReturnWhatIPassIn sao cho nó trả về chính xác kiểu dữ liệu mà bạn truyền vào.
 */
type ReturnWhatIPassIn<T> = T

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<'1'>, '1'>>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>
]
