import { Equal, Expect } from '../helpers/type-utils'

export type Event =
  | {
      type: 'click'
      event: MouseEvent
    }
  | {
      type: 'focus'
      event: FocusEvent
    }
  | {
      type: 'keydown'
      event: KeyboardEvent
    }

/**
 * Hãy sửa đổi sao cho EventType sẽ nhận giá trị là union các chuỗi "click", "focus", "keydown" từ các thành phần của union Event.
 */
type EventType = Event['type']

type tests = [Expect<Equal<EventType, 'click' | 'focus' | 'keydown'>>]
