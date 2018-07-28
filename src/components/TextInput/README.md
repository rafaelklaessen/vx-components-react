```js
<TextInput
  label="Enter your name"
  placeholder="John Doe"
/>
```

Controlled:
```js
initialState = { value: '' };

<TextInput
  label="Enter your name"
  placeholder="John Doe"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>
```

With an error:
```js
<TextInput
  label="Enter your name"
  placeholder="John Doe"
  defaultValue="Foo"
  errorText="Name is already taken!"
/>
```

No label:
```js
<TextInput placeholder="Name" />
```

A completely blank input:
```js
<TextInput />
```

With `type="password"`: (Note that the `type` prop defaults to `text`.)
```js
<TextInput
  label="Choose a password"
  placeholder="Password"
  type="password"
/>
```

Fullwidth:
```js
<TextInput
  label="Enter your name"
  placeholder="John Doe"
  fullWidth
/>
```

Disabled:
```js
<TextInput
  label="Enter your name"
  placeholder="John Doe"
  disabled
/>
```

`multiLine`:
```js
<TextInput
  label="Write something about yourself"
  placeholder="My name is Foo and I live in Bar"
  multiLine
  rows={6}
/>
```

You can also pass an ID to the `TextInput`. If you don't pass one, a random ID will be generated.
```js
<TextInput
  id="foobar"
  label="Enter your name"
  placeholder="John Doe"
/>
```