## Instructions

Now we'll start with a type called `TemplateLiteralKey`:

```tsx
type TemplateLiteralKey = `${'user' | 'post' | 'comment'}${'Id' | 'Name'}`
```

When we hover over it, we can see that it's creating a union out of two unions that are mashed together in a template literal:

```tsx
// On hover

type TemplateLiteralKey = 'userId' | 'username' | 'postId' | 'postName' | 'commentId' | 'commentName'
```

### Challenge

Your challenge is to create an object out of those keys and assign it to `ObjectOfKeys`.

You don't need to change anything in `TemplateLiteralKey`– just add something to `ObjectOfKeys`.

The test shows what the result should look like:

```tsx
type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string
        userName: string
        postId: string
        postName: string
        commentId: string
        commentName: string
      }
    >
  >,
]
```

## Solutions

<details>
<summary>Click For Solution</summary>

The solution is to use the `Record` type.

Passing in `TemplateLiteralKey` and `string` as the type parameters will create an object type that has all of the keys from `TemplateLiteralKey` and the values will be `string`:

```tsx
type ObjectOfKeys = Record<TemplateLiteralKey, string>
```

### Going Further

Similar to other template literal behaviors we've seen, we can add anything we want to `TemplateLiteralKey` and it will be reflected in `ObjectOfKeys`.

For example, if we add `"admin"` to the first template literal:

```tsx
type TemplateLiteralKey = `${'admin' | 'user' | 'post' | 'comment'}${'Id' | 'Name' | 'Email'}`
```

We end up with additional keys being created:

```tsx
type ObjectOfKeys = {
  adminId: string
  adminName: string
  adminEmail: string
  userId: string
  userName: string
  userEmail: string
  postId: string
  postName: string
  postEmail: string
  commentId: string
  commentName: string
  commentEmail: string
}
```

While this is a great way to convert template literals into objects, with this pattern you can't individually set the types of the properties.

We'll get to that in the key remapping section.

</details>
