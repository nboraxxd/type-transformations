## Instructions

This exercise begins with this `Attributes` interface and an empty `MutuallyExclusive<T>`:

```tsx
interface Attributes {
  id: string
  email: string
  username: string
}

type MutuallyExclusive<T> = unknown
```

## Challenge

Your challenge is to update `MutuallyExclusive` to be a type helper that will turn the `Attributes` object into a discriminated union.

Check your work by hovering over `ExclusiveAttributes` as you go.

## Solutions

<details>
<summary>Click For Solution</summary>

The solution here is pretty dense and looks a little complicated:

```tsx
type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>
}[keyof T]
```

Let's work through it by going back to first principles, and checking our work by hovering over `ExclusiveAttributes`:

```tsx
type ExclusiveAttributes = MutuallyExclusive<Attributes>
```

When written this way, `MutuallyExclusive` will remap over the attributes of the object that is passed in and return them to us.

```tsx
type MutuallyExclusive<T> = {
  [K in keyof T]: T[K]
}
```

We can check this by hovering over `ExclusiveAttributes`:

```tsx
type ExclusiveAttributes = {
  id: string
  email: string
  username: string
}
```

In order to create a union, we want to create an intermediary representation of that union as an object. From there, we'll remap over that object to get back our proper union values.

### Create an Intermediary `Record` Type

The members of the union that we want need to be stuck into the `T[K]` slot that we wrote above.

For now, we'll replace that slot with a new `Record` type that will take in `K` and an empty object:

```tsx
type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, {}>
}
```

What this says now is for each of the properties of the object passed in, create a record that has the key and a new empty object:

```tsx
// Hovering over ExclusiveAttributes at the current step

type ExclusiveAttributes = {
  id: Record<'id', {}>
  email: Record<'email', {}>
  username: Record<'username', {}>
}
```

Since we want to represent the value of the thing inside of the attributes, we can swap the empty object with the `T[K]`. Recall that `T` is the `Attributes` being passed in, and `K` is the index of the key we are currently on:

```tsx
type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>
}
```

Since each thing inside of `Attributes` is typed as a string, that's what we'll end up with now:

```tsx
// Hovering over ExclusiveAttributes at the current step

type ExclusiveAttributes = {
  id: Record<'id', string>
  email: Record<'email', string>
  username: Record<'username', string>
}
```

### Map over the `Record`s to Create a Union

Now that we have `id`, `email`, and `username` available to us, we need to map over them to grab the members of the union.

We do this by appending `[keyof T]` to the end of `MutuallyExclusive`:

```tsx
type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>
}[keyof T]
```

</details>
