## Instructions

Consider this object, which contains several testing frameworks as keys:

```tsx
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

type TestingFramework = unknown
```

### Challenge

The `vitest`, `jest`, and `mocha` keys need to be extracted into a union type.

You could satisfy the test by manually creating a union like so:

```tsx
type TestingFramework = 'vitest' | 'jest' | 'mocha'
```

But the ideal solution is to create the union by directly extracting keys from the object using `typeof` and some new syntax I haven’t shown you yet.

Hint: Look through <a href="https://www.typescriptlang.org/docs/handbook/2/types-from-types.html" target="_blank" rel="noopener">the TypeScript Handbook</a> to find an operator that seems helpful.

## Solutions

<details>
<summary>Click For Solution</summary>

Recall that if we only use the `typeof` operator, we would get the entire object back as the type, which is not what we want.

In order to create a union type out of only the keys of `testingFramework` object, we need to also use the `keyof` operator to iterate over each of the top-level keys:

```tsx
type TestingFramework = keyof typeof testingFrameworks
```

This will give us back `"vitest" | "jest" | "mocha"` as our test expects.

Note that the `keyof` operator has its own dedicated keyword instead of being called something like `KeyOf<...>`. This is because it's pretty low-level, just like `typeof`.

### Order Matters

If we tried to use `keyof` and `typeof` in reverse, it wouldn’t work:

```tsx
// This won't work!
type TestingFramework = typeof keyof testingFrameworks;
```

The reason this won’t work is because `keyof` only works on actual types, instead of working on runtime code like `typeof` does.

### Extracting Types

Similar to what we’ve seen before, we can make the `TestingFramework` type more readable by extracting `typeof testingFrameworks` out into its own type called `TestingFrameworks`:

```tsx
type TestingFrameworks = typeof testingFrameworks

type TestingFramework = keyof TestingFrameworks
```

### Using `keyof` on its Own

As seen below, it’s possible to use `keyof` without `typeof`:

```tsx
type TestingFrameworks = {
  a: string
  b: string
  c: string
}

type TestingFramework = keyof TestingFrameworks
```

In this case, `TestingFramework` would be `"a" | "b" | "c`".

So, as long as you are passing a type to `keyof`, you’re good.

However, the combination of `keyof` and `typeof` is really useful since since you can grab the type off of the runtime construct instead of the extra step of creating a type.

We’ll be using `keyof` a lot going forward!

</details>
