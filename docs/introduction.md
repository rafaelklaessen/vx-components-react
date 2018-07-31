`vx-components-react` is a component library based on [vx-demo.now.sh](https://vx-demo.now.sh/). It is designed to be flexible and easily modifiable.

### Undocumented props are passed on to the root element
Props that aren't documented or that aren't used in the examples will be passed on to the root element. For example, it is possible to do this:
```js
<Button onFocus={() => console.log('Focus!')} style={{ color: 'green' }}>
  Click me
</Button>
```

Even though the `onFocus` and `style` props are not documented on `Button`.

This makes the components so flexible.
