import { Equal, Expect } from '../helpers/type-utils'

type Fruit = 'apple' | 'banana' | 'orange'

/**
 * AppleOrBanana là một conditional type dựa trên Fruit.
 *  Nếu Fruit có thể gán cho infer T, thì T sẽ được gán lại và kiểm tra:
 *    Nếu T là "apple" hoặc "banana", thì AppleOrBanana sẽ là T.
 *    Nếu không, AppleOrBanana sẽ là never.
 */
type AppleOrBanana = Fruit extends infer T ? (T extends 'apple' | 'banana' ? T : never) : never

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>]
