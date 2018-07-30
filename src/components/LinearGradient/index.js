import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

// Prevent passing on the `from`, `to` and `vertical` prop
const CustomDiv = ({ from, to, vertical, ...props }) => <div {...props} />

const LinearGradient = styled(CustomDiv)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0
}, ({ from, to, vertical }) => ({
  background: `linear-gradient(${
    vertical ? 'to bottom' : 'to left'
  }, ${from}, ${to})`
}));

LinearGradient.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

LinearGradient.defaultProps = {
  vertical: false
};

export default LinearGradient;
