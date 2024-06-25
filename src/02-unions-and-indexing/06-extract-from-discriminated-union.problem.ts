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
 * Hãy sửa đổi đoạn mã trên sao cho ClickEvent sẽ nhận đúng kiểu dữ liệu của sự kiện click trong union Event.
 */
type ClickEvent = Extract<Event, { type: 'click' }>

type tests = [Expect<Equal<ClickEvent, { type: 'click'; event: MouseEvent }>>]
