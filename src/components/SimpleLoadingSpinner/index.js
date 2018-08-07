import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinnerWrapper from '../LoadingSpinner/LoadingSpinnerWrapper';
import RotatingLoadingSpinnerWrapper from './RotatingLoadingSpinnerWrapper';

const SimpleLoadingSpinner = ({
  size,
  color,
  innerWrapperProps,
  svgProps,
  circleProps,
  fullScreen,
  ...props
}) => (
  <LoadingSpinnerWrapper fullScreen={fullScreen} {...props}>
    <RotatingLoadingSpinnerWrapper size={size} {...innerWrapperProps}>
      <svg width={size} height={size} viewBox="-75 -75 150 150" {...svgProps}>
        <circle
          fill="transparent"
          cx="0"
          cy="0"
          r={65}
          stroke={color}
          strokeWidth={20}
          strokeLinecap="round"
          strokeDasharray={240}
          strokeDashoffset={80}
          {...circleProps}
        />
      </svg>
    </RotatingLoadingSpinnerWrapper>
  </LoadingSpinnerWrapper>
);

SimpleLoadingSpinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  innerWrapperProps: PropTypes.object,
  svgProps: PropTypes.object,
  circleProps: PropTypes.object,
  fullScreen: PropTypes.bool
};

SimpleLoadingSpinner.defaultProps = {
  size: 150,
  color: '#58728D',
  innerWrapperProps: null,
  svgProps: null,
  circleProps: null,
  fullScreen: false
};

export default SimpleLoadingSpinner;
