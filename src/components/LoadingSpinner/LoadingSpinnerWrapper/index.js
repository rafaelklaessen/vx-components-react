import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white } from '../../../colors';

const CustomDiv = ({ fullScreen, ...props }) => <div {...props} />

const LoadingSpinnerWrapper = styled('div')({
  display: 'inline-block'
}, ({ fullScreen }) => {
  if (fullScreen) return {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999
  };
});

LoadingSpinnerWrapper.propTypes = {
  fullScreen: PropTypes.bool
};

LoadingSpinnerWrapper.defaultProps = {
  fullScreen: false
};

export default LoadingSpinnerWrapper;
