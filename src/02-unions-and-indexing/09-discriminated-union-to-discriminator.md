## Instructions

In this exercise, we have the same `Event` discriminated union that we’ve used before:

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

Your job is to grab the type of `click` or `focus` or `keyDown` from the discriminated union so that the following test passes:

```tsx
type tests = [Expect<Equal<EventType, 'click' | 'focus' | 'keydown'>>]
```

Don’t overthink it!

This exercise is easier than it seems, and we've already covered all of the pieces you'll need to solve it!

## Solutions

<details>
<summary>Click For Solution</summary>

As simple as it may seem, here’s the solution:

```tsx
type EventType = Event['type']
```

This works because when you access a key in a union type, you are actually accessing every possible permutation of the union.

### Experimenting with the Event Type

For example, let’s remove the `type` discriminator from `"keydown"`:

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
      event: KeyboardEvent
    }
```

Now TypeScript will show us an error at our `type EventType = Event["type"];` line because not every member of the `Event` union includes a type.

We can put the `type` back and do a similar experiment where we rename an `event`:

```tsx
export type Event =
  | {
      type: 'click'
      mouseEvent: MouseEvent // renamed event
    }
  | {
      type: 'focus'
      event: FocusEvent
    }
  | {
      type: 'keydown'
      event: KeyboardEvent
    }

// Error
type EventType = Event['event']
```

Now If you try to access `"event"` from `Event` and one of the permutations doesn't have it, or is mislabeled, you'll get an error.

It's important to understand you can access parts of discriminated unions, as long as that part belongs to every member of the union.

</details>
