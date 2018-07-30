```js
const Gradients = require('../Gradients').default;

<div style={{ width: 240 }}>
  <GradientCard gradient={<Gradients.PinkRed />}>
    <GradientCard.Title>@vx/annotation</GradientCard.Title>
    <GradientCard.Content>
      This package contains a <Code noBg>LinePath</Code> component that can do stuff. This is an example description.
    </GradientCard.Content>
  </GradientCard>
</div>
```

Content of the `GradientCard` can be centered easily using the `centerContent` prop:
```js
const Gradients = require('../Gradients').default;

<div style={{ width: 240 }}>
  <GradientCard gradient={<Gradients.DarkgreenGreen />} centerContent>
    <GradientCard.Title>@vx/annotation</GradientCard.Title>
    <GradientCard.Content>
      This package contains a <Code noBg>LinePath</Code> component that can do stuff. This is an example description.
    </GradientCard.Content>
  </GradientCard>
</div>
```

The `gradient` prop expects a `LinearGradient` or a component that renders a `LinearGradient`.

The following examples would all be OK:
```js
const Gradients = require('../Gradients').default;

const MyCustomGradient = () => <LinearGradient from="red" to="green" />;

<div style={{ width: 240 }}>
  <GradientCard gradient={<Gradients.PurpleRed />} />
  <Space />
  <GradientCard gradient={<LinearGradient from="yellow" to="blue" />} />
  <Space />
  <GradientCard gradient={<MyCustomGradient />} />
</div>
```
