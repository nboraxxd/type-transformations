## Instructions

We have a type `Route` that is a discriminated union of the possible routes in the application. Each route has the properties `search` and `route`:

```tsx
type Route =
  | {
      route: '/'
      search: {
        page: string
        perPage: string
      }
    }
  | { route: '/about'; search: {} }
  | { route: '/admin'; search: {} }
  | { route: '/admin/users'; search: {} }
```

Recall that each member in a discriminated union will always share a common property, known as the discriminator.

### Challenge

Your challenge is to transform the `Route` union into an object whose properties have a key of the `route` property along with the value from `search`:

```tsx
{
  "/": { page: string, perPage: string },
  "/about": {},
  "/admin": {},
  "/admin/users": {}
}
```

There are two possible solutions for this. Revisit the lessons on Unions and Indexing for a refresher.

## Solutions

<details>
<summary>Click For Solution</summary>

As mentioned, there are two possible solutions to this exercise.

### Solution 1: Creating a Union

One way to solve this problem is based on creating a union of all of the possible `route` values, which is the discriminator.

Here's what this this solution looks like:

```tsx
type RoutesObject = {
  [R in Route['route']]: Extract<Route, { route: R }>['search']
}
```

In the code above, we map over the `Route["route"]` union. Each key is set to the value of `route`, which is then assigned to `R`.

We then use `Extract` to get out only the `route` that matches the current `R` value.

Finally, we use an indexed access type to get the `search` property off of the matching object:

```tsx
type RoutesObject = {
  [R in Route['route']]: Extract<Route, { route: R }>['search']
}
```

We do end up with the correct solution, but it's too verbose.

### Solution 2: Using `as`

A cleaner solution is to iterate over `Route` itself, and remap the keys using the `as` clause.

As seen in the previous exercise, this means that we have access to the entire route object instead of only the `route` property.

This means we can use indexed access to get the `search` property directly off of `R` without needing to do any kind of extraction!

Here's what this solution looks like:

```tsx
type RoutesObject = {
  [R in Route as R['route']]: R['search']
}
```

### Experiment: Removing the `as` clause

Let's try removing the `as` clause from the `RoutesObject` solution above:

```tsx
type RoutesObject = {
  [R in Route]: R['search']
}
```

This throws us an interesting error:

```
Type 'Route' is not assignable to type 'string | number | symbol'. Type '{ route: "/"; search: { page: string; perPage: string; }; }' is not assignable to type 'string | number | symbol'.
```

This is saying that you can't just have whatever you want as the key. You must use either a string, number, or symbol as a key in TypeScript.

When we use `as`, we are able to assign `R` to whatever we want, while ensuring that the key will be set to a valid type.

This is a great technique for manipulating discriminated unions into new objects!

</details>
