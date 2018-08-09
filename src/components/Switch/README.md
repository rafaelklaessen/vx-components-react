```js
<Switch />
```

With a label:
```js
<Switch>
  <Label>Enable Wi-Fi</Label>
</Switch>
```

With `defaultChecked`:
```js
<Switch defaultChecked>
  <Label>Enable Wi-Fi</Label>
</Switch>
```

Disabled:
```js
<Switch disabled>
  <Label>Enable Wi-Fi</Label>
</Switch>
```

Disabled & checked:
```js
<Switch defaultChecked disabled>
  <Label>Enable Wi-Fi</Label>
</Switch>
```

Controlled example:
```js
initialState = { checked: true };

<Switch
  checked={state.checked}
  onChange={checked => setState({ checked })}
>
  <Label>Enable Wi-Fi</Label>
</Switch>
```

With the label on the left:
```js
<Switch>
  <Label left>Enable Wi-Fi</Label>
</Switch>
```

You can customise the switch through `switchProps` and `dotProps`:
```js
<Switch
  switchProps={{ style: { backgroundColor: 'green' } }}
  dotProps={{ style: { backgroundColor: 'purple' } }}
>
  <Label>Enable Wi-Fi</Label>
</Switch>
```
