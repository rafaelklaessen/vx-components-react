import React from 'react';
import { red, grey } from '../../colors';
import { defaultFontFamily, titleFontFamily } from '../../styles';

export const defaultTheme = {
  primaryColor: red,
  secondaryColor: grey,
  fontFamily: defaultFontFamily,
  titleFontFamily
};

const ThemeContext = React.createContext(defaultTheme);

export default ThemeContext;
