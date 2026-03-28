## Instructions

This exercise is a more difficult version of one we saw earlier in the workshop.

We start with the following:

```tsx
type Route =
  | {
      route: '/'
      search: {
        page: string
        perPage: string
      }
    }
  | { route: '/about' }
  | { route: '/admin' }
  | { route: '/admin/users' }

type RoutesObject = unknown
```

### Challenge

Your challenge is to update `RoutesObject` to match how it is seen in the test:

```tsx
{
  "/": {
    page: string;
    perPage: string;
  };
  "/about": never;
  "/admin": never;
  "/admin/users": never;
}
```

Hint: When mapping, check that if the `search` key is present. If it is, return it. Otherwise, return `never`. You'll want to use `infer` as well.

## Solutions

<details>
<summary>Click For Solution</summary>

Here's what my solution looks like:

```tsx
type RoutesObject = {
  [R in Route as R['route']]: R extends { search: infer S } ? S : never
}
```

As usual, we'll break it down bit by bit.

### Turn the Discriminated Union into an Object

The first thing to do is turn the discriminated union into an object.

We can simplify this like so:

```tsx
[R in Route as R["route"]]: R
```

With the above, each of the members of the discriminated union is mapped into its own key:

```tsx
// Hovering over RoutesObject
type RoutesObject = {
    "/": {
        route: "/";
        search: {
            page: string;
            perPage: string;
        };
    };
    "/about": {
        route: "/about";
    };
    ...
```

### Use a Conditional to Find `search`

Now that we have the keys we want, we need to find which ones include `search`.

We can't use an indexed access for this, because we know that they don't all have it:

```tsx
// This won't work!
[R in Route as R["route"]]: R['search']
```

Instead, we'll use `extends` to do a conditional check. If `search` is there, return it. Otherwise, return `never`.

There are a couple ways to do this.

One option is to add an object with a `search` key and an `any` type:

```tsx
[R in Route as R["route"]]: R extends { search: any } ? R["search"] : never;
```

This works, and gets us what we need to make the test pass.

However, I prefer to use `infer` because it allows us to skip the indexed access:

```tsx
[R in Route as R["route"]]: R extends { search: infer S } ? S : never;
```

It looks cleaner, and prevents other people who read the code from having to determine what the `any` is for.

Following this pattern to do checks is great in situations where you want to extract things that you aren't sure are present in all members of the union.

</details>
