import React, { Component } from 'react';
import ThemeContext, { defaultTheme } from '../index';
import getDisplayName from 'react-display-name';

const withTheme = WrappedComponent =>
  class WithTheme extends Component {
    static displayName = `withTheme(${getDisplayName(WrappedComponent)})`;

    render = () => (
      <ThemeContext.Consumer>
        {theme =>
          <WrappedComponent
            {...this.props}
            theme={theme || defaultTheme}
          />
        }
      </ThemeContext.Consumer>
    );
  }

export default withTheme;
