## Instructions

In this exercise we've got a function `getUser`, that returns a promise containing an object with some properties: `id`, `name`, and `email`.

```tsx
const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  })
}
```

When hovering over `getUser` we can see that the object is wrapped in the `Promise` type:

```tsx
// Displayed while hovering
const getUser: () => Promise<{
  id: string
  name: string
  email: string
}>
```

That's because the function returns `Promise.resolve`, which wraps the thing you return in a promise.

To get the return type from `getUser`, we could try using the `ReturnType` utility type as seen in the previous exercises:

```tsx
type ReturnValue = ReturnType<typeof getUser>
```

However, in this case the return value is still wrapped in the `Promise` type:

```tsx
// Displayed while hovering over ReturnValue

const ReturnValue = Promise<{
  id: string
  name: string
  email: string
}>
```

### Challenge

Your job is to extract the awaited result of the promise using a utility type that we haven’t used yet.

`ReturnValue` needs to pass the `tests` by being equal to `{ id: string; name: string; email: string }`:

```tsx
type tests = [Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>]
```

If you need a refresher on the `Promise` type, check out <a href="https://www.totaltypescript.com/tutorials/beginners-typescript/typing-promises-and-async-requests" target="_blank" rel="noopener">Typing Promises and Async Requests</a> from my Beginner’s TypeScript Tutorial.

## Solutions

<details>
<summary>Click For Solution</summary>

The solution here is to use the `Awaited` type helper to get the return value from inside the `Promise`:

```tsx
type ReturnValue = Awaited<ReturnType<typeof getUser>>
```

Another interesting thing about `ReturnValue` is that we are nesting calls to type helpers.

In our `ReturnValue` example we have two layers of nesting - but you can go as deep as you want. It’s similar to calling functions that call other functions in JavaScript. Though, just like in JS, the syntax can become tricky to read.

### A More Readable Alternative

To make this nested syntax more readable, we can lift `ReturnType<typeof getUser>` into its own type.

From there, we can take `GetUserPromise` and pass that to `Awaited`:

```tsx
type GetUserPromise = ReturnType<typeof getUser>

type ReturnValue = Awaited<GetUserPromise>
```

This is much easier to read and helps illustrate the two steps:

First extract the return type, then await the return type.

It's also easier to debug, because you can hover over each element.

</details>
