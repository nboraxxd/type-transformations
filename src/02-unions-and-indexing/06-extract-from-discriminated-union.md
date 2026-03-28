## Instructions

Here we have a discriminated union called `Event` which has a discriminator called `type` on it:

```tsx
export type Event =
  | {
      type: 'click'
      event: MouseEvent
    }
  | {
      type: 'focus'
      event: FocusEvent
    }
  | {
      type: 'keydown'
      event: KeyboardEvent
    }
```

### Challenge

Your goal for this challenge is to extract the `"click"` type into a new `type` called `ClickEvent`.

As seen earlier, this could be done manually:

```typescript
// Don't do this!

type ClickEvent = {
  type: 'click'
  event: MouseEvent
}
```

But instead you should extract this type directly from the `Event` discriminated union. This lets you keep one source of truth for the type, without needing to double-declare it.

Reference the <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank" rel="noopener">TypeScript Docs</a> to find a utility type that will help you extract a specific type from a discriminated union.

## Solutions

<details>
<summary>Click For Solution</summary>

The solution here is to use the `Extract` utility type to extract the `click` event from the `Event` discriminated union:

```tsx
type ClickEvent = Extract<Event, { type: 'click' }>
```

The `Extract` helper checks if each member of the union extend the type that you pass in, and returns a union of all the members that do.

Here's another way we could solve this challenge:

```tsx
type ClickEvent = Extract<Event, { event: MouseEvent }>
```

This works because `event` is another differentiator.

If there's more than one match for the thing we're extracting, we'll end up with a union.

### Using `Extract` with a Union

`Extract` also works with unions.

As an example, let's create a `Fruit` union:

```tsx
type Fruit = 'apple' | 'banana' | 'orange'
```

We could then extract `banana` and `orange` like so:

```tsx
type BananaAndOrange = Extract<Fruit, 'banana' | 'orange'>
```

Now `BananaAndOrange` will be a union of just `"banana" | "orange"`.

</details>
