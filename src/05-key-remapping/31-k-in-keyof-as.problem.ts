import { Equal, Expect } from '../helpers/type-utils'

interface Attributes {
  firstName: string
  lastName: string
  age: number
}

/**
 * Định nghĩa kiểu AttributeGetters sao cho nó là một object với các key được tạo từ các key trong Attributes nhưng prefix của mỗi key là get
 * Value của mỗi key là một function return về kiểu là value của các key từ Attributes.
 * Lưu ý: Chữ cái đầu của key sau khi ghép với prefix thì phải in hoa lên
 */
type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K]
}

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string
        getLastName: () => string
        getAge: () => number
      }
    >
  >
]
