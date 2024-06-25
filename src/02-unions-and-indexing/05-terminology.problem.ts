/**
 * Hãy đọc kỹ đoạn mã sau và xác định đâu là union, đâu là discriminated union, và đâu là enum:
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

type A =
  | {
      type: 'a'
      a: string
    }
  | {
      type: 'b'
      b: string
    }
  | {
      type: 'c'
      c: string
    } // discriminated union

type B = 'a' | 'b' | 'c' // union

enum C {
  A = 'a',
  B = 'b',
  C = 'c',
} // enum

export {}
