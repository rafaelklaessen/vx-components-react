```js
const Link = require('./index').default;

<Link href="https://vx-demo.now.sh/" target="_blank">
  vx-demo.now.sh
</Link>
```

You can use the `Link.asLink` API to use custom components as links. This is useful when using e.g `Link` from `react-router-dom`. Make sure that the given Component passes on the `className` prop.
```js
const Link = require('./index').default;

const ImportantLink = ({ children, ...props }) =>
  <a {...props}>{children}!!!!</a>;

const CustomLink = Link.asLink(ImportantLink);

<CustomLink href="https://vx-demo.now.sh/" target="_blank">
  vx-demo.now.sh
</CustomLink>
```
