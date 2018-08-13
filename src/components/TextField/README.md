```js
<TextField
  label="Enter your name"
  placeholder="John Doe"
/>
```

Controlled:
```js
initialState = { value: '' };

<TextField
  label="Enter your name"
  placeholder="John Doe"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>
```

With an error:
```js
<TextField
  label="Enter your name"
  placeholder="John Doe"
  defaultValue="Foo"
  errorText="Name is already taken!"
/>
```

No label:
```js
<TextField placeholder="Name" />
```

A completely blank input:
```js
<TextField />
```

With `type="password"`: (Note that the `type` prop defaults to `text`.)
```js
<TextField
  label="Choose a password"
  placeholder="Password"
  type="password"
/>
```

Fullwidth:
```js
<TextField
  label="Enter your name"
  placeholder="John Doe"
  fullWidth
/>
```

Disabled:
```js
<TextField
  label="Enter your name"
  placeholder="John Doe"
  disabled
/>
```

`multiLine` (renders a `textarea`):
```js
<TextField
  label="Write something about yourself"
  placeholder="My name is Foo and I live in Bar"
  multiLine
  rows={6}
/>
```

You can also pass an ID to the `TextField`. If you don't pass one, a random ID will be generated.
```js
<TextField
  id="foobar"
  label="Enter your name"
  placeholder="John Doe"
/>
```

You can customize the input through `inputProps`:
```js
<TextField
  label="Enter your name"
  placeholder="John Doe"
  inputProps={{ style: { backgroundColor: 'green' } }}
/>
```
