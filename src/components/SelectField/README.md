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

With a placeholder:
```js
<SelectField placeholder="Choose an option">
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
