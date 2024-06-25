import { Equal, Expect } from '../helpers/type-utils'

const testingFrameworks = {
  vitest: {
    label: 'Vitest',
  },
  jest: {
    label: 'Jest',
  },
  mocha: {
    label: 'Mocha',
  },
}

/**
 * Hãy sửa đổi sao cho TestingFramework sẽ nhận một kiểu tương ứng với các khóa của đối tượng testingFrameworks.
 * Tức là TestingFramework phải bằng "vitest" | "jest" | "mocha".
 */
type TestingFramework = keyof typeof testingFrameworks

type tests = [Expect<Equal<TestingFramework, 'vitest' | 'jest' | 'mocha'>>]
