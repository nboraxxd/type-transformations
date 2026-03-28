## Instructions

Similar to the last exercise, we will be working with template literals to create an object.

We'll start with `Event`, which is a a set of string unions, as well as an unknown `ObjectOfKeys`.

```tsx
type Event = `log_in` | 'log_out' | 'sign_up'

type ObjectOfKeys = unknown
```

### Challenge

Your challenge is to update `ObjectOfKeys` to be an object where the keys are the members of `Event` in uppercase form as seen here:

```tsx
{
  LOG_IN: string
  LOG_OUT: string
  SIGN_UP: string
}
```

This solution will be similar to the last exercise where we map through the union, but this time you'll need to transform the keys to uppercase.

## Solutions

<details>
<summary>Click For Solution</summary>

We'll start off with the `Record` type, passing it `Event` and `string`. However, this time we'll also add the `Uppercase` type helper around `Event`:

```tsx
type ObjectOfKeys = Record<Uppercase<Event>, string>
```

The `Uppercase` string manipulation type is built into TypeScript, and in this case is applied to each member of the union that is being mapped over.

### Make it More Readable

Our solution can be made more readable by creating an `UppercaseEvent` alias as a first step:

```tsx
type UppercaseEvent = Uppercase<Event>

type ObjectOfKeys = Record<UppercaseEvent, string>
```

### Other String Type Helpers

There are additional string type helpers that you can use to manipulate strings such as `Lowercase<>` and `Capitalize<>`, among others:

```tsx
type LowercaseEvent = Lowercase<Event>
type CapitalizeEvent = Capitalize<Event>
```

It's so cool how TypeScript just gives you these out of the box helpers that make manipulating string literals faster and easier!

</details>
