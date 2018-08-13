```js
initialState = { value: ['foo'] };

<SelectField
  placeholder="Foo Bar"
  options={{
    foo: 'bar',
    bar: 'foo'
  }}
  value={state.value}
  onChange={value => setState({ value })}
  errorText="Oh no!"
  multi
  fullWidth
/>
```
