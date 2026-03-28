## Instructions

Let’s continue with the `Attributes` interface and the `AttributeGetters` helper from the previous exercise:

```tsx
interface Attributes {
  firstName: string
  lastName: string
  age: number
}

type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K]
}
```

### Challenge

We’ve created the getter functions, but they could be named better.

Your challenge is to figure out how to keep the structure of the current solution, but remap the key to a new one that it is prefixed with `get` as seen in the test:

```tsx
{
  getFirstName: () => string
  getLastName: () => string
  getAge: () => number
}
```

Reference <a href="https://www.typescriptlang.org/docs/handbook/2/mapped-types.html" target="_blank" rel="noopener">the Mapped Type docs</a> if you get stuck. You'll also need a string literal type, and use of the `Capitalize` type helper.

## Solutions

<details>
<summary>Click For Solution</summary>

Here's the solution to this challenge:

```tsx
type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K]
}
```

Let's break it down.

### The as keyword

This is the first appearance of the `as` keyword in this workshop.

You might have seen it used like `const num = 1 as number`, where it is attached to a runtime variable. Annoyingly, TypeScript treats the `as` keyword differently in different contexts.

Here, we are using `as` as a key mapper. This gives us access to the original key from `Attributes`, while also allowing us to use it in a template literal.

Here we use a template literal to add the `get` prefix and the `Capitalize` string utility type to remap the key:

```tsx
;`get${Capitalize<K>}`
```

If we didn't capitalize the first letter of `K` we would end up with `getname` instead of `getName`.

### Experiments

There are a couple of experiments to demonstrate more about how this technique works.

#### Remap Multiple Properties to One Key

The keys can be changed to anything that we'd like. For example, we could set every key to `"wow"`:

```tsx
type AttributeGetters = {
  [K in keyof Attributes as 'wow']: () => Attributes[K]
}
```

Remapping multiple properties to the same key has an interesting effect.

Hovering over `AttributeGetters`, we can see that we are now getting a function that can return multiple types:

```tsx
// on hover
type AttributeGetters = {
  wow: () => string | number
}
```

#### Manually Passing a Union

Similarly to what we saw before, we can manually pass in a union instead of using `keyof` and `as`:

```tsx
type AttributeGetters = {
  [K in 'firstName' | 'lastName' | 'age' as `get${Capitalize<K>}`]: () => Attributes[K]
}
```

This does give us a solution that would have our tests pass.

However, using `keyof` is great because it gives us the ability to remap the keys of any object to whatever we would like.

</details>
