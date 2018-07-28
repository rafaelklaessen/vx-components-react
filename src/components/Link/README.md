```js
const Link = require('./index').default;

<Link>Go to google.com</Link>
```

You can use the `Link.asLink` API to use custom components as links. This is useful when using e.g `Link` from `react-router-dom`. Make sure that the given Component passes on the `className` prop.
```js
const Link = require('./index').default;

const FakeLink = ({ children, ...props }) =>
  <div {...props}>{children}!!</div>;

const CustomLink = Link.asLink(FakeLink);

<CustomLink>Go to google.com</CustomLink>
```
