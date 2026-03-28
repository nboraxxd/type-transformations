## Instructions

In order to really hammer home the technique of working with mapped types, this exercise will be similar to the last one.

We start with this `FruitMap` interface and a `TransformedFruit` type:

```tsx
interface FruitMap {
  apple: 'red'
  banana: 'yellow'
  orange: 'orange'
}

type TransformedFruit = unknown
```

### Challenge

Your challenge is to map over the object to create a union of strings that are the key and value separated by a colon:

```tsx
;'apple:red' | 'banana:yellow' | 'orange:orange'
```

If you get stuck, reference the previous exercise! You'll need to use the same trick again.

## Solutions

<details>
<summary>Click For Solution</summary>

Let's build the solution step by step.

We know that we need to start by using a mapped type to transform the object.

Since we are working with an object, we can use the `keyof` operator to get the keys and use them in the value:

```tsx
type TransformedFruit = {
  [K in keyof FruitMap]: K
}
```

Hovering over the type declaration, we can see that our mapped type has the fruit as keys and values as we've seen in previous exercises:

```tsx
// on hover
type TransformedFruit = {
  apple: 'apple'
  banana: 'banana'
  orange: 'orange'
}
```

At this point we'll want to create the intermediary template literal representations. Like before, we'll use the key to access the values off of `FruitMap` via indexed access:

```tsx
type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`
}
```

Now when we hover over `TransformedFruit`, we can see an object containing the template literals we want:

```tsx
// on hover
type TransformedFruit = {
  apple: `apple:red`
  banana: 'banana:yellow'
  orange: 'orange:orange'
}
```

Now that we've reached an intermediary representation, we have all the pieces we need to transform this into the union we want.

We can append another mapped type containing the keys to the end of `TransformedFruit`. This will transform the object into a union:

```tsx
type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`
}[keyof FruitMap]
```

Hovering over `TransformedFruit` now, we see that we have the union the challenge was asking for:

```tsx
// on hover
type TransformedFruit = `apple:red` | `banana:yellow` | `orange:orange`
```

This technique is important to learn - it's extremely flexible and gives us a really solid mental model for iterating over unions.

</details>
