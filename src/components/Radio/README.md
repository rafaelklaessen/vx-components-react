```js
<form>
  <Radio>
    <Label>Foo</Label>
  </Radio>
</form>
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
<form>
  <Radio defaultChecked>
    <Label>Foo</Label>
  </Radio>
</form>
```

Disabled:
```js
<form>
  <Radio disabled>
    <Label>Foo</Label>
  </Radio>
</form>
```

Disabled & checked:
```js
<form>
  <Radio defaultChecked disabled>
    <Label>Foo</Label>
  </Radio>
</form>
```

Controlled example:
```js
initialState = { checked: false };

<form>
  <Radio
    checked={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
  >
    <Label>Foo</Label>
  </Radio>
</form>
```

You can customise the input through `inputProps`:
```js
<form>
  <Radio inputProps={{ style: { backgroundColor: 'green' } }}>
    <Label>Option</Label>
  </Radio>
</form>
```
