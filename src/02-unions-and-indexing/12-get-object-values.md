## Instructions

We have an enum mapping similar to the last exercise called `frontendToBackendEnumMap`:

```tsx
const frontendToBackendEnumMap = {
  singleModule: 'SINGLE_MODULE',
  multiModule: 'MULTI_MODULE',
  sharedModule: 'SHARED_MODULE',
} as const
```

### Challenge

Your job is to get ALL of the values from `frontendToBackendEnumMap` using what you've been taught so far.

Revisit the previous exercises if you get stuck!

## Solutions

<details>
<summary>Click For Solution</summary>

The solution is fairly elegant, though it is hard to read when you first take a look at it:

```tsx
type BackendModuleEnum = (typeof frontendToBackendEnumMap)[keyof typeof frontendToBackendEnumMap]
```

In the above code, we're getting the type of `frontendToBackendEnumMap`. Then inside of the square brackets, we're saying we want the keys of `frontendToBackendEnumMap`. That means that we index into `frontendToBackendEnumMap`, using all of its keys - which returns a union of all of the values.

### Cleaning Up the Solution

The above code can be tidied up a bit by creating an intermediate type:

```tsx
type Obj = typeof frontendToBackendEnumMap

type BackendModuleEnum = Obj[keyof Obj]
```

You can see a pattern start to emerge when we lift `typeof frontendToBackendEnumMap` into the type `Obj`– We're taking an object, and then we are indexing into the object using its keys.

If we were to manually put the keys inside of `Obj`, we would get the same result:

```tsx
type BackendModuleEnum = Obj['multiModule' | 'sharedModule' | 'singleModule']
```

But of course, this wouldn't stay up to date with the type itself.

Remember the `Obj[keyof Obj]` pattern when you need all of the values from within an object.

</details>
