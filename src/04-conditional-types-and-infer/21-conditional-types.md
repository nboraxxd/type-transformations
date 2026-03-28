## Instructions

In this exercise we're going to add something on to the type helper pattern.

Since we know that we can return types from a type helper, it makes sense that we could include conditional logic that will return something different based on what gets passed in.

### Challenge

Your challenge is to add conditional logic to the `YouSayGoodbyeAndISayHello` type so that passing in "hello" returns "goodbye" and vice versa:

```tsx
type YouSayGoodbyeAndISayHello = unknown

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
]
```

For help solving this challenge, reference the <a href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html" target="_blank" rel="noopener">TypeScript docs</a>. For a bit of musical accompaniment, why not choose <a href="https://www.youtube.com/watch?v=rblYSKz_VnI" target="_blank" rel="noopener">The Beatles</a>!

## Solutions

<details>
<summary>Click For Solution</summary>

The first thing we need to do is add a type argument to `YouSayGoodbyeAndISayHello` to turn it from a static value into a function.

```tsx
type YouSayGoodbyeAndISayHello<T>
```

Now that we're receiving the `T`, we add a check to see if it `extends` hello. If it does, return goodbye. Otherwise, return hello:

```tsx
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello'
```

Think of the `extends` keyword as checking how what we pass in compares to what we provide.

If we pass a random string into `YouSayGoodbyeAndISayHello`, it won't be the same as "hello" so we'll end up with "hello" being returned:

```tsx
type Example = YouSayGoodbyeAndISayHello<'awdawdawdawd'>
```

Hovering over `Example` shows us:

```tsx
// On hover

type Example = 'hello'
```

Conditional types are immensely powerful, and are where TypeScript becomes less about "annotations you add to your JS" and more like its own meta programming language itself.

</details>
