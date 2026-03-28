## Instructions

Let's look at a new pattern that I'll be calling the Type Helper pattern.

We'll start with a `ReturnWhatIPassIn` type helper where anything we pass in will be returned.

For example, if we create a type `Something` and call `ReturnWhatIPassIn`, we should get back `'Something'`:

```tsx
type ReturnWhatIPassIn = unknown

type Something = ReturnWhatIPassIn<'Something'>
```

More examples of the desired behavior can be seen in our tests:

```tsx
type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<'1'>, '1'>>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>,
]
```

### Challenge

In our code's current state, the result of calling `ReturnWhatIPassIn` ends up being typed as `any`.

Your challenge is to update `ReturnWhatIPassIn` to behave as expected.

Hint: Currently we get the `any` type returned because the things we pass in aren't generic. This keyword (generic!) should give you a clue about the syntax you want to find <a href="https://www.typescriptlang.org/docs/handbook/2/types-from-types.html" target="_blank" rel="noopener">in the TypeScript Docs</a>.

## Solutions

<details>
<summary>Click For Solution</summary>

The solution to our `ReturnWhatIPassIn` type helper has some syntax we haven't seen yet:

```tsx
type ReturnWhatIPassIn<T> = T
```

The angle brackets next to `ReturnWhatIPassIn` instantiate a type argument called `T`. After the equals sign, we 'return' it by using `T`.

Note that we could name `T` whatever we want, and the type helper would still work as expected:

```tsx
type ReturnWhatIPassIn<Whatever> = Whatever
```

For example, if we call our type helper like this:

```tsx
type Something = ReturnWhatIPassIn<'Something'>
```

The type `Something` will equal whatever we pass in to `ReturnWhatIPassIn`.

### Expanding our Type Helper

We could update `ReturnWhatIPassIn` to return either the same thing that was passed in or `undefined`:

```tsx
type ReturnWhatIPassIn<TWhatever> = TWhatever | undefined
```

Now if we update our `Something` example to pass the number 12 into `ReturnWhatIPassIn`:

```typescript
type Something = ReturnWhatIPassIn<12>
```

Hovering over it in VS Code shows us that our type is either 12 or `undefined`:

```typescript
// Hovering over Something
type Something = 12 | undefined
```

### Recapping the Type Helper Pattern

This type helper pattern allows us to create type functions which can return other types.

With this syntax, `ReturnWhatIPassIn` is now a function, `<T>` is the argument to the function, and `T` is what it returns:

```tsx
type ReturnWhatIPassIn<T> = T
```

If we remove the `<T>`, then `ReturnWhatIPassIn` becomes a static value:

```tsx
type ReturnWhatIPassIn = T
```

We can also add as many arguments as we want, and use other features like default values and constraints.

### Introducing Generics

This syntax and pattern is our first look at generics on the type level. The type we've created here is a 'generic type'. That term gets thrown around a lot. There's a whole module on generics coming up later. So, for clarity, I'm going to refer to this 'generic within a type' pattern as a 'type helper'.

Type helpers are a critical part of the way TypeScript works.

For example, if we create a `Record` type:

```tsx
type Yeah = Record<any, any>
```

We can use VS Code to navigate to the source of `Record` and see that it follows this pattern:

```tsx
// `extends` removed for clarity
type Record<K, T> = {
  [P in K]: T
}
```

We'll be going much deeper into generics throughout Total TypeScript.

For now, the takeaway is that type helpers allow you to pass in arguments and return things from that function.

</details>
