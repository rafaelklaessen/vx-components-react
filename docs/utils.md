vx-components-react uses some color/style utils internally. These utils can be imported/used like this:
```js static
import { colors, styles } from 'vx-components-react';

console.log(colors.red); // "#FC2E1C"
console.log(styles.mediaQuery(768)) // "@media screen and (max-width: 768px)"
```

The following colors/styles are exported:

#### `colors`
- `colors.red`
- `colors.black`
- `colors.white`
- `colors.lightGrey`
- `colors.darkGrey`
- `colors.ultraDarkGrey`
- `colors.cardGrey`

#### `styles`
- `styles.defaultFontFamily`
- `styles.titleFontFamily`
- `styles.transition`
- `styles.mediaQuery`

Note that these utils are designed to be *internal* utils and not publicly used utils. Use them with caution.
