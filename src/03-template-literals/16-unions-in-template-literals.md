## Instructions

Here we have a `Sandwich` type that's currently assigned to `unknown`

We also have a couple of union types, `BreadType` and `Filling`, that have several options as members:

```tsx
type BreadType = 'rye' | 'brown' | 'white'

type Filling = 'cheese' | 'ham' | 'salami'

type Sandwich = unknown
```

### Challenge

Your challenge is to determine every possible sandwich we could make.

Or to put it in TypeScript terms, we want `Sandwich` to be a union of every permutation of the unions `BreadType` and `Filling` such that our test passes:

```tsx
type tests = [
  Expect<
    Equal<
      Sandwich,
      | 'rye sandwich with cheese'
      | 'rye sandwich with ham'
      | 'rye sandwich with salami'
      | 'brown sandwich with cheese'
      | 'brown sandwich with ham'
      | 'brown sandwich with salami'
      | 'white sandwich with cheese'
      | 'white sandwich with ham'
      | 'white sandwich with salami'
    >
  >,
]
```

This exercise explores a really interesting property of unions inside of template literals.

As a hint, don't try too hard to create some kind of wild mapped type.

It may seem tricky, but the simplicity of the solution might surprise you!

## Solutions

<details>
<summary>Click For Solution</summary>

The challenge was to create a union where its members are strings containing all possible permutations of two other unions.

In order to do this, all we need to do is create a template literal and pass in all of the elements as their union types:

```tsx
type Sandwich = `${BreadType} sandwich with ${Filling}`
```

Now when we hover over `Sandwich`, we can see the huge union type:

```tsx
// on hover
type Sandwich =
  | 'rye sandwich with cheese'
  | 'rye sandwich with ham'
  | 'rye sandwich with salami'
  | 'brown sandwich with cheese'
  | 'brown sandwich with ham'
  | 'brown sandwich with salami'
  | 'white sandwich with cheese'
  | 'white sandwich with ham'
  | 'white sandwich with salami'
```

### Going Further

We can take this concept further.

Inside of the template literal, we can also inline another union:

```tsx
type Sandwich = `${BreadType} ${'sandwich' | 'baguette'} with ${Filling}`
```

Keep in mind that this additional union exponentially increases the number of permutations, and with too many added you will eventually hit a limit where the compiler will stop expanding the union.

The big takeaway though is that we're basically just passing a union type into a template literal and it automatically expands it and gives us back a union type.

</details>
