// Might come in handy!
// https://millsp.github.io/ts-toolbelt/modules/string_split.html
import { S } from 'ts-toolbelt'

import { Equal, Expect } from '../helpers/type-utils'

type Path = 'Users/John/Documents/notes.txt'

/**
 * Định nghĩa kiểu SplitPath sao cho nó đại diện cho một mảng các phần tử được tách ra từ chuỗi Path bởi dấu gạch chéo /.
 */
type SplitPath = S.Split<Path, '/'>

type tests = [Expect<Equal<SplitPath, ['Users', 'John', 'Documents', 'notes.txt']>>]
