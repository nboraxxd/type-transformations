## Instructions

In this exercise we have a union of `Routes` where some of the strings have a colon (`:`):

```tsx
type Routes = '/users' | '/users/:id' | '/posts' | '/posts/:id'
```

The strings with a `:` allow for dynamic path parameters.

### Challenge

Your challenge is to update `DynamicRoutes` to extract members of `Routes` that conform to the `:id` string pattern:

```tsx
type DynamicRoutes = unknown;

type tests = [Expect<EqualsDynamicRoutes, "/users/:id" | "/posts/:id">>];
```

To solve this, you'll need to use template literals along with another piece of syntax that we've already seen.

Hint: the name of this exercise might give you a clue!

## Solutions

<details>
<summary>Click For Solution</summary>

In order to extract strings with `:id`, use the `Extract` utility.

Because we're trying to match strings that contain a `:`, we can write our template like so:

```tsx
;`${string}:${string}`
```

This says "a string of any length, followed by a colon, followed by a string of any length."

Combining the `Extract` syntax and our template, our solution looks like this:

```tsx
type DynamicRoutes = Extract<Routes, `${string}:${string}`>
```

Using template literals in this way is kind of like using a RegEx. We're allowing TypeScript to really dive deep into our strings to understand all the different parts of them.

Now that we've updated `DynamicRoutes`, when we go to use it our VS Code autocomplete will only suggest the two members of `Routes` that contained an `:id`:

```text
// autocomplete options

/posts/:id
/users/:id
```

You can start to see that template literals can really help in manipulating strings and give really powerful options to your users.

</details>
