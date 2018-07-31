```js
<Switch />
```

With `defaultChecked`:
```js
<Switch defaultChecked />
```

Controlled example:
```js
initialState = { checked: true };

<Switch
  checked={state.checked}
  onChange={checked => setState({ checked })}
/>
```

Disabled:
```js
<Switch disabled />
```

Disabled & checked:
```js
<Switch defaultChecked disabled />
```
