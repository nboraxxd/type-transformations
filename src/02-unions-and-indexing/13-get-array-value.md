## Instructions

We start with an array of strings called `fruits`:

```tsx
const fruits = ['apple', 'banana', 'orange']
```

Seeing this suggests that we're going to want the values of the array, so think about that.

### Challenge

Your challenge is to get a union of `AppleOrBanana`, as well as creating a union out of all the fruits in the array:

```tsx
type AppleOrBanana = unknown
type Fruit = unknown

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>, Expect<Equal<Fruit, 'apple' | 'banana' | 'orange'>>]
```

## Solutions

<details>
<summary>Click For Solution</summary>

### Apple or Banana

The first thing to do is use `as const` on the `fruits` array so that each element is a literal type:

```tsx
const fruits = ['apple', 'banana', 'orange'] as const
```

Then use `typeof fruits` to access into the array using an indexed access type with `0 | 1`:

```tsx
type AppleOrBanana = (typeof fruits)[0 | 1]
```

Remember the numbers correspond to the fruits array.

Changing `1` to `2` will get `orange` instead of `apple`. However, changing `1` to `3` results in an error since we don't have an element at index `3`.

### All of the Fruits

We can follow the same pattern as above to get all of the fruits, but this breaks down when we add more elements to the array.

First we need to pass `number` to the indexed access type:

```tsx
type Fruit = (typeof fruits)[number]
```

Here `number` acts as any possible number, so we get the union of all of the elements in the array.

This syntax is super neat, and very useful for creating a union out of every element of an array.

</details>
