```js
const withTheme = require('./index').default;

const DisplayTheme = ({ theme }) => <div>{JSON.stringify(theme)}</div>;
const WrappedComponent = withTheme(DisplayTheme);

<WrappedComponent />
```
