import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinnerWrapper from './LoadingSpinnerWrapper';
import Spinner from 'detroit-loading-spinner';

const LoadingSpinner = ({
  size,
  color,
  segments,
  segmentMax,
  padding,
  cornerRadius,
  spinnerProps,
  fullScreen,
  ...props
}) => (
  <LoadingSpinnerWrapper fullScreen={fullScreen} {...props}>
    <Spinner
      size={size}
      color={color}
      segments={segments}
      segmentMax={segmentMax}
      padding={padding}
      cornerRadius={cornerRadius}
      {...spinnerProps}
    />
  </LoadingSpinnerWrapper>
);

LoadingSpinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  segments: PropTypes.number,
  segmentMax: PropTypes.number,
  padding: PropTypes.number,
  cornerRadius: PropTypes.number,
  spinnerProps: PropTypes.object,
  fullScreen: PropTypes.bool
};

LoadingSpinner.defaultProps = {
  size: 150,
  color: '#58728D',
  segments: 4,
  segmentMax: 65,
  padding: 2,
  cornerRadius: 20,
  spinnerProps: null,
  fullScreen: false
};

export default LoadingSpinner;
