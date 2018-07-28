import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext, { defaultTheme } from '../index';
import FontProvider from './FontProvider';

const VxThemeProvider = ({ theme, children, ...props }) => (
  <ThemeContext.Provider
    value={{ ...defaultTheme, ...theme }}
    {...props}
  >
    <FontProvider>
      {children}
    </FontProvider>
  </ThemeContext.Provider>
);

VxThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node
};

export default VxThemeProvider;
