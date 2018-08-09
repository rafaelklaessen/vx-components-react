```js
<Checkbox />
```

With a label:
```js
<Checkbox>
  <Label>Enable Wi-Fi</Label>
</Checkbox>
```

With `defaultChecked`:
```js
<Checkbox defaultChecked>
  <Label>Enable Wi-Fi</Label>
</Checkbox>
```

Disabled:
```js
<Checkbox disabled>
  <Label>Enable 4G</Label>
</Checkbox>
```

Disabled & checked:
```js
<Checkbox defaultChecked disabled>
  <Label>Enable 4G</Label>
</Checkbox>
```

Indeterminate:
```js
<Checkbox indeterminate>
  <Label>Indeterminate</Label>
</Checkbox>
```

Controlled example:
```js
initialState = { checked: false };

<Checkbox
  checked={state.checked}
  onChange={e => setState({ checked: e.target.checked })}
>
  <Label>Controlled checkbox</Label>
</Checkbox>
```

With the label on the left:
```js
<Checkbox>
  <Label left>Enable Wi-Fi</Label>
</Checkbox>
```

You can customise the input through `inputProps`:
```js
<Checkbox inputProps={{ style: { backgroundColor: 'green' } }}>
  <Label>Enable Wi-Fi</Label>
</Checkbox>
```
