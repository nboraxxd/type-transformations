## Instructions

In this exercise, we have a function called `myFunc` which we can see returns a string when hovering over the name:

```tsx
// From the hover popup
// const myFunc: () => string

const myFunc = () => {
  return 'hello'
}
```

We want to somehow take the knowledge of what `myFunc` returns and stick it inside `MyFuncReturn`.

```tsx
type MyFuncReturn = unknown
```

In this case we need to change this `unknown` to somehow be a `string`.

Of course, we could just manually add the type, but then if the return of `myFunc` changes, then the type may not be the same anymore.

Your challenge is to extract the information about the return type from `myFunc` into the `MyFuncReturn` type.

To accomplish this you will need to use the `typeof` operator, as well as finding <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank" rel="noopener">a utility type in the TypeScript docs</a>.

## Solutions

<details>
<summary>Click For Solution</summary>

The solution here has two parts.

First we need to use the `ReturnType` type helper from TypeScript.

This is a utility type and it's one of many that TypeScript exposes to help you with type transformations.

Passing `typeof myFunc` to `ReturnType` will give us the return type of `myFunc`:

```tsx
type MyFuncReturn = ReturnType<typeof myFunc>
```

Let's break this down a bit.

Consider this line of code:

```jsx
type MyFunc = typeof myFunc
```

This says “take the information from the type signature of our function `myFunc` and assign it to the type `MyFunc`.”

The pattern here is a really powerful, as it allows us to extract types from runtime code instead of declaring them manually.

For our example, anything we add to to our function `myFunc` will then be reflected in the type. This is pretty amazing!

Now that we have the `MyFunc` type, we can access its return type using the `ReturnType` helper.

### Examining ReturnType

Navigating to the definition of `ReturnType`, we can see that it actually does have its own type definition that is globally available without needing to be imported:

```tsx
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```

Back in our code, we can treat `ReturnType` like a function that returns a type. If we pass in the `MyFunc` type into `ReturnType` , we can create a new `ReturnValue` type:

```tsx
type myFunc = typeof myFunc

type ReturnValue = ReturnType<myFunc>
```

We will be creating our own versions of these type helpers later on.

</details>
