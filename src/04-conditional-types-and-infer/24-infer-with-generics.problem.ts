import { Equal, Expect } from '../helpers/type-utils'

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event
  getContext: () => Context
  getName: () => Name
  getPoint: () => Point
}

type Example = MyComplexInterface<'click', 'window', 'my-event', { x: 12; y: 14 }>

/**
 * Định nghĩa một kiểu generic GetPoint<T> sao cho nó hoạt động như sau:
 *  Nếu T là một kiểu phù hợp với `MyComplexInterface`, thì kiểu trả về là type của generic `Point` trong `MyComplexInterface`.
 *  Nếu T không phù hợp với `MyComplexInterface`, thì kiểu trả về là `never`.
 */
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint> ? TPoint : never

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>]
