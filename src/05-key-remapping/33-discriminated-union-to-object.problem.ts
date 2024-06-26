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
  [R in Route as R['route']]: R['search']
}
// type RoutesObject = {
//   [R in Route['route']]: Extract<Route, { route: R }>['search']
// }

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
