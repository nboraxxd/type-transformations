## Instructions

Here we have a function called `goToRoute`, where `Route` is currently `unknown`:

```tsx
type Route = unknown

export const goToRoute = (route: Route) => {}
```

We want to make it so that only certain types of strings can be passed into `goToRoute`:

### Challenge

Your challenge is to change `Route` into something that allows any string that starts with a forward slash.

Here are some examples of strings that should succeed:

```tsx
// Should succeed:
goToRoute('/users')
goToRoute('/')
goToRoute('/admin/users')
```

These examples should give an error:

```tsx
// ®ts-expect-error
goToRoute('users/1')
// @ts—expect—error
goToRoute('<http://facebook.com>')
```

Hint: To solve this challenge, check out Template Literal Types in <a href="https://www.typescriptlang.org/docs/handbook/2/types-from-types.html" target="_blank" rel="noopener">the TypeScript Docs</a>.

## Solutions

<details>
<summary>Click For Solution</summary>

The template literal syntax in TypeScript is similar to the JavaScript syntax, except you can put types inside of it.

Here's how we would format strings that begin with a slash:

```tsx
type Route = `/${string}`
```

### Experiment with `@ts-expect-error`

Note that we are using the `@ts-expect-error` comments for some of the strings. These tell TypeScript that we expect the next line to have an error:

```tsx
// ®ts-expect-error
goToRoute('users/1')
// @ts—expect—error
goToRoute('<http://facebook.com>')
```

If we remove these comments, we will get an error:

```text
Argument of type '"users/1"' is not assignable to parameter of type '`${string}`'.
```

Prepending the forward slash to these strings, we no longer get an error:

```tsx
// no type errors
goToRoute('/users/1')
goToRoute('/')
```

Template literal types let us be really specific with the types of strings that you can pass in. They also have several other useful scenarios that we'll see throughout this section.

</details>
