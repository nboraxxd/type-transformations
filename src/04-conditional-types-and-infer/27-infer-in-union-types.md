## Instructions

Let's imagine you're building a type helper to extract out the value from several different 'parsers'.

Here are a few different examples of what a parser can be.

The first is an object with a key of `parse` that is a function that returns a number:

```tsx
const parser1 = {
  parse: () => 1,
}
```

This parser is a function returns a string:

```tsx
const parser2 = () => '123'
```

Finally, this parser is object with a key of `extract` that is a function that returns a boolean:

```tsx
const parser3 = {
  extract: () => true,
}
```

### Challenge

Your challenge is to write a type helper that can take in any of the above parsers, and extract the result.

This challenge is taken directly from the codebase of <a href="https://trpc.io/" target="_blank" rel="noopener">tRPC</a>.

## Solutions

<details>
<summary>Click For Solution</summary>

There are two solutions for this challenge:

### Solution 1 - Use Ternaries

The first solution is to write a long conditional where you infer the result from each possible function:

```tsx
type GetParserResult<T> = T extends {
  parse: () => infer TResult
}
  ? TResult
  : T extends () => infer TResult
  ? TResult
  : T extends {
      extract: () => infer TResult
    }
  ? TResult
  : never
```

This makes the tests pass, but it's a fairly ugly solution.

### Solution 2 - Use a Union Type

The preferred solution is to use a union type instead.

We can say that `T` extends either an object with `parse`, an object with `extract`, or a function. Each of these branches has its own `infer TResult`.

If `T` extends any of the types, infer its `TResult`, otherwise return `never`:

```tsx
type GetParserResult<T> = T extends
  | {
      parse: () => infer TResult
    }
  | {
      extract: () => infer TResult
    }
  | (() => infer TResult)
  ? TResult
  : never
```

Using a union type gives us the same expressiveness as the ternary solution, but is much more readable.

</details>
