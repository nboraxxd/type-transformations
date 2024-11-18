import { Equal, Expect } from '../helpers/type-utils'

type Fruit =
  | {
      name: 'apple'
      color: 'red'
    }
  | {
      name: 'banana'
      color: 'yellow'
    }
  | {
      name: 'orange'
      color: 'orange'
    }

/**
 * Định nghĩa kiểu TransformedFruit sao cho nó trở thành union type
 * của các chuỗi định dạng "name:color", dựa trên các cặp name-color trong kiểu Fruit.
 *
 * Ví dụ:
 * Nếu name là "apple" và color là "red", chuỗi tương ứng trong TransformedFruit sẽ là "apple:red".
 */
type TransformedFruit = unknown;

type tests = [Expect<Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>>]
