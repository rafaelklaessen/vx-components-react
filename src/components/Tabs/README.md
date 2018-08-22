```js
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
initialState = { value: 'overview' };

<Tabs value={state.value} onChange={value => setState({ value })}>
  <Tab label="Overview" value="overview">
    Foo
  </Tab>
  <Tab label="Technical information" value="technical-info">
    Bar
  </Tab>
</Tabs>
```

With the `imperfect` prop:
```js
<Tabs imperfect>
  <Tab label="Overview">
    Foo
  </Tab>
  <Tab label="Technical information">
    Bar
  </Tab>
</Tabs>
```

The `Tabs` component is extremely customisable:
```js
const styled = require('react-emotion').default;

const StyledTabs = styled(Tabs)({
  padding: 6,
  border: '2px solid red'
});

const CustomLabelWrapper = styled('header')({
  color: 'green',
  backgroundColor: 'pink',
  display: 'flex',
  borderRadius: 20,
  overflow: 'hidden'
}, ({ space }) => ({
  padding: space
}));

const CustomLabel = styled('h5')({
  paddingTop: 4,
  paddingBottom: 4,
  flex: 1,
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 300,
  cursor: 'pointer'
}, ({ active, italic }) => {
  const styles = [];

  if (active) styles.push({ textDecoration: 'underline' });
  if (italic) styles.push({ fontStyle: 'italic' });

  return styles;
});

const StyledTab = styled(Tab)({
  padding: 24,
  color: 'white',
  fontFamily: 'sans-serif',
  backgroundColor: 'purple'
});

<StyledTabs
  labelWrapper={CustomLabelWrapper}
  labelWrapperProps={{ space: 12 }}
  labelComponent={CustomLabel}
  labelProps={{ italic: true }}
  imperfect
>
  <StyledTab label="Overview">
    Foo
  </StyledTab>
  <StyledTab label="Technical information">
    Bar
  </StyledTab>
</StyledTabs>
```
