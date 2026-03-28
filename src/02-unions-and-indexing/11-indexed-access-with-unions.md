## Instructions

This exercise starts with our `programModeEnumMap` that includes the `as const` annotation.

```tsx
export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const
```

This time, we want to index into `programModeEnumMap` and pull out a union type from it. More specifically, we want the union to be `"1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"` as seen in the test:

```tsx
type tests = [Expect<Equal<IndividualProgram, '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'>>]
```

### Challenge

Starting with this `IndividualProgram` type:

```tsx
export type IndividualProgram = unknown
```

Your challenge is to replace the `unknown` with a value that results in the union above.

This is going to be simpler than you might think, but it does introduce something new!

## Solutions

<details>
<summary>Click For Solution</summary>

There are a couple ways to solve this.

### Solution 1

You can actually pass a union into an indexed access to get the specific members you want:

```tsx
export type IndividualProgram = (typeof programModeEnumMap)[
  | 'ONE_ON_ONE'
  | 'SELF_DIRECTED'
  | 'PLANNED_ONE_ON_ONE'
  | 'PLANNED_SELF_DIRECTED']
```

Passing a union into an indexed access type like this will return another union, which is pretty awesome!

### Solution 2

A slightly more complex way to do this is to use `Exclude` in an indexed access.

This technique creates a union by excluding the members that we _don't_ want, instead of adding the members that we do want:

```tsx
export type IndividualProgram = (typeof programModeEnumMap)[Exclude<
  keyof typeof programModeEnumMap,
  'GROUP' | 'ANNOUNCEMENT'
>]
```

We can make this a little more readable by extracting the `Exclude` into a `type` like so:

```tsx
type Example = Exclude<keyof typeof programModeEnumMap, 'GROUP' | 'ANNOUNCEMENT'>
```

And then pass the extracted type into the indexed access like so:

```tsx
export type IndividualProgram = (typeof programModeEnumMap)[Example]
```

The `Exclude` technique is a little less typing for us, and the TypeScript compiler does a bit more work.

No matter which way you choose, you end up with the same result as directly passing a union into the indexed access.

</details>
