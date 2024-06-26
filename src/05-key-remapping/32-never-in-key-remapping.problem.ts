import { Equal, Expect } from '../helpers/type-utils'

interface Example {
  name: string
  age: number
  id: string
  organisationId: string
  groupId: string
}

/**
 * Định nghĩa kiểu OnlyIdKeys<T>, T có type là Object
 * Nó chỉ giữ lại các key của T mà chứa chuỗi "id" hoặc "Id" bên trong tên của key đó, với value tương ứng.
 */
type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${'id' | 'Id'}${string}` ? K : never]: T[K]
}

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string
        organisationId: string
        groupId: string
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
]
