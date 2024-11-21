import { Equal, Expect } from '../helpers/type-utils'

type Event = `log_in` | 'log_out' | 'sign_up'

/**
 * Định nghĩa kiểu ObjectOfKeys sao cho nó là một object với
 *  key được định nghĩa bằng cách chuyển đổi các giá trị của Event thành chữ in hoa (uppercase)
 *  value là string
 */
type ObjectOfKeys = Record<Uppercase<Event>, string>

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string
        LOG_OUT: string
        SIGN_UP: string
      }
    >
  >
]
