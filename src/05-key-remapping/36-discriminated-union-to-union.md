## Instructions

Consider this discriminated union called `Fruit`:

```tsx
type Fruit =
  | {
      name: 'apple'
      color: 'red'
    }
  | {
      name: 'banana'
      color: 'yellow'
    }
  | {
      name: 'orange'
      color: 'orange'
    }
```

### Challenge

Your challenge is to turn this discriminated union into a regular union.

This isn’t as challenging as it may seem!

The solution should follow this general outline:

First, use the key remapping technique to iterate over `Fruit`, transforming it into an intermediary object. Then turn that object into a union with help from `keyof`.

## Solutions

<details>
<summary>Click For Solution</summary>

Let's work through the solution step by step, following the outline from the problem.

First, we need to transform a discriminated union into a union of template literals.

We can do this by using a mapped type to get each member of the union:

```tsx
type TransformedFruit = {
  [F in Fruit as F['name']]: F
}
```

Remember we can't actually use `F` as the key, since it must be a symbol, number, or string!

To work around this, we need to use the `as` clause to set the key to the fruit's `name` property value:

```tsx
type TransformedFruit = {
  [F in Fruit as F['name']]: F
}
```

With this in place, `TransformedFruit` now results in this object:

```tsx
// on hover
type TransformedFruit = {
  apple: {
    name: 'apple'
    color: 'red'
  }
  banana: {
    name: 'banana'
    color: 'yellow'
  }
  orange: {
    name: 'orange'
    color: 'orange'
  }
}
```

All the pieces are in place to allow us to create the template literals.

To assemble the template literal, we'll use indexed access to get the properties we need off of `F`:

```tsx
type TransformedFruit = {
  [F in Fruit as F['name']]: `${F['name']}:${F['color']}`
}
```

Now when we hover over `TransformedFruit`, we can see our results:

```tsx
// on hover
type TransformedFruit = {
  apple: 'apple:red'
  banana: 'banana:yellow'
  orange: 'orange:orange'
}
```

The only thing left to do now is to take the `name` discriminator and remap the object with it by appending it at the end:

```tsx
type TransformedFruit = {
  [F in Fruit as F['name']]: `${F['name']}:${F['color']}`
}[Fruit['name']]
```

We now are extracting each property of the object into a union:

```tsx
// on hover
type TransformedFruit = 'apple:red' | 'banana:yellow' | 'orange:orange'
```

This pattern of using iterators to create an object, remapping it to a different object, and then iterating over its values is extremely powerful!

</details>
