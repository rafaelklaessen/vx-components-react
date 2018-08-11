import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const CustomDiv = ({ width, height, ...props }) => <div {...props} />;

const Space = styled(CustomDiv)(({ width, height }) => {
  const styles = [];

  if (width) {
    styles.push({ marginRight: width });
  }

  if (height) {
    styles.push({ marginBottom: height });
  }

  if (!width && !height) {
    styles.push({ marginBottom: 24 });
  }

  if (width && !height) {
    styles.push({ display: 'inline-block' });
  }

  return styles;
});

Space.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Space;
