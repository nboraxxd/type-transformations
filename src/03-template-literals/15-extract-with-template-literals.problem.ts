import { Equal, Expect } from '../helpers/type-utils'

type Routes = '/users' | '/users/:id' | '/posts' | '/posts/:id'

/**
 * Định nghĩa kiểu DynamicRoutes sao cho nó chỉ bao gồm các dynamic URL (có dấu hai chấm :) từ kiểu Routes.
 */
type DynamicRoutes = Extract<Routes, `${string}:${string}`>

type tests = [Expect<Equal<DynamicRoutes, '/users/:id' | '/posts/:id'>>]
