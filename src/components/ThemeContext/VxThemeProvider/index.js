import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext, { defaultTheme } from '../index';

const VxThemeProvider = ({ theme, ...props }) =>
  <ThemeContext.Provider value={{ ...defaultTheme, ...theme }} {...props} />;

VxThemeProvider.propTypes = {
  theme: PropTypes.object
};

export default VxThemeProvider;
