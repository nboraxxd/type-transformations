## Instructions

In this exercise, we're going to combine the template literal and `infer` techniques we’ve learned so far.

### Challenge

We have a tuple of `Names`:

```typescript
type Names = ['Matt Pocock', 'Jimi Hendrix', 'Eric Clapton', 'John Mayer', 'BB King']
```

Your challenge is to complete the `GetSurname<T>` type so that it extracts the last name (if present) from each of the full names.

## Solutions

<details>
<summary>Click For Solution</summary>

There are two solutions to extracting the last names from the template literals in the `Names` tuple:

```tsx
type Names = ['Matt Pocock', 'Jimi Hendrix', 'Eric Clapton', 'John Mayer', 'BB King']
```

### Solution 1: Using `S.Split`

We can use `S.Split` to split the template literal by spaces and then use an indexed access type to get the last element of the tuple:

```tsx
type GetSurname<T extends string> = S.Split<T, ' '>[1]
```

This solution requires knowledge of `<T extends string>`, though. So congrats if you got it, but I prefer this solution:

### Solution 2: Using infer

The better solution is to use `infer`s inside of a template literal:

```tsx
type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never
```

Here, we use the conditional check to check that `T` is a string with two strings with a space between, then infer the strings in those slots.

Note that since the challenge only asked for the last name, we don't really need to use `infer First`.

We could just use:

```tsx
`${string} ${infer Last}`
```

Pattern matching with template literals defines a clear capture group while providing more semantic meaning to others reading our code.

</details>
