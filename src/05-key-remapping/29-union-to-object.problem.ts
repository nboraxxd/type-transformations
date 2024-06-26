import { Equal, Expect } from '../helpers/type-utils'

type Route = '/' | '/about' | '/admin' | '/admin/users'

/**
 * Định nghĩa type cho object `RoutesObject` sao cho nó ánh xạ mỗi member trong `Route` union.
 * Với key và value trong `RoutesObject` đều là cùng là 1 member của `Route`.
 * Nếu key là '/about' thì value cũng là '/about',...
 */
type RoutesObject = {
  [R in Route]: R
}

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': '/'
        '/about': '/about'
        '/admin': '/admin'
        '/admin/users': '/admin/users'
      }
    >
  >
]

/**
 * --Giải thích--
 * [R in Route] là cú pháp mapped type trong TypeScript. Nó lặp lại qua từng thành phần của union type Route, gán mỗi thành phần đó vào biến R.
 * Cú pháp in trong TypeScript cho phép bạn tạo ra các kiểu dữ liệu phức tạp từ các union type như Route, giúp mapping các giá trị từ union type sang object type một cách dễ dàng và linh hoạt.
 */
