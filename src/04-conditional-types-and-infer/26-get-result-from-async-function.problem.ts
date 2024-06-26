import { Equal, Expect } from '../helpers/type-utils'

const getServerSideProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json: { title: string } = await data.json()
  return {
    props: {
      json,
    },
  }
}

/**
 * Định nghĩa kiểu InferPropsFromServerSideFunction<T> sao cho:
 *  Nếu T là một func không có tham số và trả về một Promise có dạng { props: Whatever }, thì kiểu trả về là Whatever.
 *  Nếu T không phù hợp với định dạng này, kiểu trả về là never.
 */
// type InferPropsFromServerSideFunction<T> = T extends () => Promise<{ props: infer PropsValueT }> ? PropsValueT : never
type InferPropsFromServerSideFunction<T> = T extends () => Promise<Record<'props', infer PropsValueT>>
  ? PropsValueT
  : never

type tests = [Expect<Equal<InferPropsFromServerSideFunction<typeof getServerSideProps>, { json: { title: string } }>>]
