```js
<Toggle />
```

With `defaultChecked`:
```js
<Toggle defaultChecked />
```

Controlled example:
```js
initialState = { checked: true };

<Toggle
  checked={state.checked}
  onChange={checked => setState({ checked })}
/>
```

Disabled:
```js
<Toggle disabled />
```

Disabled & checked:
```js
<Toggle defaultChecked disabled />
```
