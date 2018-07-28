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
initialState = { value: '' };

<TextInput
  label="Enter your name"
  placeholder="John Doe"
  errorText="Name is already taken!"
/>
```

Disabled:
```js
initialState = { value: '' };

<TextInput
  label="Enter your name"
  placeholder="John Doe"
  disabled
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

You can also pass an ID to the `TextInput`. If you don't pass one, a random ID will be generated.
```js
<TextInput
  id="foobar"
  label="Enter your name"
  placeholder="John Doe"
/>
```
