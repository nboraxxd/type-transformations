/**
 * Định nghĩa kiểu generic NonEmptyArray sao cho nó đại diện cho một mảng KHÔNG EMPTY của các giá trị kiểu T.
 * Ví dụ: Nếu generic của NonEmptyArray là number thì NonEmptyArray phải là array các number và KHÔNG ĐƯỢC empty
 */
type NonEmptyArray<T> = [T, ...T[]]

export const makeEnum = (values: NonEmptyArray<string>) => {}

makeEnum(['a'])
makeEnum(['a', 'b', 'c'])

// @ts-expect-error
makeEnum([])

/**
 * -- Giải thích --
 * [T, ...Array<T>] là một tuple (bộ giá trị cố định) trong TypeScript:
 *  T đại diện cho một phần tử đầu tiên trong mảng. Nếu cần 2 phần tử đầu tiên thì dùng [T, T, ...Array<T>]
 *  ...Array<T> (hoặc ...T[]) đại diện cho các phần tử còn lại, có thể có hoặc không có trong mảng.
 *  Do đó, NonEmptyArray<T> luôn có ít nhất một phần tử kiểu T.
 */
