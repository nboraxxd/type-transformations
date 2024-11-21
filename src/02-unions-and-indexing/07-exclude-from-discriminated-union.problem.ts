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
 * Hãy sửa đổi sao cho NonKeyDownEvents sẽ nhận đúng kiểu dữ liệu của các sự kiện không phải là keydown trong union Event.
 */
type NonKeyDownEvents = Exclude<Event, { type: 'keydown' }>

type tests = [
  Expect<Equal<NonKeyDownEvents, { type: 'click'; event: MouseEvent } | { type: 'focus'; event: FocusEvent }>>
]
