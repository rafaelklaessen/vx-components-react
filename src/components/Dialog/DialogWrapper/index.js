import PropTypes from 'prop-types';
import styled from 'react-emotion';

const DialogWrapper = styled('section')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 999999999999999
}, ({ open }) => {
  if (!open) return { top: '-100%' };
});

DialogWrapper.propTypes = {
  open: PropTypes.bool
};

DialogWrapper.defaultProps = {
  open: false
};

export default DialogWrapper;
