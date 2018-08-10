`vx-components-react` is a component library based on [vx-demo.now.sh](https://vx-demo.now.sh/). It is designed to be flexible and easily modifiable.

### Undocumented props are passed on to the root element
Props that aren't documented or that aren't used in the examples will be passed on to the root element. For example, it is possible to do this:
```js
const styled = require('react-emotion').default;

const StyledButton = styled(Button)({
  color: '#000000',
  backgroundColor: '#FFD54F',
  ':hover': {
    backgroundColor: '#FFC107',
    transform: 'none'
  },
  ':active': {
    transform: 'scale(.95)'
  }
});

<StyledButton onFocus={() => console.log('Focus!')} rect>
  Click me
</StyledButton>
```

Even though the `onFocus` and `className` (provided by `emotion`) props are not documented on `Button`.

This makes the components so flexible.
