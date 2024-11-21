import { Equal, Expect } from '../helpers/type-utils'

type Route =
  | {
      route: '/'
      search: {
        page: string
        perPage: string
      }
    }
  | { route: '/about'; search: {} }
  | { route: '/admin'; search: {} }
  | { route: '/admin/users'; search: {} }

/**
 * Định nghĩa kiểu RoutesObject sao cho nó là một object với các key là các value của key route trong Route
 * Value của mỗi key là value của key search tương ứng từ Route.
 */
type RoutesObject = {
  [K in Route as K['route']]: K['search']
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
        '/about': {}
        '/admin': {}
        '/admin/users': {}
      }
    >
  >
]
