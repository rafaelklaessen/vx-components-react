import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { black } from '../../../colors';
import { transition } from '../../../styles';

const DialogOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: black,
  zIndex: -1,
  transition
}, ({ open }) => ({
  opacity: open ? .5 : 0
}));

DialogOverlay.propTypes = {
  open: PropTypes.bool
};

DialogOverlay.defaultProps = {
  open: false
};

export default DialogOverlay;
