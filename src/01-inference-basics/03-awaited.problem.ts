import { Equal, Expect } from '../helpers/type-utils'

const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  })
}

/**
 * Hãy sửa đổi sao cho ReturnValue sẽ nhận đúng kiểu dữ liệu trả về đã được await của hàm getUser.
 */
type ReturnValue = Awaited<ReturnType<typeof getUser>>

type tests = [Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>]
