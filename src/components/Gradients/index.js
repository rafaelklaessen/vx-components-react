import React from 'react';
import LinearGradient from '../LinearGradient';

const Gradients = {
  DarkgreenGreen: props =>
    <LinearGradient from="#184E86" to="#57CA85" {...props} />,
  LightgreenGreen: props =>
    <LinearGradient from="#42E695" to="#3BB2B8" {...props} />,
  OrangeRed: props =>
    <LinearGradient from="#FCE38A" to="#F38181" {...props} />,
  PinkBlue: props =>
    <LinearGradient from="#F02FC2" to="#6094EA" {...props} />,
  PinkRed: props =>
    <LinearGradient from="#F54EA2" to="#FF7676" {...props} />,
  PurpleOrange: props =>
    <LinearGradient from="#7117EA" to="#EA6060" {...props} />,
  PurpleRed: props =>
    <LinearGradient from="#622774" to="#C53364" {...props} />,
  PurpleTeal: props =>
    <LinearGradient from="#5B247A" to="#1BCEDF" {...props} />,
  SteelPurple: props =>
    <LinearGradient from="#65799B" to="#5E2563" {...props} />,
  TealBlue: props =>
    <LinearGradient from="#17EAD9" to="#6078EA" {...props} />
};

export default Gradients;
