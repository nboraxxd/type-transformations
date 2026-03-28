## Instructions

We start with several routes in a union of strings called `Route` and an empty type helper called `RoutesObject`:

```tsx
type Route = '/' | '/about' | '/admin' | '/admin/users'

type RoutesObject = unknown
```

### Challenge

Your challenge is to update the `RoutesObject` so that it becomes an object where both the keys and the values are equal to the members of the union:

```tsx
{
  "/": "/",
  "/about": "/about",
  "/admin": "/admin",
  "/admin/users": "/admin/users"
}
```

Conceptually, you’ll map over the `Route` union and turn its members into both the keys and values of an object. As you might guess, this is called a Mapped Type.

Reference the <a href="https://www.typescriptlang.org/docs/handbook/2/mapped-types.html" target="_blank" rel="noopener">Mapped Type section of the TypeScript Handbook</a> for help!

## Solutions

<details>
<summary>Click For Solution</summary>

The Mapped Type solution includes some new syntax:

```tsx
type RoutesObject = {
  [R in Route]: R
}
```

The `[R in Route]` part looks similar to an index, but it isn't.

Instead, it's saying to map over the `Route` union extract each member into a private variable called `R` and make it the property's value.

When hovering over `RoutesObject`, we can see that the `Route` union's string literals are now the keys and values of the object:

```tsx
// on hover
type RoutesObject = {
  '/': '/'
  '/about': '/about'
  '/admin': '/admin'
  '/admin/users': '/admin/users'
}
```

### More Mapped Type Examples

Here are a few more experiments and examples to demonstrate how mapped types work.

#### Assigning Values to string

We could assign the values to be strings instead:

```tsx
type RoutesObject = {
  [R in Route]: string
}
```

This would create keys using each member of the `Route` union. However, using `string` no longer enforces that the values are the members of the union.

#### Manually Passing a Union

We can also manually pass in a union instead of using `Route`:

```tsx
type RoutesObject = {
  [R in '/' | 'wow']: R
}
```

Now hovering over `RoutesObject` shows us this result:

```tsx
{
  "/": "/",
  "wow": "wow"
}
```

### Passing additional options

We can also pass additional options such as `undefined`:

```tsx
type RoutesObject = {
  [R in Route]: R | undefined
}
```

Pretty much any union can be mapped over and have an object created from it!

Mapped types are extremely powerful, and are used in some of the patterns that we'll look at later.

</details>
