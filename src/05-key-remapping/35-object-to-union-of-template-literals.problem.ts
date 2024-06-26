import { Equal, Expect } from '../helpers/type-utils'

interface FruitMap {
  apple: 'red'
  banana: 'yellow'
  orange: 'orange'
}

/**
 * Hoàn thành kiểu TransformedFruit sao cho nó trở thành union type của các chuỗi định dạng "fruit:color"
 * dựa trên các cặp key-value trong interface FruitMap.
 */
type TransformedFruit = {
  [F in keyof FruitMap]: `${F}:${FruitMap[F]}`
}[keyof FruitMap]

type tests = [Expect<Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>>]
