## Instructions

In this exercise we have an interface `MyComplexInterface` which is acting as a type helper.

The interface takes arguments for `Event`, `Context`, `Name`, and `Point`, each being put into `getEvent`, `getContext`, `getName`, and `getPoint`, respectively.

```tsx
interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event
  getContext: () => Context
  getName: () => Name
  getPoint: () => Point
}
```

There's also an `Example` that shows how `MyComplexInterface` is called:

```tsx
type Example = MyComplexInterface<'click', 'window', 'my-event', { x: 12; y: 14 }>
```

## Challenge

Your challenge is to create another type helper called `GetPoint`, where when we pass in to `MyComplexInterface` we return the `{ x: 12; y: 14 }` as seen in our test.

The goal is for you to focus on trying to extract the generic from the argument.

Hint: using `infer` will allow you to extract `Point` without having to change anything within `MyComplexInterface`!

Reference <a href="https://www.typescriptlang.org/docs/handbook/2/generics.html" target="_blank" rel="noopener">the Generics section of the TS Docs</a> for more.

## Solutions

<details>
<summary>Click For Solution</summary>

Before we get to the solution, let's take a look at another example.

Here `Example2` is calling `GetPoint` on `MyComplexInterface`, and we're trying to return the `4`:

```tsx
type Example2 = GetPoint<MyComplexInterface<l, 2, 3, 4>>
```

For a first pass at a solution for `GetPoint`, we call `MyComplexInterface` and pass in `any` for each of the slots:

If we change `Example2` to call `GetPoint` with a single random argument, we'll end up with `never` because of the branching logic.

```tsx
type GetPoint<T> = T extends MyComplexInterface<any, any, any, any> ? any : never

// As of right now, if we hover over the `4` in `Example2`
// we'll see that it is currently typed as `any` as expected.
```

### Use `infer` in a Type Argument

So what we need to do is somehow inside here is use an infer to extract out one of the slots.

#### The Not-Ideal Solution

One option to make the test pass would be to update `GetPoint` to use `ReturnType<T["getPoint"]>`:

```tsx
type GetPoint<T> = T extends MyComplexInterface<any, any, any, any> ? ReturnType<T['getPoint']> : never
```

The issue with this solution is that it ties the conditional type to the internal structure of `MyComplexInterface`. This pattern might not be something that you always want to do.

#### The Better Solution

Instead of tying into the structure of the interface, we should instead just look at its public declaration because it is less likely to change.

```tsx
MyComplexInterface<any, any, any, any>
```

We can add `infer` to any of the slots in the declaration (where "slot" is anything between angle brackets). In this case, all of the slots above are `any`.

Because `Point` was the fourth argument, we can replace the corresponding slot with `TPoint` then return it for the matching conditional branch:

```tsx
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint> ? TPoint : never
```

This approach gives us all of the benefits of being able to extract out all the members of the type arguments without needing to dive deep into the element itself to understand its structure.

You could add `infer` for the other slots, too, but in this case `GetPoint` is only interested in `TPoint`.

Being able to extract type arguments to another type helper is another really cool feature of `infer`.

</details>
