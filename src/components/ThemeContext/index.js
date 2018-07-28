import React from 'react';
import { red, darkGrey } from '../../colors';
import { defaultFontFamily, titleFontFamily } from '../../styles';

export const defaultTheme = {
  primaryColor: red,
  secondaryColor: darkGrey,
  fontFamily: defaultFontFamily,
  titleFontFamily
};

const ThemeContext = React.createContext(defaultTheme);

export default ThemeContext;
