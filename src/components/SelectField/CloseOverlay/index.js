import PropTypes from 'prop-types';
import styled from 'react-emotion';

const CloseOverlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1
}, ({ open }) => ({
  display: open ? 'block' : 'none'
}));

CloseOverlay.propTypes = {
  open: PropTypes.bool
};

CloseOverlay.defaultProps = {
  open: false
};

export default CloseOverlay;
