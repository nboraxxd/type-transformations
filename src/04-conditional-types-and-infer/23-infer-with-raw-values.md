## Instructions

In this exercise we're going to take our first look at infer.

Before you go any further, please take some time to carefully [read over this section of the TypeScript docs](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types).

It's important that you start building an understanding of what's going on with infer before moving on to this challenge.

Here we have a type function called `GetDataValue`:

```tsx
type GetDataValue<T> = unknown
```

The goal is to be able to pass an object with a `data` attribute into `GetDataValue` and have it return whatever value is there, as seen in our tests:

```tsx
type tests = [
  Expect<Equal<GetDataValue<{ data: 'hello' }>, 'hello'>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello' } }>, { name: 'hello' }>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello'; age: 20 } }>, { name: 'hello'; age: 20 }>>,
]
```

If the `data` attribute isn't there, the function should return `never`.

Hint: You probably need to do some conditional check to see if the `T` is being passed in as `data`. If it is, extract the information out of it in order to return it.

## Solutions

<details>
<summary>Click For Solution</summary>

This challenge has two solutions.

### Solution 1

The first solution might look pretty similar to pieces that you've kind of understood before:

```tsx
type GetDataValue<T> = T extends { data: any } ? T['data'] : never
```

First we use `extends` to see if `T` has an object with a `data` attribute.

If it does, then we can just return it by using an index access type. Otherwise, we return `never`.

### Solution 2

While that solution is fine, in the exercise intro we mentioned that this challenge can be solved by using `infer`.

Here's what the `infer` solution looks like:

```tsx
type GetDataValue<T> = T extends { data: infer TData } ? TData : never
```

Let's break it down.

The `infer` in `T extends { data: infer TData }` says "Whatever is passed in to the `data` key, infer its type".

Then, the `infer` declares `TData` for the true branch. If we try and access TData in the 'false' branch, we won't be able to. In other words, the `TData` variable is only defined for one branch.

### `GetDataValue` in Action

To check our work, we can create a new `Example` type that passes `{data: 1}` to `GetDataValue`:

```tsx
type Example = GetDataValue<{ data: 1 }>
```

This would extract the `1`.

If we change `GetDataValue` to return `1` or `undefined`:

```tsx
type GetDataValue = T extends { data: infer TData } ? TData | undefined : never
```

Our `Example` type would show `1 | undefined` when hovered over.

### Which Solution to Choose?

So, when you're choosing these two possibilities, which one should you pick?

I tend to prefer the second solution because infer gives us an opportunity to name a new variable.

To make our code more clear, we could rename `TData` to `TInferredData`:

```tsx
type GetDataValue<T> = T extends { data: infer TInferredData } ? TInferredData : never
```

Compare this to the first solution, where we had `data` typed as `any` then extracted it with `T["data"]`:

```tsx
type GetDataValue<T> = T extends { data: any } ? T['data'] : never
```

I prefer using `infer` because the logic is expressed inside of the conditional check.

The next time you find yourself inside of a conditional check and you need to extract out something, I suggest you harness the power of `infer`!

</details>
