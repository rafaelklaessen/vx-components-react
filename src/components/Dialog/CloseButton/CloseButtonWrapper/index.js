import styled from 'react-emotion';
import { darkGrey, black } from '../../../../colors';
import { transition } from '../../../../styles';

const CloseButtonWrapper = styled('button')({
  position: 'absolute',
  top: 32,
  right: 32,
  padding: 0,
  width: 24,
  height: 24,
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
});

export default CloseButtonWrapper;
