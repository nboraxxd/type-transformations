import { Equal, Expect } from '../helpers/type-utils'

type TemplateLiteralKey = `${'user' | 'post' | 'comment'}${'Id' | 'Name'}`

/**
 * Định nghĩa ObjectOfKeys có kiểu là Object với
 *  key là một kiểu literal kết hợp giữa các chuỗi "user", "post", "comment" với các chuỗi "Id", "Name".
 *  value là string
 */
type ObjectOfKeys = Record<TemplateLiteralKey, string>

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string
        userName: string
        postId: string
        postName: string
        commentId: string
        commentName: string
      }
    >
  >
]
