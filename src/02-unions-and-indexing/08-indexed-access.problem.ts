import { Equal, Expect } from '../helpers/type-utils'

export const fakeDataDefaults = {
  String: 'Default string',
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: 'id',
}

/**
 * Hãy sửa đổi sao cho các kiểu dữ liệu StringType, IntType, FloatType, BooleanType, và IDType sẽ nhận giá trị tương ứng từ đối tượng fakeDataDefaults.
 */

type FakeDataDefaults = typeof fakeDataDefaults

export type StringType = FakeDataDefaults['String']
export type IntType = FakeDataDefaults['Int']
export type FloatType = FakeDataDefaults['Int']
export type BooleanType = FakeDataDefaults['Boolean']
export type IDType = FakeDataDefaults['ID']

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
]
