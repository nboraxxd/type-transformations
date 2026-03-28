## Instructions

Let's dive deeper into template literals by looking at splitting a string at the type level.

We start with a `type` named `Path` that just is expressed as a string literal:

```tsx
type Path = 'Users/John/Documents/notes.txt'
```

### Challenge

Your challenge is to update `SplitPath` to be a tuple of the parts of `Path` between the slashes. A tuple is similar to an array, but will have specific elements as seen in the test:

```tsx
type tests = [Expect<Equal<SplitPath, ['Users', 'John', 'Documents', 'notes.txt']>>]
```

Inside of the `ts-toolbelt` library is a namespace called `S` that can help you with this.

Check out <a href="https://millsp.github.io/ts-toolbelt/modules/string_split.html" target="_blank" rel="noopener">the docs for ,`S`</a> to learn how to get started, and we'll examine further in the solution.

## Solutions

<details>
<summary>Click For Solution</summary>

The <a href="https://millsp.github.io/ts-toolbelt/modules/string_split.html" target="_blank" rel="noopener">documentation for ,`S.Split`,.</a> is fairly limited, so we'll read it through our code.

Here's the solution:

```tsx
type SplitPath = S.Split<Path, '/'>
```

In `SplitPath`, we are using `S.Split`, passing it the `Path`, and then setting the delimiter to be `/`.

From here, `S.Split` will split the `Path` string up on the forward slash.

Of course, we can set it to split on any character we want.

Doing this type of operation at the type level is pretty fascinating!

Keep `Split` in mind, especially if you're looking to do really clever stuff with dynamic path parameters (which we may explore later in the section).

</details>
