<h1 align="center">
  vx-components-react
</h1>

<div align="center">

[![npm version](https://badgen.net/npm/v/vx-components-react)](https://www.npmjs.com/package/vx-components-react)
[![npm downloads](https://badgen.net/npm/dw/vx-components-react)](https://www.npmjs.com/package/vx-components-react)
[![license](https://badgen.net/npm/license/vx-components-react)](https://www.npmjs.com/package/vx-components-react)
[![publish size](https://badgen.net/packagephobia/publish/vx-components-react)](https://packagephobia.now.sh/result?p=vx-components-react)
[![install size](https://badgen.net/packagephobia/install/vx-components-react)](https://packagephobia.now.sh/result?p=vx-components-react)
[![dependencies](https://badgen.net/david/dep/rafaelklaessen/vx-components-react)](https://david-dm.org/rafaelklaessen/vx-components-react)
[![devDependencies](https://badgen.net/david/dev/rafaelklaessen/vx-components-react)](https://david-dm.org/rafaelklaessen/vx-components-react?type=dev)
[![peerDependencies](https://badgen.net/david/peer/rafaelklaessen/vx-components-react)](https://david-dm.org/rafaelklaessen/vx-components-react?type=peer)

</div>

## Installation
vx-components-react is available as an [npm package](https://www.npmjs.com/package/vx-components-react):

```
// npm
npm install vx-components-react

// yarn
yarn add vx-components-react
```

## Documentation/demo
You can find the documentation/demos [here](https://vx-components-react.netlify.com/).

## Quick example
View the [demos](https://vx-components-react.netlify.com/) to see all components.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'vx-components-react';

const App = () => (
  <Button primary>
    Foo bar
  </Button>
);

ReactDOM.render(App, document.getElementById('root'));
```

## Development
To run the demo locally, run:
```
// npm
npm install & npm run docs

// yarn
yarn install && yarn docs
```
This will run the styleguide used in the demo locally. It will automatically update whenever you change a component.

The demo uses `react-styleguidist`, read more about it [here](https://react-styleguidist.js.org/).

## License
MIT
