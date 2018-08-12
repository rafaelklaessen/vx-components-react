import React from 'react';
import PropTypes from 'prop-types';
import ArrowButtonWrapper from './ArrowButtonWrapper';
import ArrowIcon from './ArrowIcon';

const ArrowButton = props => (
  <ArrowButtonWrapper {...props}>
    <ArrowIcon />
  </ArrowButtonWrapper>
);

ArrowButton.propTypes = {
  rotated: PropTypes.bool
};

ArrowButton.defaultProps = {
  rotated: false
};

export default ArrowButton;
