import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { cardGrey } from '../../../../colors';
import { transition } from '../../../../styles';

const OptionWrapper = styled('div')({
  position: 'absolute',
  top: -2,
  left: -2,
  paddingLeft: 24,
  paddingRight: 24,
  backgroundColor: cardGrey,
  borderRadius: 14,
  boxSizing: 'border-box',
  transition
}, ({ fullWidth, open }) => ({
  paddingTop: open ? 24 : 0,
  paddingBottom: open ? 24 : 0,
  minWidth: fullWidth ? '100%' : 256,
  height: open ? 'auto' : 0,
  opacity: open ? 1 : 0,
  zIndex: open ? 2 : -1
}));

OptionWrapper.propTypes = {
  fullWidth: PropTypes.bool,
  open: PropTypes.bool
};

OptionWrapper.defaultProps = {
  fullWidth: false,
  open: false
};

export default OptionWrapper;
