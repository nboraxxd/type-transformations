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
 * của các chuỗi định dạng value của "name:color", dựa trên các cặp name-color trong kiểu Fruit.
 *
 * Ví dụ:
 * Nếu name là "apple" và color là "red", chuỗi tương ứng trong TransformedFruit sẽ là "apple:red".
 */
type TransformedFruit = { [V in Fruit['name']]: `${V}:${Extract<Fruit, { name: V }>['color']}` }[Fruit['name']]

type tests = [Expect<Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>>]
