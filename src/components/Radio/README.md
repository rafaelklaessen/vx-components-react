```js
<Radio />
```

With a label:
```js
<Radio>
  <Label>Foo</Label>
</Radio>
```

```js
<form>
  <Radio name="options">
    <Label>Option 1</Label>
  </Radio>
  <Space height={8} />
  <Radio name="options">
    <Label>Option 2</Label>
  </Radio>
  <Space height={8} />
  <Radio name="options">
    <Label>Option 3</Label>
  </Radio>
  <Space height={8} />
  <Radio name="options" disabled>
    <Label>Option 4</Label>
  </Radio>
</form>
```

With `defaultChecked`:
```js
<Radio defaultChecked>
  <Label>Foo</Label>
</Radio>
```

Disabled:
```js
<Radio disabled>
  <Label>Foo</Label>
</Radio>
```

Disabled & checked:
```js
<Radio defaultChecked disabled>
  <Label>Foo</Label>
</Radio>
```

Controlled example:
```js
initialState = { checked: false };

<Radio
  checked={state.checked}
  onChange={e => setState({ checked: e.target.checked })}
>
  <Label>Foo</Label>
</Radio>
```

With the label on the left:
```js
<Radio>
  <Label left>Option</Label>
</Radio>
```

You can customise the input through `inputProps`:
```js
<Radio inputProps={{ style: { backgroundColor: 'green' } }}>
  <Label>Option</Label>
</Radio>
```
