## Instructions

In this exercise we're going to examine a little wrinkle in conditional types.

Consider the example below:

```tsx
type Fruit = 'apple' | 'banana' | 'orange'

type AppleOrBanana = Fruit extends 'apple' | 'banana' ? Fruit : never

// Fails
type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>]
```

You would expect `AppleOrBanana` to return a result of `"apple" | "banana"`, but it doesn't.

### Challenge

Read through <a href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types" target="_blank" rel="noopener">the Distributive Conditional Types section of the TS docs</a>, then update the example code so tests run correctly.

Hint: there are two possible solutions to this problem.

## Solutions

<details>
<summary>Click For Solution</summary>

We're going to have to adjust our current mental model of conditional types to understand why we have this issue with distributive conditional types.

For reference, here is the failing code from the problem:

```tsx
type Fruit = 'apple' | 'banana' | 'orange'

type AppleOrBanana = Fruit extends 'apple' | 'banana' ? Fruit : never
```

As mentioned, there are two ways to solve this challenge.

### Using a Generic

The distributed conditional types problem can be solved by using a generic.

Consider the solution code below:

```tsx
type GetAppleOrBanana<T> = T extends 'apple' | 'banana' ? T : never

type AppleOrBanana = GetAppleOrBanana<Fruit>
```

We create a new `GetAppleOrBanana` that accepts `T`. If `T` extends apple or banana, return `T`. Otherwise, return `never`.

Then we update `AppleOrBanana` to be `GetAppleOrBanana`, passing in `Fruit`.

This technique will work even when changing the `Fruit` type to include other options.

It works because when you pull a union into a generic like `T`, the members of the union distribute across it.

In other words, `T` will become _each individual member_ of the union, and the conditional type will iterate over each one.

#### Check Your Understanding

Read the following code, and think through what is happening with `T`:

```tsx
type Fruit = 'apple' | 'banana' | 'orange'
type GetAppleOrBanana<T> = T extends 'apple' | 'banana' ? T : never
```

This line of code checks if `T` is either `"apple"` or `"banana"`, and will return it if it is.

Think of it as iterating through the members of the union type to find what matches.

Now compare that solution to the original problem:

```tsx
type Fruit = 'apple' | 'banana' | 'orange'

type AppleOrBanana = Fruit extends 'apple' | 'banana' ? Fruit : never
```

In the problem code, we're considering the _entire_ `Fruit` union itself.

Because `"apple" | "banana" | "orange"` is not the same as `"apple" | "banana"`, the code will return `never`.

This issue can really catch you off-guard if you aren't aware of it!

### Solving with `infer`

It's also possible to solve this problem without a generic context:

```tsx
type AppleOrBanana = Fruit extends infer T ? (T extends 'apple' | 'banana' ? T : never) : never
```

Here we create a conditional type with `Fruit extends infer T`.

This infers what's inside of `Fruit`, and treats it as an iterable because it is now within a generic context!

With `T` acting as the iterable, the individual members of `Fruit` are checked similarly to the solution above.

While this behaviour is useful, you'll usually be able to wrap things in a type helper and have it just work.

</details>
