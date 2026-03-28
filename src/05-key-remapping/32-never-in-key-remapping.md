## Instructions

We have an object that contains several keys that contain `id`:

```tsx
interface Example {
  name: string
  age: number
  id: string
  organisationId: string
  groupId: string
}

type OnlyIdKeys<T> = unknown
```

### Challenge

Your challenge is to write the `OnlyIdKeys` type helper so that it contains only the keys from the `Example` interface that contain `id`:

```tsx
{
  id: string
  organisationId: string
  groupId: string
}
```

Use the mapped type techniques from the previous lessons.

Hint: You might want to create an intermediate helper type as part of your solution. Refer back to previous lessons in the Conditional Types section may be helpful as well.

## Solutions

<details>
<summary>Click For Solution</summary>

It’s best to start simple when doing key remapping.

We’ll start this solution by mapping over the keys of the generic `T` to give us back the object that we passed in:

```tsx
type OnlyIdKeys<T> = {
  [K in keyof T]: T[K]
}
```

The `T[K]` will probably not change, since whatever we put in there will correspond to the values of what we pass in.

In order to keep things clean, we’ll create a helper type called `SearchForId` that will use a string template to look for `"id"` or `"Id"` that is surrounded by strings of any length:

```tsx
type SearchForId = `${string}${'id' | 'Id'}${string}`
```

Now we can use a conditional type inside of the mapped type.

For every key of the object, we’ll check if it extends `SearchById`. If it does, it will be included. Otherwise, the `never` type will be used.

By using `never` as the else case, any keys that don’t extend `SearchById` will not be included in the `OnlyIdKeys` object:

```tsx
type OnlyIdKeys<T> = {
  [K in keyof T as K extends SearchForId ? K : never]: T[K]
}
```

This technique lets us restrict the keys which are mapped back into the object, while still keeping hold of `K` to index into the object. Very cool.

</details>
