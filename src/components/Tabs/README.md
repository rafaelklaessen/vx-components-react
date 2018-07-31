```js
const Tab = require('../Tab').default;

<Tabs>
  <Tab label="Overview">
    Foo
  </Tab>
  <Tab label="Technical information">
    Bar
  </Tab>
</Tabs>
```

Controlled example:
```js
const Tab = require('../Tab').default;

initialState = { value: 'overview' };

<Tabs value={state.value} onChange={value => setState({ value })}>
  <Tab label="Overview" tabKey="overview">
    Foo
  </Tab>
  <Tab label="Technical information" tabKey="technical-info">
    Bar
  </Tab>
</Tabs>
```

With the `imperfect` prop:
```js
const Tab = require('../Tab').default;

<Tabs imperfect>
  <Tab label="Overview">
    Foo
  </Tab>
  <Tab label="Technical information">
    Bar
  </Tab>
</Tabs>
```
