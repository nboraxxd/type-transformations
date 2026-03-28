## Instructions

We start with a `Values` interface:

```tsx
interface Values {
  email: string
  firstName: string
  lastName: string
}
```

The goal is to create a union of tuples containing the key/value pairs:

```tsx
['email', string] | ['firstName', string] | ['lastName', string],
```

We are already halfway there with this `ValuesAsUnionOfTuples` type:

```tsx
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]]
}
```

In the above code, the keys of `Values` are mapped over. From there, a tuple is created that includes the key along with its value that is retrieved with help from an indexed access type.

The problem is that this creates an object instead of the tuple that we want it to create:

```tsx
{
  email: ['email', string]
  firstName: ['firstName', string]
  lastName: ['lastName', string]
}
```

### Challenge

Your challenge is to update the `ValueAsUnionOfTuples` type so that it actually creates a union.

There's no new syntax in this challenge - just a new application of syntax we've already seen.

## Solutions

<details>
<summary>Click For Solution</summary>

In order to create a union of tuples, we need to extract the values of the object that is currently being created:

```tsx
{
  email: ['email', string]
  firstName: ['firstName', string]
  lastName: ['lastName', string]
}
```

The solution is to re-index the type we started with by appending `[keyof Values]` to the end of it.

Before:

```tsx
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]]
}
```

After:

```tsx
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]]
}[keyof Values]
```

With `[keyof Values]` appended, we are creating an intermediary object that contains the values we want, but then remapping over it using its key.

This results in the union of tuples we wanted:

```tsx
['email', string] | ['firstName', string] | ['lastName', string],
```

While this syntax looks odd at first, this pattern can be used in many different ways. It's hard to overstate how useful it is. We'll continue to work with it in the next couple of exercises.

</details>
