import { Equal, Expect } from '../helpers/type-utils'

/**
 * Định nghĩa một kiểu generic AddRoutePrefix sao cho nó thêm dấu gạch chéo (/) ở phía trước của một chuỗi đường dẫn (TRoute).
 * Đảm bảo rằng AddRoutePrefix chỉ hoạt động với kiểu chuỗi và tạo lỗi khi được áp dụng cho các kiểu khác.
 */
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`

type tests = [
  Expect<Equal<AddRoutePrefix<''>, '/'>>,
  Expect<Equal<AddRoutePrefix<'about'>, '/about'>>,
  Expect<Equal<AddRoutePrefix<'about/team'>, '/about/team'>>,
  Expect<Equal<AddRoutePrefix<'blog'>, '/blog'>>,
  // @ts-expect-error
  AddRoutePrefix<boolean>,
  // @ts-expect-error
  AddRoutePrefix<number>
]
