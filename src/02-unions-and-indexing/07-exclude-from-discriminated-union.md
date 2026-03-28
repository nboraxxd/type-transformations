## Instructions

For this exercise, your job is to extract all of the events from the `Event` type whose type isn't `"keydown"`:

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

type NonKeyDownEvents = unknown
```

To accomplish this, you'll need to use a utility type that's the inverse of the `Extract` utility type we looked at previously.

## Solutions

<details>
<summary>Click For Solution</summary>

The solution here is to use the `Exclude` utility type.

```typescript
type NonKeyDownEvents = Exclude<Event, { type: 'keydown' }>
```

The `Exclude` utility type operates similarly to `Extract`, but this time we are excluding the `keydown` type from the union.

If you've got several members of a union and you want to remove just one thing, `Exclude` is great for that.

</details>
