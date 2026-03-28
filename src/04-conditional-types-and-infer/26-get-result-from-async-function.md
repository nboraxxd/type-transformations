## Instructions

This exercise is an amalgamation of several things you've learned so far.

We have a function called `getServerSideProps` that doesn't have an explicit return type set:

```tsx
const getServerSideProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json: { title: string } = await data.json()
  return {
    props: {
      json,
    },
  }
}
```

It returns a `Promise` that resolves to an object containing `props` with the `json` title string.

We can see this when we hover over `getServerSideProps`:

```tsx
// on hover
const getServerSideProps: () => Promise<{
  props: {
    json: {
      title: string
    }
  }
}>
```

### Challenge

Your challenge is to update `InferPropsFromServerSideFunction` so that it can extract whatever is put into the `props` object returned by `getServerSideProps`.

Hint: you will need to create a conditional that uses `infer` to check if you're extracting the right thing. Otherwise, you'll return `never`.

## Solutions

<details>
<summary>Click For Solution</summary>

Here’s what the solution looks like:

```tsx
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer P
}>
  ? P
  : never
```

Let’s talk through it.

First, we want `T` to extend a function that returns a Promise.

Inside the Promise is an object that will contain the `props`. Then we infer those props `P`. Then we return `P` or `never` if there aren’t any.

This is very cool - you can create any structure you like, and stick an infer inside it to only `infer` the element you care about.

This pattern is useful when working with functions where you want to extract something but you might not have access to its internals or you don’t want to declare a type annotation for.

</details>
