```js
<Checkbox label="Enable Wi-Fi" />
```

Disabled:
```js
<Checkbox
  label="Enable 4G"
  disabled
/>
```

Indeterminate:
```js
<Checkbox
  label="Indeterminate"
  indeterminate
/>
```

Controlled example:
```js
initialState = { checked: false };

<Checkbox
  label="Controlled checkbox"
  checked={state.checked}
  onChange={e => setState({ checked: e.target.checked })}
/>
```

You can customize the wrapper through `wrapperProps` or through `wrapper`:
```js
<Checkbox
  label="Enable Wi-Fi"
  wrapperProps={{ style: { backgroundColor: 'green' } }}
/>
```

Note that `wrapperProps` will be passed on to the custom wrapper too.
```js
const styled = require('react-emotion').default;

const CustomWrapper = styled('div')({
  backgroundColor: 'purple'
}, ({ space }) => ({
  margin: space
}));

<Checkbox
  label="Enable Wi-Fi"
  wrapper={CustomWrapper}
  wrapperProps={{ space: 56 }}
/>
```
