import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { darkGrey, black } from '../../../../../colors';
import { transition } from '../../../../../styles';

const ArrowButtonWrapper = styled('button')({
  marginLeft: 'auto',
  padding: 0,
  width: 28,
  height: 28,
  background: 'none',
  border: 0,
  fill: darkGrey,
  cursor: 'pointer',
  appearance: 'none',
  outlineWidth: 0,
  transition,
  ':hover': {
    fill: black
  }
}, ({ rotated }) => {
  if (rotated) return {
    transform: 'rotate(-180deg)'
  };
});

ArrowButtonWrapper.propTypes = {
  rotated: PropTypes.bool
};

ArrowButtonWrapper.defaultProps = {
  rotated: false
};

export default ArrowButtonWrapper;
