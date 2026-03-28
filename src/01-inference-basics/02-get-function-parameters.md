## Instructions

Similar to the last exercise, we will be using one of TypeScript’s utility types to get types from a function.

This time we want to extract parameters from this `makeQuery` function:

```typescript
const makeQuery = (
  url: string,
  opts?: {
    method?: string
    headers?: {
      [key: string]: string
    }
    body?: string
  },
) => {}

type MakeQueryParameters = unknown
```

Note that the `tests` show that `MakeQueryParameters` should return a tuple where the first value is `url: string` and the second is an optional `opts` object:

```typescript
type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string
          headers?: {
            [key: string]: string
          }
          body?: string
        },
      ]
    >
  >,
]
```

In order to get the types of the function parameters, you’ll need `typeof` as well as another utility type.

Take a look around the TypeScript docs to see if any of the utility types there are any help.

## Solutions

<details>
<summary>Click For Solution</summary>

The solution is to use the `Parameters` utility type, and pass it `typeof makeQuery`:

```tsx
type MakeQueryParameters = Parameters<typeof makeQuery>
```

Note that when hovering over `MakeQueryParameters`, you can see that it returns a tuple with `url: string` and the optional `opts?` object just like in our `tests`.

```tsx
// Displayed while hovering
type MakeQueryParameters = [
  url: string,
  opts?:
    | {
        method?: string | undefined
        headers?:
          | {
              [key: string]: string
            }
          | undefined
        body?: string | undefined
      }
    | undefined,
]
```

### Extracting Only the Second Parameter

If we wanted to extract only the second parameter, then we’d use an index type.

We can do this by creating a new type called `MakeQueryParametersSecondArgument` and assigning it to `MakeQueryParameters[1]` just like how we would access elements in an array:

```tsx
type MakeQueryParametersSecondArgument = MakeQueryParameters[1]
```

In this case, passing `1` gets us the second member of the tuple, and we get everything in `opts?` as see when hovering over `MakeQueryParametersSecondArgument`.

```tsx
// Displayed while hovering
type MakeQueryParametersSecondArgument =
  | {
      method?: string | undefined
      headers?:
        | {
            [key: string]: string
          }
        | undefined
      body?: string | undefined
    }
  | undefined
```

The `Parameters` utility is really useful for extracting type information that you don't necessarily have control of, such as code in external libraries.

</details>
