import { Equal, Expect } from '../helpers/type-utils'

const fruits = ['apple', 'banana', 'orange'] as const

/**
 * Định nghĩa các kiểu AppleOrBanana và Fruit sao cho:
 *  AppleOrBanana là kiểu đại diện cho một trong hai giá trị "apple" hoặc "banana" từ mảng fruits.
 *  Fruit là kiểu đại diện cho một trong ba giá trị "apple", "banana", hoặc "orange" từ mảng fruits.
 */
type AppleOrBanana = (typeof fruits)[0 | 1]
type Fruit = (typeof fruits)[number]

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>, Expect<Equal<Fruit, 'apple' | 'banana' | 'orange'>>]
