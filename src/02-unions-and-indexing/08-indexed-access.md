## Instructions

Here, we've got an object called `fakeDataDefaults` that acts as a mock GraphQL object for testing:

```tsx
export const fakeDataDefaults = {
  String: 'Default string',
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: 'id',
}
```

When hovering over `fakeDataDefaults` we can see the types of each field:

```tsx
// Hover over fakeDataDefaults
const fakeDataDefaults: {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}
```

### Challenge

Your challenge is to turn `fakeDataDefaults` into a type, then extract each of the object into its individual pieces:

```tsx
export type StringType = unknown
export type IntType = unknown
export type FloatType = unknown
export type BooleanType = unknown
export type IDType = unknown
```

Consult <a href="https://www.typescriptlang.org/docs/handbook/2/types-from-types.html" target="_blank" rel="noopener">the TypeScript Docs</a> to find a tool that looks useful for this scenario.

## Solutions

<details>
<summary>Click For Solution</summary>

The solution is to use an indexed access type.

First, extract `FakeDataDefaults` into its own type with help from the `typeof` operator:

```tsx
type FakeDataDefaults = typeof fakeDataDefaults
```

From there, we can index each of its fields using square brackets and quotes:

```tsx
export type StringType = FakeDataDefaults['String']
export type IntType = FakeDataDefaults['Int']
export type FloatType = FakeDataDefaults['Float']
export type BooleanType = FakeDataDefaults['Boolean']
export type IDType = FakeDataDefaults['ID']
```

Note that you can't use dot notation to access the fields like you would a standard run-time object. This syntax is invalid:

```tsx
// This won't work!
export type StringType = FakeDataDefaults.String
```

But, just like accessing properties of objects in JavaScript, this lets you dive deeper into an object type.

### Accessing Deeply Nested Data

Indexed access types can also access deeply nested data by chaining square brackets:

```tsx
export const fakeDataDefaults = {
  // ...adding `obj`
  obj: {
    String: 'Default string',
  },
}

type Example = (typeof fakeDataDefaults)['obj']['String']
```

Note that it doesn't matter whether you use a `type` or directly use indexed access types with `typeof`, as it all gets transformed into a type.

</details>
