const path = require('path');

const componentPath = component => `src/components/${component}/index.js`;

const componentSection = component => ({
  name: component,
  components: componentPath(component)
});

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
  },
  require: [
    path.join(__dirname, 'styleguide/app.css')
  ],
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    componentSection('Button'),
    componentSection('LinkButton'),
    componentSection('TextInput'),
    componentSection('Checkbox'),
    componentSection('Radio'),
    componentSection('Toggle'),
    componentSection('Card'),
    componentSection('GradientCard'),
    componentSection('Gradients'),
    componentSection('LinearGradient'),
    componentSection('Link'),
    componentSection('Code'),
    componentSection('BlockQuote'),
    componentSection('Tabs'),
    componentSection('Tab'),
    componentSection('BigTitle'),
    componentSection('EnormousTitle'),
    componentSection('Space'),
    {
      name: 'VxThemeProvider',
      components: componentPath('ThemeContext/VxThemeProvider')
    }
  ]
};
