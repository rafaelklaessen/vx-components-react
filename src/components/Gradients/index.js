import generateGradient from './generateGradient';

const Gradients = {
  DarkgreenGreen: generateGradient(
    'DarkgreenGreen',
    '#184E86',
    '#57CA85'
  ),
  LightgreenGreen: generateGradient(
    'LightgreenGreen',
    '#42E695',
    '#3BB2B8'
  ),
  OrangeRed: generateGradient(
    'OrangeRed',
    '#FCE38A',
    '#F38181'
  ),
  PinkBlue: generateGradient(
    'PinkBlue',
    '#F02FC2',
    '#6094EA'
  ),
  PinkRed: generateGradient(
    'PinkRed',
    '#F54EA2',
    '#FF7676'
  ),
  PurpleOrange: generateGradient(
    'PurpleOrange',
    '#7117EA',
    '#EA6060'
  ),
  PurpleRed: generateGradient(
    'PurpleRed',
    '#622774',
    '#C53364'
  ),
  PurpleTeal: generateGradient(
    'PurpleTeal',
    '#5B247A',
    '#1BCEDF'
  ),
  SteelPurple: generateGradient(
    'SteelPurple',
    '#65799B',
    '#5E2563'
  ),
  TealBlue: generateGradient(
    'TealBlue',
    '#17EAD9',
    '#6078EA'
  )
};

export default Gradients;
