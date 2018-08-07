import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';
import LoadingSpinnerWrapper from '../../LoadingSpinner/LoadingSpinnerWrapper';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const CustomLoadingSpinnerWrapper = ({ size, ...props }) => (
  <LoadingSpinnerWrapper {...props} />
);

const RotatingLoadingSpinnerWrapper = styled(CustomLoadingSpinnerWrapper)({
  animation: `${rotate} .5s linear infinite`
}, ({ size }) => ({
  width: size,
  height: size
}));

RotatingLoadingSpinnerWrapper.propTypes = {
  size: PropTypes.number
};

RotatingLoadingSpinnerWrapper.defaultProps = {
  size: 150
};

export default RotatingLoadingSpinnerWrapper;
