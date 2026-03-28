## Instructions

Your challenge is to extract the path parameters that begin with a colon then create an object out of them.

For example the given `UserPath` string of `"users/:id"` should transform into:

```tsx
{
  id: string
}
```

Hint: You'll need to use template literals, infer, and key remapping to solve this one. Refer to previous lessons if you get stuck!

## Solutions

<details>
<summary>Click For Solution</summary>

Here's the solution I found:

```tsx
type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, '/'>[number] as K extends `:${infer P}` ? P : never]: string
}
```

Let's break it down.

First, we have `ExtractPathParams` that takes in `<TPath extends string>`.

This says that we are only able to pass in strings. Anything else, and TypeScript will yell at us.

Next, we have a mapped type.

The syntax in the solution is a little bit messy, so here's a simplified version:

```tsx
[K in S.Split<TPath, "/">[number]]: string;
```

As we've seen before, this splits a path on the `/` character. It then users `[number]` to grab the union of the tuple. Together, this turns each part into an object property with a string:

```tsx
type Result = {
  "": string;
  users: string;
  ":id" string:
  organisations: string;
  ":organisationId": string;
}
```

Now let's look at it the context of the full solution again:

```tsx
type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, '/'>[number] as K extends `:${infer P}` ? P : never]: string
}
```

Look at the `K` extends `:${infer P}` part. If this passes we know that there's a colon at the start so we know our path has a dynamic parameter.

From there, `infer` will return the part that was extracted. This is a really cool use of infer!

If there is no match, then `never` is returned.

There are many possible solutions to this problem, but hopefully this one gives you a sense of whether or not yours was correct.

Either way, this hopefully gives you an idea about how you might tackle this sort of problem in the future!

</details>
