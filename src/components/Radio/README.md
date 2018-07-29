```js
<form>
  <Radio label="Foo" />
</form>
```

```js
<form>
  <Radio label="Option 1" name="options" />
  <Space height={8} />
  <Radio label="Option 2" name="options" />
  <Space height={8} />
  <Radio label="Option 3" name="options" />
  <Space height={8} />
  <Radio label="Option 4" name="options" disabled />
</form>
```

Disabled & checked:
```js
<form>
  <Radio label="Foo" disabled checked />
</form>
```

Controlled example:
```js
initialState = { checked: false };

<form>
  <Radio
    label="Foo"
    checked={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
  />
</form>
```

You can customize the wrapper through `wrapperProps` or through `wrapper`:
```js
<form>
  <Radio
    label="Option"
    wrapperProps={{ style: { backgroundColor: 'green' } }}
  />
</form>
```

Note that `wrapperProps` will be passed on to the custom wrapper too.
```js
const styled = require('react-emotion').default;

const CustomWrapper = styled('div')({
  backgroundColor: 'purple'
}, ({ space }) => ({
  margin: space
}));

<form>
  <Radio
    label="Option"
    wrapper={CustomWrapper}
    wrapperProps={{ space: 56 }}
  />
</form>
```
