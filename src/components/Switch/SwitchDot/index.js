import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { white, darkGrey } from '../../../colors';
import { transition } from '../../../styles';

const SwitchDot = styled('span')({
  position: 'absolute',
  top: 2,
  width: 12,
  height: 12,
  borderRadius: 7,
  transition
}, ({ checked }) => ({
  left: checked ? 17 : 2,
  backgroundColor: checked ? white : darkGrey
}));

SwitchDot.propTypes = {
  checked: PropTypes.bool
};

SwitchDot.defaultProps = {
  checked: false
};

export default SwitchDot;
