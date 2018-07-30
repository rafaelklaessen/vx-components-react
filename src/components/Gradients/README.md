This is a CSS-only reimplementation of [vx's Gradients](https://vx-demo.now.sh/gradients)

Use them like this:
`<Gradients.LightgreenGreen />`

Note that all these gradients are build directly with the `LinearGradient` component.

```js
const Gradients = require('./index').default;

const styles = {
  position: 'relative',
  width: 200,
  height: 300
};

<div style={{ display: 'flex' }}>
  <div style={{ ...styles, marginRight: 24 }}>
    <Gradients.LightgreenGreen />
  </div>
  <div style={styles}>
    <Gradients.OrangeRed vertical />
  </div>
</div>
```

The following gradients are provided:
- `DarkgreenGreen`
- `LightgreenGreen`
- `OrangeRed`
- `PinkBlue`
- `PinkRed`
- `PurpleOrange`
- `PurpleRed`
- `PurpleTeal`
- `SteelPurple`
- `TealBlue`
