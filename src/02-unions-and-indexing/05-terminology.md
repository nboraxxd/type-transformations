## Instructions

We're going to discuss some terminology in this exercise.

There are three types in this example:

```tsx
type A =
	| {
	    type: "a";
			a: string;
		}
	| {
			type: "b";
	    b: string;
		}
   | {
			type: "c";
	    c: string;
		};

type B = "a" | "b" | "c";

enum C = {
	A = "a",
	B = "b",
	C = "c",
}
```

One of the types is a discriminated union, one is an enum, and one is a union type.

Your challenge is to figure out which is which.

## Solutions

<details>
<summary>Click For Solution</summary>

The answer is that `A` is a **discriminated union**.

```tsx
type A =
  | {
      type: 'a'
      a: string
    }
  | {
      type: 'b'
      b: string
    }
  | {
      type: 'c'
      c: string
    }
```

`B` is a union, but not a discriminated union.

```tsx
type B = 'a' | 'b' | 'c'
```

`C` is an enum.

```tsx
enum C {
  a = 'a',
  b = 'b',
  c = 'c',
}
```

We’ll talk more about enums later. For now, let’s look at the differences between a discriminated union and a regular union.

### Discriminated Unions vs. Unions

A discriminated union has something in common with whatever you’re representing. For example, if you’re working with an object you would have a common key.

This common aspect is called the discriminator.

Take this `getUnion` function that takes in a `result` of type `A`, for example:

```tsx
const getUnion = (result: A) => {}
```

Inside of this function, we can check if `result.type == 'a'`.

However, if we try to access `result.a`, TypeScript will yell at us since the `a` key does not exist on `b` or `c` from our exercise:

```tsx
// Only one of these
type A =
  | {
      type: 'a'
      a: string
    }
  | {
      type: 'b'
      b: string
    }
  | {
      type: 'c'
      c: string
    }
```

But we know members with a type of `"a"` will have an `a` property, so we can safely access it.

Unions, on the other hand, don’t carry any properties along with them.

```tsx
type B = 'a' | 'b' | 'c'
```

As seen in our exercise example, we are able to check if something is `"a"` then do something.

Both types are useful, and we’ll see them throughout the workshop.

</details>
