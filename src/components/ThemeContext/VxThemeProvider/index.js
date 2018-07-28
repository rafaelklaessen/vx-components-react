import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext, { defaultTheme } from '../index';
import { defaultFontFamily } from '../../../styles';

const fontStyle = { fontFamily: defaultFontFamily };

const VxThemeProvider = ({ theme, ...props }) => (
  <div style={fontStyle}>
    <ThemeContext.Provider
      value={{ ...defaultTheme, ...theme }}
      {...props}
    />
  </div>
);

VxThemeProvider.propTypes = {
  theme: PropTypes.object
};

export default VxThemeProvider;
