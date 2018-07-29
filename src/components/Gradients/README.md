This is a CSS-only reimplementation of [Vx's Gradients](https://vx-demo.now.sh/gradients)

Use them like this:
`<Gradients.LightgreenGreen />`

```js
const Gradients = require('./index').default;

<div style={{ display: 'flex' }}>
  <div style={{ marginRight: 24, width: 200, height: 300 }}>
    <Gradients.LightgreenGreen />
  </div>
  <div style={{ width: 200, height: 300 }}>
    <Gradients.OrangeRed vertical />
  </div>
</div>
```
