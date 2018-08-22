import React from 'react';
import PropTypes from 'prop-types';
import ProgressBarWrapper from './ProgressBarWrapper';
import ProgressBarFill from './ProgressBarFill';

const ProgressBar = ({
  color,
  backgroundColor,
  value,
  fillProps,
  indeterminate,
  ...props
}) => (
  <ProgressBarWrapper {...props}>
    <ProgressBarFill
      color={color}
      backgroundColor={backgroundColor}
      value={value}
      indeterminate={indeterminate}
      {...fillProps}
    />
  </ProgressBarWrapper>
);

ProgressBar.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  value: PropTypes.number,
  fillProps: PropTypes.object,
  indeterminate: PropTypes.bool
};

ProgressBar.defaultProps = {
  backgroundColor: '#EEEEEE',
  value: 0,
  fillProps: null,
  indeterminate: false
};

export default ProgressBar;
