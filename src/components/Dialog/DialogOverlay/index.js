import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black } from '../../../colors';
import { transition, mediaQuery } from '../../../styles';

const CustomDiv = ({ open, ...props }) => <div {...props} />

const DialogOverlay = styled(CustomDiv)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: black,
  zIndex: -1,
  transition,
  [mediaQuery(560)]: {
    background: 'none'
  }
}, ({ open }) => ({
  opacity: open ? .5 : 0
}));

DialogOverlay.propTypes = {
  open: PropTypes.bool
};

DialogOverlay.defaultProps = {
  open: false
};

export default DialogOverlay;
