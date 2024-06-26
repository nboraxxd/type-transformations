import { S } from 'ts-toolbelt'
import { Equal, Expect } from '../helpers/type-utils'

type UserPath = '/users/:id'

type UserOrganisationPath = '/users/:id/organisations/:organisationId'

/**
 * Hoàn thành kiểu ExtractPathParams để trích xuất các tham số từ đường dẫn (path)
 * Trả về một object với dynamic path làm key và value có kiểu string.
 *
 * Ví dụ:
 * Với UserPath là "/users/:id", kiểu ExtractPathParams<UserPath> sẽ là { id: string }.
 * Với UserOrganisationPath là "/users/:id/organisations/:organisationId", kiểu ExtractPathParams<UserOrganisationPath> sẽ là { id: string; organisationId: string }.
 */
type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, '/'>[number] as K extends `:${infer P}` ? P : never]: string
}

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<Equal<ExtractPathParams<UserOrganisationPath>, { id: string; organisationId: string }>>
]

/**
 * --Giải thích--
 *
 * Ví dụ TPath ở đây là '/users/:id/organisations/:organisationId'
 *
 * Dùng S.Split<TPath, '/'> sẽ tạo ra tuple là [users, :id, organisations, :organisationId]
 * [users, :id, organisations, :organisationId][number] sẽ tạo ra union users | :id | organisations | :organisationId
 * K khi này sẽ là các member của union type trên
 *
 * K extends `:${infer P}` ? P : never
 * K sẽ dùng template literals và infer để tạo type cho key của type ExtractPathParams.
 */
