## Instructions

Partials allow you to construct types where some of the higher-level properties are optional. The idea of a DeepPartial takes this further by allowing all of the properties to become optional.

This is useful for when you want to be able to include just some parts of a type.

Consider `MyType` below, which has several properties at various levels:

```tsx
type MyType = {
  a: string
  b: number
  c: {
    d: string
    e: {
      f: string
      g: {
        h: string
        i: string
      }[]
    }
  }
}
```

### Challenge

Your challenge is to create a `DeepPartial` type helper that takes in `MyType` and returns a partial version of it. Read more about <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype" target="_blank" rel="noopener">the Partial Utility type</a> in the TypeScript Docs to learn more.

In other words, all of the members of the object will be undefined, including those inside of other objects _and_ other arrays.

Something that may be helpful is that when you're inside of a type, you can actually reuse that type. That means you'll be able to reference `DeepPartial` inside of _itself_.

Conditional and mapped types will be in your solution, as well as some other tools we’ve used throughout the workshop.

## Solutions

<details>
<summary>Click For Solution</summary>

Here’s what the solution looks like:

```tsx
type DeepPartial<T> = T extends Array<infer U> ? Array<DeepPartial<U>> : { [K in keyof T]?: DeepPartial<T[K]> }
```

As mentioned in the exercise introduction, we can recursively reference `DeepPartial` inside of itself.

To explain how the solution works, let's simplify it by removing the first aspect of the conditional check:

```tsx
type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> }
```

### Allowing Optional Properties and Recursive Calling

In the above, `DeepPartial<T[K]>` makes a recursive call with the value of the object being iterated over.

Note the inclusion of the `?` operator. Without it, we end up creating the object again.

Including the `?` allows us to essentially mark properties as optional.

Passing `MyType` into `DeepPartial` at this point shows us that types can be either what they originally were or `undefined`:

```tsx
// Hovering over Result

type Result = {
  a?: string | undefined
  b?: number | undefined
  c?:
    | DeepPartial<{
        d: string
        e: {
          f: string
          g: {
            h: string
            i: string
          }[]
        }
      }>
    | undefined
}
```

Note that we can now skip over letter keys:

```tsx
const result: Result = {
  c: {
    e: {
      g: [
        {
          h: '14123123',
        },
      ],
    },
  },
}
```

At this point it looks like it works, but TypeScript is yelling at us in our test, because our helper is slightly imprecise.

According to our test, we don't want to allow for members of the `g` array to be undefined.

### Handle the Array Case

We need to update the solution at this step to handle the case where `T` is an array. It should not be allowed to pass `undefined` to a member of the array.

To do this, we'll check to see if `T` extends `Array`, where the type `U` is inferred.

If this conditional passes, we'll say that `Array` should recursively call `DeepPartial<U>`.

```tsx
type DeepPartial<T> = T extends Array<infer U> ? Array<DeepPartial<U>> : { [K in keyof T]?: DeepPartial<T[K]> }
```

What this means is as it works through `MyType`, when it gets to `g` which is an array, infer the thing inside of the array then return a new array with `DeepPartial` applied to each member.

This won't allow `undefined` to be passed in. Inside, it has to be an object with `h` and `i` inside of it.

### Recap

While I'm sure there are some cases that this won't handle– for example, the `[K in keyof T]` would be a no-op for a string, number, or boolean– this solution works great for this challenge.

This solution has a bit of hardcore TypeScript syntax. It's dense, there's barely any space, and nothing can be deleted or removed from it without changing the outcome.

However, it does provide an illustration of the power of optional types, recursive types, and array inference.

</details>
