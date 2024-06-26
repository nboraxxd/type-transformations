/**
 * Định nghĩa một kiểu generic Maybe sao cho nó chấp nhận các kiểu không phải là null hoặc undefined, và thêm null và undefined vào kiểu đó.
 * Đảm bảo rằng khi generic của Maybe là null hoặc undefined thì sẽ có lỗi biên dịch TypeScript.
 */
export type Maybe<T extends {}> = T | null | undefined

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<''>
]

/**
 * Giải thích:
 * Ở đây, kiểu T được giới hạn (extends {}) để chỉ chấp nhận các kiểu không phải là null hoặc undefined.
 * {} là một kiểu trong TypeScript đại diện cho tất cả các kiểu ngoại trừ null và undefined.
 * Do đó, T chỉ có thể là các kiểu giá trị không phải là null hoặc undefined.
 */
