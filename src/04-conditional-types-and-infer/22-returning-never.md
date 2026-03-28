## Instructions

The starting point is our solution from the last exercise:

```tsx
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello'
```

### Challenge

There's one more thing to add to this code. Recall that if we pass something in that is not "hello" that we will be returned "hello."

Your challenge is to update the conditional type to handle cases where `T` extends neither "hello" or "goodbye".

Think of it as saying we _never_ want something that isn't hello or goodbye to be passed in.

Hint: check out the <a href="https://www.typescriptlang.org/docs/handbook/2/functions.html#never" target="_blank" rel="noopener">TypeScript docs on ,`never`</a> and be ready to nest some ternaries.

## Solutions

<details>
<summary>Click For Solution</summary>

There's a lot going on to this solution, so let's construct it from scratch.

Here's our starting point:

```tsx
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello'
```

The first thing we want to do is check if `T` extends "hello" or "goodbye". For now we'll say if does that we'll return "wow", and if it doesn't we'll return `never`:

```tsx
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' | 'goodbye' ? 'wow' : never
```

We can test this with an `Example` type to see if we pass this initial check by hovering:

```tsx
type Example = YouSayGoodbyeAndISayHello<'whatever'>
// results in `type Example = never`

type Example = YouSayGoodbyeAndISayHello<'goodbye'>
// results in `type Example = "wow"`
```

Using a union type like this allows saves us from having to say "if `T` extends hello do something, otherwise if `T` extends goodbye do something."

Now the we know our check works, we can replace `"wow"` with a nested ternary that contains the logic of what to return for "hello" or "goodbye" being passed in:

```tsx
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' | 'goodbye' ? (T extends 'hello' ? 'goodbye' : 'hello') : never
```

Now when our tests pass in "alright pal" or 1, we'll end up in the `never` branch instead of the branch where our actual logic is.

### Conditional Types and `never`

There's no limit to how many conditional types you can stack.

In fact, a lot of the complicated libraries use these huge stacks of conditional types that are ugly to look at but drive a lot of the complex logic.

The pattern of returning `never` allows our conditional types to specify their "else" logic without having to worry too much about what it is. If you try to use something that's been typed as `never` you will get an error.

We'll look at `never` again in later exercises.

</details>
