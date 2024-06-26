import { Equal, Expect } from '../helpers/type-utils'

type Route =
  | {
      route: '/'
      search: {
        page: string
        perPage: string
      }
    }
  | { route: '/about' }
  | { route: '/admin' }
  | { route: '/admin/users' }

/**
 * Tạo type RoutesObject để biến đổi union type Route thành một object
 * với key là value của thuộc tính route trong union type Route
 * value là value của thuộc tính search nếu tồn tại, hoặc never nếu không tồn tại.
 *
 * Ví dụ:
 * Với { route: '/' }, kết quả trong RoutesObject sẽ là { '/': { page: string, perPage: string } }.
 * Với { route: '/about' }, kết quả trong RoutesObject sẽ là { '/about': never }.
 */

type RoutesObject = {
  [R in Route as R['route']]: R extends { search: infer S } ? S : never
}

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': {
          page: string
          perPage: string
        }
        '/about': never
        '/admin': never
        '/admin/users': never
      }
    >
  >
]
