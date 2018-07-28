const path = require('path');

module.exports = {
  logger: {
    // Suppress warnings about files not exporting components
    warn: (message) => {
      const ignored =
        'matches a pattern defined in “components” or “sections” options in your style guide config but doesn’t export a component.';
      if (message.includes(ignored)) return;
      console.warn(message);
    }
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
