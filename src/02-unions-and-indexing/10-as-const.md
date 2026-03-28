## Instructions

Here we have a non-TypeScript object called `programModeEnumMap`, that maps from one kind of enum to another:

```tsx
export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1onl',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'plannedlonl',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
}
```

Imagine that the uppercase keys are what's coming from the backend, and the lowercase strings are what we want to use on the frontend.

Below the `programModeEnumMap` in the exercise code are several types, starting with `GroupProgram`:

```tsx
export type GroupProgram = (typeof programModeEnumMap)['GROUP']
```

From this line it looks like the type of `GroupProgram` would be `"group"`, but when we hover over it we can see that it's actually just `string`.

### Challenge

Your challenge is to add an annotation to the `programModeEnumMap` object that ensures that resolves these values as constants with the literal values.

Reference <a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces" target="_blank" rel="noopener">the Everyday Types section of the TypeScript Docs</a> for help!

## Solutions

<details>
<summary>Click For Solution</summary>

The solution is to add the `as const` annotation to the `programModeEnumMap` object as seen below:

```tsx
export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'plannedlonl',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const
```

There are a couple useful things that `as const` does for us.

First, it freezes the object's values and ensures that they are inferred as their literal types. It also adds the `readonly` annotation to the object's keys, which makes the properties immutable.

We can see this information when we hover over `programModeEnumMap` in VSCode:

```tsx
// Hovering over `programModeEnumMap`

const programModeEnumMap: {
  readonly GROUP: 'group'
  readonly ANNOUNCEMENT: 'announcement'
  readonly ONE_ON_ONE: '1on1'
  readonly SELF_DIRECTED: 'selfDirected'
  readonly PLANNED_ONE_ON_ONE: 'planned1on1'
  readonly PLANNED_SELF_DIRECTED: 'plannedSelfDirected'
}
```

Without the the `as const` annotation, the properties are mutable and in this case are typed as strings.

Since we know that the values are never going to change, we add `as const` to freeze them and infer them as their literal types.

### Using `as const` with Arrays

We can also use `as const` with arrays.

For example, TypeScript would consider `arr` a number array and allow us to change items:

```tsx
const arr = [1, 2, 3]

arr[0] = 1234
```

Adding the `as const` annotation makes it so we could no longer change the values, and instead they would be inferred as their literal types:

```tsx
// on hover
// const arr: readonly [1, 2, 3]

const arr = [1, 2, 3] as const
```

### Deeply Nested Data with `as const`

We can also use `as const` with deeply nested data.

If we add a `coolThing` object property to our `programModeEnumMap` object, TypeScript would infer the values as their literals all the way down.

```tsx
const programModeEnumMap: {
  coolThing: {
    cool: "cool"
  }
} as const;
```

Hovering confirms that `coolThing` is `readonly`.

```tsx
// on hover
const programModeEnumMap: {
  readonly coolThing: {
    readonly cool: 'cool'
  }
}
```

### Comparing to `Object.freeze`

We can get a similar result to `as const` with `Object.freeze`, though with a couple important differences to note.

`Object.freeze` works both on the type and runtime levels, but `as const` only works at the type level.

However, it only works on the first level of an object. This means that values that are nested more deeply won't end up as `readonly`.

To summarize: `as const` works with deeply nested objects, but only on the type level.

`Object.freeze` works at both the runtime and type levels, but only on the first nested item.

</details>
