```js
<SelectField placeholder="Pick an option">
  <SelectField.Option>
    Option 1
  </SelectField.Option>
  <SelectField.Option>
    Option 2
  </SelectField.Option>
</SelectField>
```

With a label:
```js
<SelectField label="Pick an option">
  <SelectField.Option>
    Option 1
  </SelectField.Option>
  <SelectField.Option>
    Option 2
  </SelectField.Option>
</SelectField>
```

With both a label & a placeholder
```js
<SelectField
  label="Pick your favourite colour"
  placeholder="Choose a colour"
>
  <SelectField.Option>
    Red
  </SelectField.Option>
  <SelectField.Option>
    Green
  </SelectField.Option>
</SelectField>
```

With an error:
```js
<SelectField
  placeholder="Pick an option"
  errorText="Oh no!"
>
  <SelectField.Option>
    Option 1
  </SelectField.Option>
  <SelectField.Option>
    Option 2
  </SelectField.Option>
</SelectField>
```

Blank select:
```js
<SelectField>
  <SelectField.Option>
    Option 1
  </SelectField.Option>
  <SelectField.Option>
    Option 2
  </SelectField.Option>
</SelectField>
```

With `defaultValue`:
```js
<SelectField defaultValue="option-2">
  <SelectField.Option value="option-1">
    Option 1
  </SelectField.Option>
  <SelectField.Option value="option-2">
    Option 2
  </SelectField.Option>
</SelectField>
```

Disabled:
```js
<SelectField disabled>
  <SelectField.Option>
    Option 1
  </SelectField.Option>
  <SelectField.Option>
    Option 2
  </SelectField.Option>
</SelectField>
```

Disabled & with a default value:
```js
<SelectField defaultValue="option-2" disabled>
  <SelectField.Option value="option-1">
    Option 1
  </SelectField.Option>
  <SelectField.Option value="option-2">
    Option 2
  </SelectField.Option>
</SelectField>
```

Full width:
```js
<SelectField fullWidth>
  <SelectField.Option>
    Option 1
  </SelectField.Option>
  <SelectField.Option>
    Option 2
  </SelectField.Option>
</SelectField>
```

Controlled example:
```js
initialState = { value: 'option-1' };

<SelectField
  value={state.value}
  onChange={value => setState({ value })}
>
  <SelectField.Option value="option-1">
    Option 1
  </SelectField.Option>
  <SelectField.Option value="option-2">
    Option 2
  </SelectField.Option>
</SelectField>
```

Multi:
```js
<SelectField multi>
  <SelectField.Option>
    Option 1
  </SelectField.Option>
  <SelectField.Option>
    Option 2
  </SelectField.Option>
</SelectField>
```

Multi & controlled:
```js
initialState = { value: ['option-1', 'option-2'] };

<SelectField
  value={state.value}
  onChange={value => setState({ value })}
  multi
>
  <SelectField.Option value="option-1">
    Option 1
  </SelectField.Option>
  <SelectField.Option value="option-2">
    Option 2
  </SelectField.Option>
</SelectField>
```

Custom `selectionRenderer`:
```js
<SelectField
  selectionRenderer={(value, options) =>
    `${value.length} out of ${Object.keys(options).length} options selected`
  }
  multi
>
  <SelectField.Option>
    Option 1
  </SelectField.Option>
  <SelectField.Option>
    Option 2
  </SelectField.Option>
</SelectField>
```

Signature of `selectionRenderer`:

`(value: any | any[], options: Map<any, any>, multi: boolean) => any`

Note how the default `selectionRenderer` handles JSX tags:
```js
<SelectField label="I have JSX options!">
  <SelectField.Option>
    <h1>Option 1<em>4</em></h1>
  </SelectField.Option>
  <SelectField.Option>
    <Code>Foo</Code>
  </SelectField.Option>
</SelectField>
```

Customised version:
```js
<SelectField
  label="Pick an option, but this time the select is crazy"
  placeholder="Pick an option"
  errorText="Oh no!"
  labelProps={{ style: { color: 'purple' } }}
  selectWrapperProps={{ style: { backgroundColor: 'green' } }}
  selectionTextProps={{ style: { border: '1px solid pink' } }}
  placeholderWrapperProps={{ style: { border: '1px solid red' } }}
  placeholderProps={{ style: { color: 'orange' } }}
  arrowProps={{ style: { width: 32, height: 32, border: '1px solid purple' } }}
  closeOverlayProps={{ style: { backgroundColor: 'rgba(0, 0, 0, .3)' } }}
  optionWrapperProps={{ style: { backgroundColor: 'salmon' } }}
  errorTextProps={{ style: { textDecoration: 'underline' } }}
  style={{ style: { padding: 24 } }}
>
  <SelectField.Option style={{ color: 'green' }}>
    Option 1
  </SelectField.Option>
  <SelectField.Option style={{ color: 'green' }}>
    Option 2
  </SelectField.Option>
</SelectField>
```
