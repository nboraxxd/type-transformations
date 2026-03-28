## Instructions

In this exercise we'll be using the mapped type again, but this time working with an object instead of a union type.

We’ll starting with an `Attributes` interface and an empty type helper `AttributeGetters`:

```tsx
interface Attributes {
  firstName: string
  lastName: string
  age: number
}

type AttributeGetters
```

## Challenge

Your challenge is to use a mapped type to transform the members of `Attributes` into a set of getter functions.

These functions should have the same key as the property they're getting, and they should return the type of the property as seen in the test:

```tsx
{
  firstName: () => string
  lastName: () => string
  age: () => number
}
```

Hint: This solution follows a similar pattern to the previous exercise!

## Solutions

<details>
<summary>Click For Solution</summary>

The solution to this challenge contains a similar structure to the `[R in Route]` that we used in the previous challenge:

```tsx
type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K]
}
```

The same general procedure is there as well:

The left side declares what our key is, and the right side declares what we'll do with that key.

### Steps to the Solution

For the sake of clarity, let's simplify the right side of the solution to just have `K`:

Functionally, the this is the same as the previous exercise, where `K` is used as both the key and the value:

```tsx
type AttributeGetters = {
  [K in keyof Attributes]: K
}
```

In order to access the `Attribute` key's value, we need to use an indexed access type:

```tsx
type AttributeGetters = {
  [K in keyof Attributes]: Attributes[K]
}
```

Now we have an object with the same keys and values as `Attributes`.

However, the challenge was to return getter functions.

In order to do this, we just need to return `Attributes[K]` from a function.

```tsx
type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K]
}
```

That's our solution!

</details>
