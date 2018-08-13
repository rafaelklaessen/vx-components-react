import styled from 'react-emotion';
import { black, darkGrey } from '../../../../../colors';
import { transition } from '../../../../../styles';

const SelectArrowWrapper = styled('button')({
  padding: 0,
  width: 24,
  height: 24,
  background: 'none',
  border: 0,
  fill: black,
  cursor: 'pointer',
  appearance: 'none',
  outlineWidth: 0,
  transition,
  ':hover': {
    fill: darkGrey
  }
});

export default SelectArrowWrapper;
